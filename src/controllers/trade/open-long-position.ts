import { v4 as uuidv4 } from 'uuid';

import { runInTransaction } from "../../db/index";
import { EPositionType, ETransactionStatus, ETransactionType, IAsset, IClient, IPlatformBalance } from "../../models";
import Asset from "../../db/models/asset";
import Client from "../../db/models/client";
import Transaction from "../../db/models/transaction";
import PlatformBalance from "../../db/models/platform-balance";

interface IOpenRequest {
  amount_token: number;
  asset_id: string;
  user_id: string;
}

const TEST_REQUEST: IOpenRequest = {
  amount_token: 10,
  asset_id: 'c9702ea3-a29f-4eb9-8d73-5490a925eeef',
  user_id: 'a02656a4-f459-4ec0-a287-e84634c0742f',
}

/** @todo get real price of the token */
async function _getAssetPrice(ticker: string): Promise<number> {
  return 1 + Math.round(Math.random() * 10) / 10;
}

async function _calcSolAmount(ticker: string, amount_token: number): Promise<number> {
  const assetPrice = await _getAssetPrice(ticker);
  return assetPrice * amount_token;
}

/** @todo add wrapper function for negative findByPk cases, replace _getClient() and _getAsset() */
async function _getClient(user_id: string): Promise<IClient> {
  const client = await Client.findByPk(user_id);

  if (!client) {
    throw new Error('Client not found');
  }
  return client;
}

async function _getAsset(asset_id: string): Promise<IAsset> {
  const asset = await Asset.findByPk(asset_id);
  if (!asset) {
    throw new Error('Asset not found');
  }
  return asset;
}

async function _getPlatformBalance(): Promise<IPlatformBalance> {
  const platformBalance = await PlatformBalance.findOne();
  if (!platformBalance) {
    throw new Error('Platform balance not found');
  }
  return platformBalance;
}

async function _dexTransaction(client: IClient, asset: IAsset, amount_token: number): Promise<string> {
  /** @todo DEX transaction here */
  return 'test_dex_transaction_id';
}

async function _updateClientBalance(client: IClient, sol_amount: number): Promise<void> {
  await Client.update({
    balance_sol: +client.balance_sol + sol_amount,
    updated_at: new Date(),
  }, {
    where: {
      id: client.id
    }
  })
}

/** @todo convert to POST request, remove test data */
export default async (req: any, res: any): Promise<any> => {
  try {
    const { amount_token, asset_id, user_id } = TEST_REQUEST;
    /** @todo add fields validation */

    const asset = await _getAsset(asset_id);
    const client = await _getClient(user_id);
    const amount_sol = await _calcSolAmount(asset.ticker, amount_token);

    const isClientBalanceOk = client.balance_sol >= amount_sol;

    if (!isClientBalanceOk) {
      throw new Error('Not enough SOL');
    }

    /** Deduct sol */
    await _updateClientBalance(client, -amount_sol);
    /** @todo create pending transaction here */

    const dex_transaction_id = await _dexTransaction(client, asset, amount_token);

    if (!dex_transaction_id) {
      /** Return sol */
      await _updateClientBalance(client, amount_sol);
      throw new Error('DEX transaction failed');
    }

    await runInTransaction(async (transaction: any) => {
      const { id, balance_sol, balance_tokens } = await _getPlatformBalance();
      await PlatformBalance.update({
        balance_sol: balance_sol - amount_sol,
        balance_tokens: balance_tokens + amount_token,
        updated_at: new Date(),
      }, {
        where: {
          id
        },
        transaction
      });

      await Client.update({
        balance_tokens: +client.balance_tokens + amount_token,
        updated_at: new Date(),
      }, {
        where: {
          id: client.id
        },
        transaction
      });

      const transaction_id = uuidv4();

      await Transaction.create({
        id: transaction_id,
        client_id: user_id,
        asset_id,
        transaction_type: ETransactionType.OPEN_POSITION,
        position_type: EPositionType.LONG,
        amount_token,
        amount_sol,
        status: ETransactionStatus.SUCCESSFUL,
        dex_transaction_id,
        platform_balance_before: 10,
        platform_balance_after: 10,
        created_at: new Date(),
        updated_at: new Date()
      }, { transaction })
    });

    return res.status(200).send(`Success ${amount_sol}`);
  } catch (err: any) {
    return res.send('Error: ' + err.message);
  }
};

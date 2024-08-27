import { IAbstractEntity } from "@models/_abstract";
import { EPositionType, ETransactionStatus, ETransactionType } from "../enums";

export interface ITransaction extends IAbstractEntity {
  client_id: string;
  asset_id: string;
  transaction_type: ETransactionType;
  position_type: EPositionType;
  amount_token: number;
  amount_sol: number;
  status: ETransactionStatus;
  dex_transaction_id: string;
  platform_balance_before: number;
  platform_balance_after: number;
}
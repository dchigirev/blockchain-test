import { EPositionType, ETransactionStatus, ETransactionType } from "../enums";

export interface ITransaction {
  id: string;
  client_id: string;
  asset_id: string;
  transaction_type: ETransactionType;
  position_type: EPositionType;
  amount_token: number;
  quote_amount: number;
  status: ETransactionStatus;
  date: Date;
  dex_transaction_id: string;
  platform_balance_before: number;
  platform_balance_after: number;
}
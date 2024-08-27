import { ETickerSymbol } from "../enums";

export interface IAsset {
  id: string;
  ticker: ETickerSymbol;
  contract_address: string;
}
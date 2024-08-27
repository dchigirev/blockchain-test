import { IAbstractEntity } from "@models/_abstract";
import { ETickerSymbol } from "../enums";

export interface IAsset extends IAbstractEntity {
  ticker: ETickerSymbol;
  contract_address: string;
}
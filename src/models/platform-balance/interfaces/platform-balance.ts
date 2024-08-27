import { IAbstractEntity } from "@models/_abstract";

export interface IPlatformBalance extends IAbstractEntity {
  balance_tokens: number;
  balance_sol: number;
}
import { IAbstractEntity } from "@models/_abstract";

export interface IClient extends IAbstractEntity {
  name: string;
  balance_sol: number;
  balance_tokens: number;
}
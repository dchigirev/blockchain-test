import { EPositionType, ETransactionStatus, ETransactionType } from '@models/transaction';
import {
  Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, DeletedAt, DataType, IsUUID, AllowNull, ForeignKey
} from 'sequelize-typescript';
import Asset from './assets';
import Client from './client';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
  modelName: 'Transaction',
  tableName: 'transaction',
})
export default class Transaction extends Model<Transaction> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public id: string;

  @AllowNull(false)
  @IsUUID(4)
  @ForeignKey(() => Client)
  @Column
  public client_id: string;

  @AllowNull(false)
  @IsUUID(4)
  @ForeignKey(() => Asset)
  @Column
  public asset_id: string;

  @Column(DataType.ENUM)
  public transaction_type: ETransactionType;

  @Column(DataType.ENUM)
  public position_type: EPositionType;

  @Column(DataType.DECIMAL)
  public amount_token: number;

  @Column(DataType.DECIMAL)
  public quote_amount: number;

  @Column(DataType.ENUM)
  public status: ETransactionStatus;

  @Column(DataType.STRING)
  public dex_transaction_id: string;

  @Column(DataType.DECIMAL)
  public platform_balance_before: number;

  @Column(DataType.DECIMAL)
  public platform_balance_after: number;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;

  @DeletedAt
  public deleted_at: Date;
}

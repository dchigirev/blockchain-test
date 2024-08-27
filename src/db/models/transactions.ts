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

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;

  @DeletedAt
  public deleted_at: Date;
}

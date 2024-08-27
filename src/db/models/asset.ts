import {
  Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, DeletedAt, DataType, IsUUID,
} from 'sequelize-typescript';
import { ETickerSymbol } from '../../models';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
  modelName: 'Asset',
  tableName: 'asset',
})
export default class Asset extends Model<Asset> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public id: string;

  /** @todo convert strings to enums */
  @Column(DataType.STRING)
  public ticker: ETickerSymbol;

  @Column(DataType.STRING)
  public contract_address: string;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;

  @DeletedAt
  public deleted_at: Date;
}

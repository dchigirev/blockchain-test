import {
  Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, DeletedAt, DataType, IsUUID,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
  modelName: 'PlatformBalance',
  tableName: 'platform_balance',
})
export default class PlatformBalance extends Model {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public id: string;

  @Column(DataType.DECIMAL)
  public balance_tokens: number;

  @Column(DataType.DECIMAL)
  public balance_sol: number;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;

  @DeletedAt
  public deleted_at: Date;
}

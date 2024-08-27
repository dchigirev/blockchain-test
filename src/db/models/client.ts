import {
  Table, PrimaryKey, Column, Model, CreatedAt, UpdatedAt, DeletedAt, DataType, IsUUID,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
  modelName: 'Client',
  tableName: 'client',
})
export default class Client extends Model<Client> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  public id: string;

  @Column
  public name: string;

  @Column(DataType.INTEGER)
  public balance_quote: number;

  @Column(DataType.DECIMAL)
  public balance_tokens: number;

  @CreatedAt
  public created_at: Date;

  @UpdatedAt
  public updated_at: Date;

  @DeletedAt
  public deleted_at: Date;
}

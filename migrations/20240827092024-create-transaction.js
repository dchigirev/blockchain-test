"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transaction", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      client_id: {
        foreignKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      asset_id: {
        foreignKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      transaction_type: {
        type: Sequelize.STRING,
      },
      position_type: {
        type: Sequelize.STRING,
      },
      amount_token: {
        type: Sequelize.DECIMAL,
      },
      amount_sol: {
        type: Sequelize.DECIMAL,
      },
      status: {
        type: Sequelize.STRING,
      },
      dex_transaction_id: {
        type: Sequelize.STRING,
      },
      platform_balance_before: {
        type: Sequelize.DECIMAL,
      },
      platform_balance_after: {
        type: Sequelize.DECIMAL,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        default: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transaction");
  },
};

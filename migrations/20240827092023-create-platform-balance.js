"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("platform_balance", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      balance_tokens: {
        type: Sequelize.DECIMAL,
      },
      balance_sol: {
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
    await queryInterface.dropTable("platform_balance");
  },
};

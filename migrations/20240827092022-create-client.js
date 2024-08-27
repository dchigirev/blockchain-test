"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("client", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
      },
      balance_sol: {
        type: Sequelize.DECIMAL,
      },
      balance_tokens: {
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
    await queryInterface.dropTable("client");
  },
};

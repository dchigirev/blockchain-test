"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("assets", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      ticker: {
        type: Sequelize.STRING,
      },
      contract_address: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("assets");
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "platform_balance",
      [
        {
          id: "5978eb88-7353-445a-aec1-b8fa8fd30822",
          balance_tokens: 1000,
          balance_sol: 1000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("platform_balance", null, {});
  },
};

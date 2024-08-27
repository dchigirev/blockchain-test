"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "clients",
      [
        {
          id: "a02656a4-f459-4ec0-a287-e84634c0742f",
          name: "First Client",
          balance_tokens: 100,
          balance_sol: 100,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0eb2d711-f198-4e5e-b60b-0568994308e5",
          name: "Second Client",
          balance_tokens: 200,
          balance_sol: 200,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("clients", null, {});
  },
};

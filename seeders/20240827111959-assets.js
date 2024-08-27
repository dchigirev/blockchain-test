"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "assets",
      [
        {
          id: "c9702ea3-a29f-4eb9-8d73-5490a925eeef",
          ticker: "doge",
          contract_address: "doge_address",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("assets", null, {});
  },
};

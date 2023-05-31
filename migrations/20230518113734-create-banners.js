'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('banners', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.BLOB
      },
      description: {
        type: Sequelize.TEXT
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('banners');
  }
};
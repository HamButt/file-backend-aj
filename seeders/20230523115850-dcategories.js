'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('dcategories', [
        {
          id:8,
          title: 'Rings'
        },
        {
          id:9,
          title: 'Necklaces'},
        {
          id:10,
          title: 'Chains'},
        {
          id:11,
          title: 'Braceletes'},
        {id:12,
          title: 'Pendants'},
        {
          id:13,
          title: 'Earrings'},
        {
          id:14,
          title: 'Nose Pins'},
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('dcategories', null, {});
  }
};

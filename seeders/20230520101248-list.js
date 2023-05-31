'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('lists', [
      {
        id:1,
        image: 'de.jpg',
        description:"Diamond Earrings"
      },
           {
           id:2,
           image: 'dr.jpg',
           description:"Diamond Rings"
     },
           {
           id:3,
           image: 'er.jpg',
           description:"Engagement Rings"
         },
           {
           id:4,
           image: 'gb.jpg',
           description:"Gold Bangles"
         },
           {
             id:5,
             image: 'gbr.jpg',
            description:"Gold Braceletes"
         },
           {
           id:6,
           image: 'ge.jpg',
           description:"Gold Earrings"
         },
           {
           id:7,
           image: 'np.jpg',
           description:"Nose Pins"
         },
           {
           id:8,
           image: 'ps.jpg',
           description:"Pendant Sets"
         }
     ], {});
    },
    
  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('lists', null, {});
     
  }
};

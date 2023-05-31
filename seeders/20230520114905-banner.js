'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('banners', [
      //   {
      //   id:1,
      //   banner:"grbanner.jpg",
      //   description: "Gold Rings",
      //   category_id:1
      // },
      // {
      //   id:2,
      //   banner:"gnbanner.jpg",
      //   description: "Gold Gold  Neckalces",
      //   category_id:2
      // },
      // {
      //   id:3,
      //   banner:"gcbanner.jpg",
      //   description: "Gold Chains",
      //   category_id:3
      // },
      // {
      //   id:4,
      //   banner:"gpbanner.jpg",
      //   description: "Gold Braceletes",
      //   category_id:4
      // },
      // {
      //   id:5,
      //   banner:"gebanner.jpg",
      //   description: "Gold Pendants",
      //   category_id:5
      // },
      // {
      //   id:6,
      //   banner:"gebanner.jpg",
      //   description: "Gold Earrings",
      //   category_id:6
      // },
      // {
      //   id:7,
      //   banner:"npbanner.jpg",
      //   description: "Gold Nose Pins",
      //   category_id:7
      // }

      // {
      //   id:8,
      //   banner:"drbanner.jpg",
      //   description: "Diamond Rings",
      //   category_id:8
      // },
      // {
      //   id:9,
      //   banner:"dnbanner.jpg",
      //   description: "Dimaond Neckalces",
      //   category_id:9
      // },
      // {
      //   id:10,
      //   banner:"dcbanner.jpg",
      //   description: "Dimaond Chains",
      //   category_id:10
      // },
      // {
      //   id:11,
      //   banner:"dbbanner.jpg",
      //   description: "Diamond Braceletes",
      //   category_id:11
      // },
      // {
      //   id:12,
      //   banner:"dpbanner.jpg",
      //   description: "Diamond Pendants",
      //   category_id:12
      // },
      // {
      //   id:13,
      //   banner:"debanner.jpg",
      //   description: "Dimaond Earrings",
      //   category_id:13
      // },
      // {
      //   id:14,
      //   banner:"dnpbanner.jpg",
      //   description: "Diamond Nose Pins",
      //   category_id:14
      // },

      {
        id:15,
        banner:"erbanner.jpg",
        description: "Engagement Rings",
        category_id:15
      },
      {
        id:16,
        banner:"gbnglbanner.jpg",
        description: "Gold Bangles",
        category_id:16
      },
      {
        id:17,
        banner:"npbanner.jpg",
        description: "Nose Pins",
        category_id:17
      },
      {
        id:18,
        banner:"psbanner.jpg",
        description: "Pendant Sets",
        category_id:18
      }
      

    ], {});
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('banners', null, {});
     
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('products', [
        {
        image:"gr1.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr2.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr3.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr4.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr5.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr6.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr7.jpg",
        description:"Gold Rings",
        category_id:1,
      },
        {
        image:"gr8.jpg",
        description:"Gold Rings",
        category_id:1,
      },

      // GOLD NECKALCES

        {
        image:"gn1.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn2.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn3.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn4.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn5.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn6.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn7.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },
        {
        image:"gn8.jpg",
        description:"Gold Necklaces",
        category_id:2,
      },

      // GOLD CHAIN

        {
        image:"gc1.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc2.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc3.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc4.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc5.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc6.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc7.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc8.jpg",
        description:"Gold Chains",
        category_id:3,
      },
        {
        image:"gc9.jpg",
        description:"Gold Chains",
        category_id:3,
      },

      // GOLD BRACELETS

        {
        image:"gb1.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb2.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb3.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb4.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb5.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb6.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb7.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb8.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },
        {
        image:"gb9.jpg",
        description:"Gold Braceletes",
        category_id:4,
      },

      // //GOLD PENDANTS

        {
        image:"gp1.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp2.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp3.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp4.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp5.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp6.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp7.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp8.jpg",
        description:"Gold Pendants",
        category_id:5,
      },
        {
        image:"gp9.jpg",
        description:"Gold Pendants",
        category_id:5,
      },

      // //GOLD EARRINGS
      
        {
        image:"ge1.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge2.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge3.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge4.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge5.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge6.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge7.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge8.jpg",
        description:"Gold Earrings",
        category_id:6,
      },
        {
        image:"ge9.jpg",
        description:"Gold Earrings",
        category_id:6,
      },

      // GOLD NOSE PINS

       {
        image:"1np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"2np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"3np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"4np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"5np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"6np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"7np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"8np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },
        {
        image:"9np.jpg",
        description:"Gold Nose Pins",
        category_id:7,
      },


      // DIAMOND ALL PRODUCTS

      // DIAMOND RINGS

      {
        image:"dr1.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr2.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr3.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr4.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr5.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr6.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr7.jpg",
        description:"Diamond Rings",
        category_id:8,
      },
        {
        image:"dr8.jpg",
        description:"Diamond Rings",
        category_id:8,
      },

      // DIAMOND NECKLACES

        {
        image:"dn1.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn2.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn3.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn4.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn5.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn6.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn7.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },
        {
        image:"dn8.jpg",
        description:"Diamond Necklaces",
        category_id:9,
      },

      // DIAMOND CHAINS

        {
        image:"dc1.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc2.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc3.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc4.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc5.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc6.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc7.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc8.jpg",
        description:"Diamond Chains",
        category_id:10,
      },
        {
        image:"dc9.jpg",
        description:"Diamond Chains",
        category_id:10,
      },

      // DIAMOND BRACELETES

        {
        image:"db1.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db2.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db3.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db4.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db5.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db6.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db7.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db8.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
        {
        image:"db9.jpg",
        description:"Diamond Braceletes",
        category_id:11,
      },
      
      // DIAMOND PAENDANTS

        {
        image:"dp1.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp2.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp3.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp4.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp5.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp6.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp7.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp8.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },
        {
        image:"dp9.jpg",
        description:"Diamond Pendants",
        category_id:12,
      },

      // DIAMOND EARRINGS
      
        {
        image:"de1.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de2.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de3.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de4.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de5.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de6.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de7.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de8.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },
        {
        image:"de9.jpg",
        description:"Diamond Earrings",
        category_id:13,
      },

      // DIAMOND NOSE PINS

       {
        image:"dnp1.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp2.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp3.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp4.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp5.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp6.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp7.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp8.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },
        {
        image:"dnp9.jpg",
        description:"Diamond Nose Pins",
        category_id:14,
      },

      
       // ENGAGEMENT RINGS

       {
        image:"er1.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er2.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er3.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er4.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er5.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er6.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er7.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er8.jpg",
        description:"Engagement Rings",
        category_id:15,
      },
        {
        image:"er9.jpg",
        description:"Engagement Rings",
        category_id:15,
      },

      // GOLD BANGLES

      {
        image:"gb1.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb2.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb3.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb4.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb5.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb6.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb7.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb8.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb9.jpg",
        description:"Gold Bangles",
        category_id:16,
      },
        {
        image:"gb10.jpg",
        description:"Gold Bangles",
        category_id:16,
      },

       //  NOSE PINS

       {
        image:"dnp1.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp2.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp3.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp4.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp5.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp6.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp7.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp8.jpg",
        description:"Nose Pins",
        category_id:17,
      },
        {
        image:"dnp9.jpg",
        description:"Nose Pins",
        category_id:17,
      },

       // PENDANTS SETS
      
        {
        image:"gp1.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp2.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp3.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp4.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp5.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp6.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp7.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp8.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"gp9.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp1.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp2.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp3.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp4.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp5.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp6.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp7.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
        {
        image:"dp8.jpg",
        description:"Pendant Sets",
        category_id:18,
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};

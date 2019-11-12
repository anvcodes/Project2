'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("locations", [{
     longitude: 46,
     latitude: 50,
     city: "New York",
     state:"NewYork",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      longitude: 46,
     latitude: 50,
     city: "New York",
     state:"NewYork",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      longitude: 46,
     latitude: 50,
     city: "New York",
     state:"NewYork",
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete("locations", null, {});
    
  }
};

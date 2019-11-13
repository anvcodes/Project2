'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      name: "McKenna",
      age: 20 ,
      region: "New York",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Amira",
      age: 20 ,
      region: "New York",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Nigel",
      age: 20 ,
      region: "New York",
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Users", null, {});

  }
};

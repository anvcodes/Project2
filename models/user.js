module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    region: DataTypes.STRING
  });
  return User;
};

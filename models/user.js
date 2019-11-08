module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("userData", {
    routeName: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  });
  return User;
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    region: DataTypes.STRING
  });
  return User;
};

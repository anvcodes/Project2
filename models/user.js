module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    region: DataTypes.STRING,
    displayName: DataTypes.URL
  });
  return User;
};

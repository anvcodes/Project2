module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    region: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.belongsToMany(models.User, {
      as: "matches",

      through: models.Match
    });
  };
  return User;
};

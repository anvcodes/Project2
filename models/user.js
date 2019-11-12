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
      as: "match",

      through: models.Matches
    });
    User.belongsToMany(models.User, {
      as: "userLocation",

      through: models.locations,

      foreignKey: {
        allowNull: true,
        defaultValue: 2,
        unique: false
      }
    });
  };
  return User;
};

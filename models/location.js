module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("locations", {
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    venue: DataTypes.STRING
  });

  Location.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        defaultValue: 2
      },
      as: "userLocation",

      through: models.User
    });
  };
  return Location;
};

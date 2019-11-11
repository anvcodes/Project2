module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("locations", {
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    venue: DataTypes.STRING
  });
  return Location;
};

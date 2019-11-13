module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("ProfileBuilder", {
    displayName: DataTypes.STRING,
    bio: DataTypes.TEXT,
    interests: DataTypes.STRING,
    horoscope: DataTypes.STRING
  });
  return Profiles;
};

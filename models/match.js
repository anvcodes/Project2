module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define("Match", {
    accepted: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Match.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Match.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Match;
};

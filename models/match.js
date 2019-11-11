module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define("Matches", {
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    matchesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Match.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Match.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      as: "matches",

      through: models.User
    });
  };
  return Match;
};

module.exports = function(sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    title: {
      type: DataTypes.STRING, //textfield
      allowNull: false
    },
    requirements: {
      type: DataTypes.STRING, // textbox
      allowNull: false
    },
    compensation: {
      type: DataTypes.STRING //textfield
    },
    duties: {
      type: DataTypes.STRING // textbox
    },
    isFullTime: {
      type: DataTypes.BOOLEAN //checkbox
    }
  }, {
    classMethods: {
      associate: function(models) {
        Position.belongsTo(models.Startup);
      }
    }
  });
  return Position;
};

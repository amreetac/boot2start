module.exports = function (sequelize, DataTypes) {
  var Startup = sequelize.define('Startup', {
    name: {
      type: DataTypes.STRING // textfield
    },
    logoURL: {
      type: DataTypes.STRING // callback from upload
    },
    email: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING // textfield
    }
  }, {
    classMethods: {
      associate: function (models) {
        Startup.hasMany(models.Position);
      }
    }
  });
  return Startup;
};

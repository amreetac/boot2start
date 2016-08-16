module.exports = function(sequelize, DataTypes) {
  var Bootcamp = sequelize.define('Bootcamp', {
    name: {
      type: DataTypes.STRING // textfield
    },
    logoURL: {
      type: DataTypes.STRING // callback from upload
    }
  }, {
    classMethods: {
      associate: function(models) {
        Bootcamp.hasMany(models.Candidate)
      }
    }
  });
  return Bootcamp;
};

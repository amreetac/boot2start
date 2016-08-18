module.exports = function(sequelize, DataTypes) {
  var Bootcamp = sequelize.define('Bootcamp', {
    name: {
      type: DataTypes.STRING, // textfield
      allowNull: false,
      unique: true
    },
    logoURL: {
      type: DataTypes.STRING, // callback from upload
      allowNull: false
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

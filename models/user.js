module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING, // textfield
      allowNull: false,
      unique: true,
      len: [3]
    },
    password: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    }
  });
  return User;
};

module.exports = function (sequelize, DataTypes) {
  var Candidate = sequelize.define('Candidate', {
    firstName: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    email: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    bootcampCourse: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    resumeURL: {
      type: DataTypes.STRING // callback from upload
    },
    pictureURL: {
      type: DataTypes.STRING // callback from upload
    },
    city: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    state: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    courseFinish: {
      type: DataTypes.STRING, // textfield
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT // textbox
    },
    skills: {
      type: DataTypes.TEXT // textbox
    }
  });
  return Candidate;
};

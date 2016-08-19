const models = require('../models');
module.exports = {
  get: function (id) {
    if (!id) {
      cb();
    } else {

    }
  },

  post: function (reqBody, cb) {
    console.log('POST candidate route');
    console.log(`reqBody.BootcampId: ------ ${reqBody.BootcampId}`);
    db.Candidate.create({

      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      phoneNumber: String(reqBody.phoneNumber),
      email: reqBody.email,
      bootcampCourse: reqBody.bootcampCourse,
      resumeURL: reqBody.resumeURL,
      pictureURL: reqBody.pictureURL,
      city: reqBody.city,
      state: reqBody.state,
      courseFinish: reqBody.courseFinish,
      bio: reqBody.bio,
      skills: reqBody.skills,
      BootcampId: parseInt(reqBody.bootcampId)

    }, {
      include: [models.Bootcamp]
    }).then(function(candidate) {

        cb(candidate);

    })
  }
}

module.exports = {

  get: function (cb) {
    console.log('bootcamps route');

    db.Bootcamp.findAll({}).then(function (bootcamps) {
      console.log(`bootcamps: ${JSON.stringify(bootcamps)}`);
      return cb(bootcamps);
    });
  }




}

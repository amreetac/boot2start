module.exports = {
  get: function (id, cb) {
    if (!id) {
      cb();
    } else {

    }
  },

  post: function (resBody, cb) {
    console.log('POST bootcamp route');
    db.Bootcamp.create({
      name: resBody.name,
      logoURL: resBody.logoURL
    }).then(function() {
      cb();
    })
  }
}

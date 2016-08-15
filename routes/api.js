module.exports = function (app) {

  // POST bootcamp, startup or candidate
  // ==============================================================================
  app.post('/api/create/:route', function (req, res) {
    let body = req.body;
    let route = req.params.route;
    console.log(`body: ${body}`);
    switch (route) {

      // CREATE BOOTCAMP
    case 'bootcamp':
      console.log('bootcamp route');
      break;

      // CREATE CANDIDATE
    case 'candidate':
      console.log('candidate route');
      break;

      // CREATE STARTUP
    case 'startup':
      console.log('startup route');
      break;

      // CREATE USER
    case 'user':
      console.log('user route');
      db.User.create({
        email: body.email,
        password: body.password
      }).then(function () {
        db.User.findAll({}).then(function (users) {
          console.log(users);
          res.json({
            success: true,
            users: users
          });
        });
      });
      break;

      // ROUTE NOT FOUND
    default:
      console.log('route not found:', route);
      res.json({
        success: false,
        message: 'err: route not found',
        route: route
      });
    }

  });

  // PUT to bootcamp, startup or candidate
  // ==============================================================================
  app.put('/api/update/:route/:id', function (req, res) {
    let id = 'id = ' + req.params.id;
    let route = req.params.route;
    console.log(id);
    console.log(`route: ${route}`);
    switch (route) {

      // UPDATE BOOTCAMP
    case 'bootcamp':
      console.log('bootcamp route');
      break;

      // UPDATE CANDIDATE
    case 'candidate':
      console.log('candidate route');
      break;

      // UPDATE STARTUP
    case 'startup':
      console.log('startup route');
      break;

      // ROUTE NOT FOUND
    default:
      console.log('route not found:', route);
      res.json({
        success: false,
        message: 'err: route not found',
        route: route,
        id: id
      });
    }

  });

  // DELETE bootcamp, startup
  // ==============================================================================
  app.delete('/api/delete/:route/:id', function (req, res) {
    let route = req.params.route;
    let id = 'id = ' + req.params.id;
    console.log(`route: ${route}`);
    console.log(id);
    switch (route) {
    case 'bootcamp':
      console.log('bootcamp route');
      break;
    case 'candidate':
      console.log('candidate route');
      break;
    case 'startup':
      console.log('startup route');
      break;
    default:
      console.log('route not found:', route);
      res.json({
        success: false,
        message: 'err: route not found',
        route: route,
        id: id
      });
    }

  });

}

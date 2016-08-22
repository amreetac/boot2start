bcrypt = require("bcrypt-nodejs");
const bootcampController = require('../controllers/bootcamp');
const candidateController = require('../controllers/candidate');
const controllers = {
  bootcamp: bootcampController,
  candidate: candidateController
}

module.exports = function(app) {

  // POST ROUTES
  // ==============================================================================
  app.post('/api/create/:route', function(req, res) {
    let body = req.body;
    let route = req.params.route;
    switch (route) {

      // CREATE BOOTCAMP
      case 'bootcamp':
        controllers[route].post(body, () => {
          res.redirect('/bootcamps');
        })
        break;

      // CREATE CANDIDATE
      case 'candidate':
        controllers[route].post(body, (candidate) => {
          res.json({
            success: true,
            candidate: candidate
          });
        });
        break;

      // CREATE STARTUP
      case 'startup':
        console.log('POST startup route');
        db.Startup.create({

          name: body.name,
          logoURL: body.logoURL,
          email: body.email,
          phoneNumber: body.phoneNumber,

        }).then(function() {
          db.Startup.findAll({}).then(function(startups) {
            res.json({
              success: true,
              startups: startups
            })
          })
        })
        break;

      // CREATE USER
      case 'user-signup':

        console.log('user-signup route');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.password, salt);

        //creating a user from the email and password provided
        db.User.create({
          email: req.body.email,
          password: hash
         //sending the newly created user to the client
        }).then(function(dbUser) {
          res.json(dbUser.dataValues);
           //if there are any errors creating our user, we will gracefully catch the error send the error to the client instead of throwing it (which would crash our server)
         }).catch(function(err) {
          res.json({message: err.message});
         });
         break;

     // USER SIGNIN
      case 'user-signin':

        console.log('user-signin route');
        //looking for one user whos password has the email and password submitted
        db.User.findOne({
        where: {email: req.body.email} }).then(function(dbUser) {
         //if no user is found, we'll send back a message saying so
          if (!dbUser) {
            res.json({
              success: false,
              message: "User not found"
            });
          //otherwise we'll send back the user
          } else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
            res.json(dbUser.dataValues);

          //if the password is invalid, we'll let the user know
          } else {
            res.json({
              success: false,
              message: "Invalid Password"
            });
          }
          //we gracefully handle any errors with our catch
          }).catch(function(err) {
            res.json({
              success: false,
              message: "Error",
              err: err
            });
        });
        break;

      // ROUTE NOT FOUND
      default:
        console.log('POST route not found:', route);
        res.json({
          success: false,
          message: 'err: POST route not found',
          route: route
        });
    }

  });

  // PUT ROUTES
  // ==============================================================================
  app.put('/api/update/:route/:id', function(req, res) {
    let id = 'id = ' + req.params.id;
    let route = req.params.route;
    console.log(id);
    console.log(`route: ${route}`);
    switch (route) {

      // UPDATE BOOTCAMP
      case 'bootcamp':
        console.log('PUT bootcamp route');
        break;

      // UPDATE CANDIDATE
      case 'candidate':
        console.log('PUT candidate route');
        break;

      // UPDATE STARTUP
      case 'startup':
        console.log('PUT startup route');
        break;

      // ROUTE NOT FOUND
      default:
        console.log('PUT route not found:', route);
        res.json({
          success: false,
          message: 'err: PUT route not found',
          route: route,
          id: id
        });
    }

  });

  // DELETE ROUTES
  // ==============================================================================
  app.delete('/api/delete/:route/:id', function(req, res) {
    let route = req.params.route;
    let id = 'id = ' + req.params.id;
    console.log(`route: ${route}`);
    console.log(id);
    switch (route) {

      case 'bootcamp':
        console.log('DELETE bootcamp route');
        break;
      case 'candidate':
        console.log('DELETE candidate route');
        break;
      case 'startup':
        console.log('DELETE startup route');
        break;
      default:
        console.log('DELETE route not found:', route);
        res.json({
          success: false,
          message: 'err: DELETE route not found',
          route: route,
          id: id
        });

    }
  });

}

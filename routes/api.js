var bcrypt = require("bcrypt-nodejs");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");


const bootcampController = require('../controllers/bootcamp');
const candidateController = require('../controllers/candidate');
//const passport = require('../controllers/candidate');
const controllers = {
  bootcamp: bootcampController,
  candidate: candidateController
}

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(email, password, done) {
    console.log(`email: ${email} password: ${password} done: ${done}`);
    db.User.findOne({ where: {email: email}}).then( function (user) {
      console.log(`user: ${user}`);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      else if (bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    //we gracefully handle any errors with our catch
    }).catch(function(err) {
      console.log(`err: ${err}`)
      return done(err);
    });
  }
));

passport.serializeUser(function(user, done) {
  console.log(`user.id: ${user.id}`)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findOne({ where: {id: id}}).then(function (user) {
    done(null, user);
  });
});

module.exports = function(app) {

  // POST ROUTES
  // ==============================================================================
  app.post('/user/login',
    passport.authenticate('local', {
      successRedirect: '/bootcamps',
      failureRedirect: '/login'
    })
  );
  app.post('/login',
  passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('success!');
    res.redirect('/bootcamps');
  });

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
          res.render('profilepage', { candidate: candidate });
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
      console.log(req.body);

        console.log('user-signup route');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(body.password, salt);

        //creating a user from the email and password provided
        db.User.create({
          email: req.body.email,
          password: hash
         //sending the newly created user to the client
        }).then(function(dbUser) {
          //console.log("11111");
          //passport.authenticate('local')(req, res, function () {
                //res.redirect('/bootcamps');
          //console.log("123e4");
          res.json(dbUser.dataValues);

           //if there are any errors creating our user, we will gracefully catch the error send the error to the client instead of throwing it (which would crash our server)
         }).catch(function(err) {
          res.json({message: err.message});
         });

        break;



     // USER SIGNIN
      case 'user-signin':

        console.log('user-signin route');

        // passport.authenticate('local', {
        //   successRedirect: res.redirect('/bootcamps'),
        //   failureRedirect: res.redirect('/login')
        // })
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

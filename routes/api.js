const models = require('../models')
module.exports = function(app) {

  // POST bootcamp, startup or candidate
  // ==============================================================================
  app.post('/api/create/:route', function(req, res) {
    let body = req.body;
    let route = req.params.route;
    console.log(`body: ${body}`);
    switch (route) {

      // CREATE BOOTCAMP
      case 'bootcamp':
        console.log('POST bootcamp route');
        db.Bootcamp.create({

          name: body.name,
          logoURL: body.logoURL

        }).then(function() {
          db.Bootcamp.findAll({}).then(function(bootcamps) {
            res.json({
              success: true,
              bootcamps: bootcamps
            })
          })
        })
        break;

      // CREATE CANDIDATE
      case 'candidate':
        console.log('POST candidate route');
        db.Candidate.create({

          firstName: body.firstName,
          lastName: body.lastName,
          phoneNumber: body.phoneNumber,
          email: body.email,
          bootcampCourse: body.bootcampCourse,
          resumeURL: body.resumeURL,
          pictureURL: body.pictureURL,
          city: body.city,
          state: body.state,
          courseFinish: body.courseFinish,
          bio: body.bio,
          skills: body.skills,
          BootcampId: parseInt(body.BootcampId)

        }, {
          include: [models.Bootcamp]
        }).then(function(candidate) {
          db.Candidate.findAll({}).then(function(candidates) {
            res.json({
              success: true,
              candidates: candidates
            })
          })
        })
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
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

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
     // USER Signin
      case 'user-signin':
            console.log('user-signin route');
            //looking for one user whos password has the email and password submitted
         db.User.findOne({
         where: {
         email: req.body.email
                }
                        }).then(function(dbUser) {
         //if no user is found, we'll send back a message saying so
        if (!dbUser) {
           res.json({
              message: "User not found"
                   });
        } else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
        //otherwise we'll send back the user
         res.json(dbUser.dataValues);
        } else {
        //if the password is invalid, we'll let the user know
       res.json({
             message: "Invalid Password"
               });
              }
        //we gracefully handle any errors with our catch
      }).catch(function(err) {
             res.json(err);
      });
      );
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

  // PUT to bootcamp, startup or candidate
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

  // DELETE bootcamp, startup
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

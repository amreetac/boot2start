module.exports = function(app) {
  const express = require('express');
  const aws = require('aws-sdk');
  const S3_BUCKET = 'boot2start';
  const bootcampsController = require('../controllers/bootcamps');
  const bootcampController = require('../controllers/bootcamp');
  const s3Controller = require('../controllers/s3');
  const controllers = {
    bootcamps: bootcampsController,
    bootcamp: bootcampController,
    signS3: s3Controller
  }


  // GET landing page
  // ==============================================================================
  app.get('/', function(req, res) {
    console.log('index route');
    res.render('landing');
  });

  // GET SINGLE SLUG ROUTES
  // ==============================================================================
app.get('/bootcamps', function (req, res) {
  controllers.bootcamps.get(function (bootcamps) {
    res.render('bootcamps', { bootcamp:  bootcamps });
  });
});

app.get('/bootcamp', function (req, res) {
  controllers.bootcamp.get(null, function () {
    res.render('bootcamp-create');
  });
});

app.get('/signS3', function (req, res) {
  controllers.signS3.get(req.query, (signedRequest, err) => {
    if (err) res.end();

    res.write(JSON.stringify(signedRequest));
    res.end();
  });
});

app.get('/login', function (req, res) {
  res.render('login');
});
  // GET DOUBLE SLUG ROUTES
  // ==============================================================================
  app.get('/:route/:id', function(req, res) {
    let route = req.params.route;
    let id = req.params.id;
    console.log(`route: ${route}`);
    console.log(`id: ${id}`);

    switch (route) {

      // GET CANDIDATE
      case 'candidate':
        console.log('GET candidate route');
        db.Candidate.findOne({ where: { id: id }})
        .then(function(candidate) {
          res.render('profilepage', {candidate: candidate});
        })
        break;

      //GET CANDIDATE CREATION PAGE
      case 'candidate-create':
        console.log('GET create-candidates route');
        res.render('create-profile', { bootcampId: id });
        break;

      // GET ALL CANDIDATS FROM A BOOTCAMP
      case 'candidates':
        console.log('GET candidates route');
        db.Candidate.findAll({ where: { bootcampId: id }})
        .then(function (candidates) {
          res.render('candidates', {
            candidate: candidates,
            bootcampId: id
          });
        });
        break;

      // GET STARTUP
      case 'startup':
        console.log('GET startup route');
        break;

      // NO ROUTE FOUND SEND ERROR
      default:
        console.log('route not found:', route);
        res.json({
          succes: false,
          message: 'err: page not found in /:route/:id ',
          route: route,
          id: id
        });
    }
  });


}

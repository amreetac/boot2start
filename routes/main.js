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
  app.get('/:route', function(req, res) {
    let route = req.params.route;
    let controller = controllers[route];
    console.log(`route: ${route}`);


    switch (route) {

      // GET ALL BOOTCAMPS
      case 'bootcamps':
        controllers[route].get(function (bootcamps) {
          res.render('bootcamps', { bootcamp:  bootcamps });
        });
        break;

      // GET Bootcamp creation page
      case 'bootcamp':
        controllers[route].get(null, function () {
          res.render('bootcamp-create');
        })
        break;

      // GET STARTUPS PAGE WITH ALL STARTUPS
      case 'startups':
        console.log('startups route');
        res.render('startups');
        break;

      // GET LOGIN PAGE
      case 'login':
        console.log('login route');
        res.render('login');
        break;

      

      // GET SIGNED URL FRROM S3
      case 'signS3':
        controllers[route].get(req.query, (signedRequest, err) => {
          if (err) res.end();

          res.write(JSON.stringify(signedRequest));
          res.end();
        });
        break;

      // ROUNTE NOT FOUND SEND ERROR
      default:
        console.log('route not found:', route);
        res.json({
          succes: false,
          message: 'err: page not found',
          route: route
        });
    }

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

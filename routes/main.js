module.exports = function(app) {
  const express = require('express');
  const aws = require('aws-sdk');
  const S3_BUCKET = 'boot2start'

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
    console.log(`route: ${route}`);


    switch (route) {

      // GET ALL BOOTCAMPS
      case 'bootcamps':
        console.log('bootcamps route');

        db.Bootcamp.findAll({}).then(function (bootcamps) {
          console.log(`bootcamps: ${JSON.stringify(bootcamps)}`);
          res.render('bootcamps', { bootcamp:  bootcamps });
        });
        break;

      // GET Bootcamp creation page
      case 'bootcamp':
        res.render('bootcamp-create');
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
      case 'sign-s3':
        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
          Bucket: S3_BUCKET,
          Key: fileName,
          Expires: 60,
          ContentType: fileType,
          ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
          if(err){
            console.log(err);
            return res.end();
          }
          console.log(data);
          const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
          };
          res.write(JSON.stringify(returnData));
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
        break;

      //GET CANDIDATE CREATION PAGE
      case 'candidate-create':
        console.log('GET create-candidates route');
        res.render('create-profile', { bootcampId: id });
        break;

      // GET ALL CANDIDATS FROM A BOOTCAMP
      case 'candidates':
        console.log('GET candidates route');
        db.Candidate.findAll({ where: { id: id }})
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

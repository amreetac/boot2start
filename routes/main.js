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

  // ==============================================================================
  app.get('/:route', function(req, res) {
    let route = req.params.route;
    console.log(`route: ${route}`);

    // GET BOOTCAMPS ALL BOOTCAMPS
    switch (route) {
      case 'bootcamps':
        console.log('bootcamps route');
        db.Bootcamp.findAll({}).then(function(bootcamps) {

          // filter out dates
          let bootcampsFiltered = [];
          bootcamps.map(function(bootcamp) {
            let curBootcamp = {
              name: bootcamp.name,
              logoURL: bootcamp.logoURL,
              bootcampId: bootcamp.id
            };
            bootcampsFiltered.push(curBootcamp);
          })
          db.Bootcamp.findAll({}).then(function (bootcamps) {

            console.log(`bootcamps: ${JSON.stringify(bootcamps)}`);


            res.render('bootcamps', { bootcamp:  bootcamps });
          })

        })
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
      default:
        console.log('route not found:', route);
        res.json({
          succes: false,
          message: 'err: page not found',
          route: route
        });
    }

  });

  // ==============================================================================
  app.get('/:route/:id', function(req, res) {
    let route = req.params.route;
    let id = req.params.id;
    console.log(`route: ${route}`);
    console.log(`id: ${id}`);

    switch (route) {
      case 'bootcamp':
        console.log('bootcamp route');
        db.Bootcamp.findOne({
            where: {
              id: id
            }
          })
          .then(function(bootcamp) {
            res.json({
              success: true,
              bootcamp: bootcamp
            })
          });
        break;
      case 'candidate':
        console.log('candidate route');
        break;
      case 'candidate-create':
        console.log('create-candidates route');
        res.render('create-profile', { bootcampId: id });
        break;
      case 'candidates':
        console.log('candidates route');
        db.Candidate.findAll({ where: { id: id }})
        .then(function (candidates) {
          res.render('candidates', {
            candidate: candidates,
            bootcampId: id
          });
        });
        break;
      case 'startup':
        console.log('startup route');
        break;
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

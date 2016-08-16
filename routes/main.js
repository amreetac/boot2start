module.exports = function (app) {
  // GET landing page
  // ==============================================================================
  app.get('/', function (req, res) {
    console.log('index route');
    res.render('landing');
  });

  // GET all bootcamps, candidates or startups
  // ==============================================================================
  app.get('/:route', function (req, res) {
    let route = req.params.route;
    console.log(`route: ${route}`);

    // GET BOOTCAMPS ALL BOOTCAMPS
    switch (route) {
    case 'bootcamps':
      console.log('bootcamps route');
      db.Bootcamp.findAll({}).then(function (bootcamps) {
        console.log(`bootcamps: ${bootcamps}`);
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

        res.json({
          success: true,
          bootcamps: bootcampsFiltered
        })
        //res.render('bootcamps');
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
    default:
      console.log('route not found:', route);
      res.json({
        succes: false,
        message: 'err: page not found',
        route: route
      });
    }

  });

  // GET bootcamp, startup or candidate
  // ==============================================================================
  app.get('/:route/:id', function (req, res) {
    let route = req.params.route;
    let id = req.params.id;
    console.log(`route: ${route}`);
    console.log(`id: ${id}`);

    switch (route) {
    case 'bootcamp':
      console.log('bootcamp route');
      db.Bootcamp.findOne({ where: { id: id } })
      .then(function (bootcamp) {
        res.json({
          success: true,
          bootcamp: bootcamp
        })
      });
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
        succes: false,
        message: 'err: page not found',
        route: route,
        id: id
      });
    }
  });


}

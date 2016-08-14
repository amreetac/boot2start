var express = require('express');
var router = express.Router();

// GET landing page
// ==============================================================================
router.get('/', function (req, res) {
  console.log('index route');
  res.render('landing');
});

// GET all bootcamps, candidates or startups
// ==============================================================================
router.get('/:route', function (req, res) {
  let route = req.params.route;
  console.log(`route: ${route}`);

  switch (route) {
  case 'bootcamps':
    console.log('bootcamps route');
    res.render('bootcamps');
    break;
  case 'startups':
    console.log('startups route');
    res.render('startups');
    break;
  case 'login':
    console.log('login route');
    res.render('login');
    break;
  default:
    console.log('route not found:', route);
    res.json({
      status: 'err: page not found',
      route: route
    });
  }

});

// GET bootcamp, startup or candidate
// ==============================================================================
router.get('/:route/:id', function (req, res) {
  let route = req.params.route;
  let id = req.params.id;
  console.log(`route: ${route}`);
  console.log(`id: ${id}`);

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
      status: 'err: page not found',
      route: route,
      id: id
    });
  }
});

// POST bootcamp, startup or candidate
// ==============================================================================
router.post('/:route/create', function (req, res) {
  let route = req.params.route;
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
      status: 'err: page not found',
      route: route
    });
  }

});

// PUT to bootcamp, startup or candidate
// ==============================================================================
router.put('/update/:route/:id', function (req, res) {
  let id = 'id = ' + req.params.id;
  let route = req.params.route;
  console.log(id);
  console.log(`route: ${route}`);
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
      status: 'err: page not found',
      route: route,
      id: id
    });
  }

});

// DELETE bootcamp, startup
// ==============================================================================
router.delete('/delete/:route/:id', function (req, res) {
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
      status: 'err: page not found',
      route: route,
      id: id
    });
  }

});



// export routes
module.exports = router;

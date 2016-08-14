module.exports = function (app) {

  // POST bootcamp, startup or candidate
  // ==============================================================================
  app.post('/:route/create', function (req, res) {
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
  app.put('/update/:route/:id', function (req, res) {
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
  app.delete('/delete/:route/:id', function (req, res) {
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

}

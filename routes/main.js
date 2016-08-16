module.exports = function(app) {
    // GET landing page
    // ==============================================================================
    app.get('/', function(req, res) {
      console.log('index route');
      res.render('login');
    });

    // GET all bootcamps, candidates or startups
    // ==============================================================================
    app.get('/:route', function(req, res) {
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
    app.get('/:route/:id', function(req, res) {
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
    app.post('/:route/create', function(req, res) {
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
    app.put('/update/:route/:id', function(req, res) {
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
    app.delete('/delete/:route/:id', function(req, res) {
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

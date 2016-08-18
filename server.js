var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
global.db = require('./models');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// routes
require('./routes/main.js')(app);
require('./routes/api.js')(app);

var PORT = process.env.PORT || 3000;

db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function() {
    return db.sequelize.sync({
        force: true
    })
}).then(function() {
    app.listen(PORT, function() {
        console.log("Server running on port %s", PORT);
    });
});

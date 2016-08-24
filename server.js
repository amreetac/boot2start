var express = require('express');
var session = require("express-session");
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

app.use(session({ secret: 'secretpassword', cookie: { maxAge: 60000 * 60 * 24 * 14 }}))


app.set('view engine', 'handlebars');


// routes
require('./routes/main.js')(app);
require('./routes/api.js')(app);

var PORT = process.env.PORT || 3000;

db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function() {
    return db.sequelize.sync({
        force: false //Made it true to avoid deleting observations each time
    })
}).then(function() {
    app.listen(PORT, function() {
        console.log("Server running on port %s", PORT);
    });
});

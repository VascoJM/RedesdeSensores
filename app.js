var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var db1 = require('mongoose');

db1.connect('mongodb://localhost/appsensores');
var db = db1.connection;

//mongoose.Promise = global.Promise;
var db2 = require('mongoose');
db2.connect('mongodb://localhost/boxs'); 

var Box = require('./api/models/boxListModel');

var routes = require('./routes/index');
var users = require('./routes/users');

// Init App
var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);
app.use('/users', users);

var routes = require('./api/routes/boxListRoutes');
routes(app);
app.use('/boxs', routes);



console.log('\n\n           88                                  88    88         8888888888888');             
console.log('           88                                  88    88              888');  
console.log('           88                                  88    88              888');
console.log(' ,adPPYba, 88  ,adPPYba,  88       88  ,adPPYb,88    88  ,adPPYba,   888');
console.log('a8"     "" 88 a8"     "8a 88       88 a8"    `Y88    88 a8"     "8a  888');
console.log('8b         88 8b       d8 88       88 8b       88    88 8b       d8  888');
console.log('"8a,   ,aa 88 "8a,   ,a8" "8a,   ,a88 "8a,   ,d88    88 "8a,   ,a8"  888');
console.log('  "Ybbd8"  88   wYbbdP     wYbbdPY8    08bbdPY8      88   wYbbdP     888 \n');    
// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('\nServer started on port '+app.get('port'));
});

            
                       
  
 
  
 

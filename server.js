
// App.js
// ...................................................................


// Import modules
const
  express = require('express'), // -- 1
  cookieParser = require('cookie-parser'), // 1.2
  hbs = require('express-handlebars'), // -- 2
  methodOverride = require('method-override'), // -- 3
  mongoose = require('mongoose'), // -- 4
  bodyParser = require('body-parser'), // -- 5
  morgan = require('morgan'), // -- 6
  MongoStore = require('connect-mongo'), // -- 7
  expressSession = require('express-session'), // -- 8

  // Express -- 1
  app = express();

// Cookie-parser -- cree des cookie
app.use(cookieParser());

// Handlebars -- 2 -- Moteur de templating
const { limit, striptag } = require('./helpers/hbs')
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  helpers: {
    limit: limit,
    striptag: striptag
  },
  extname: 'hbs',
  defaultLayout: 'main',
}));


// MethodeOverride -- 3 -- Utilisation CRUD
app.use(methodOverride('_method'))

// Mongoose -- 4 -- Base de donnée
mongoose.connect('mongodb://localhost:27017/Start', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// Body Parser -- 5 -- Module de traitement de formulaire
// Body parser permet de parser les data d'une page à l'autre en passant par les controllers, ... 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Morgan -- 6 -- debuggeur http    
app.use(morgan('dev'));

// save session avec MongoDB -- 7 --
const mongoStore = MongoStore(expressSession)



// Express-session -- 8 -- Crée des session  user ou admin
app.use(expressSession({
  secret: 'securite',
  name: 'cookie-sess',
  saveUninitialized: true,
  resave: false,
  cookie: {
    httpOnly: true,
    // maxAge: 3600 * 1000
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// middleware pour passe la session dans controller
app.use(function (req, res, next) {
  res.locals.session = req.session;
  // console.log('log local')
  // console.log(res.locals.session);
  next();
});

process.env.PORTLOCAL
// Desactivation des x-powered pour la securité
app.disable('x-powered-by');

// Express static permet de diriger un chemin sur un dossier en particulier
app.use('/assets', express.static('public'));


// Notre router permettra de diriger des chemins 'URL' sur les actions 'Controller' qui distriburont nos pages, ... 
// CRUD = GET / POST / PUT / DELETE
const ROUTER = require('./api/router');
app.use('/', ROUTER)

// Port local de lancement de l'application
port = 2000;

// Ensuite nous demandons a express (app) de run notre projet.
app.listen(port, () => {
  console.log("le serveur tourne sur le prt: " + port, "lancé à:" + new Date().toLocaleString());
});

// Export de notre app
module.exports = app
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const router = express.Router();
// Setup knex
const knexfile = require('./knexfile').development;
const knex = require('knex')(knexfile);
// Set up handlebars
app.engine(
  'hbs',
  handlebars({
    layoutsDir: path.join(__dirname, '/views/layouts'),
    extname: 'hbs'
  })
);
// Setup public directory
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// Routers
router.get('/', function (req, res) {
  // Read every row data in from cardContentFiller
  knex
    .from('cardContentFiller')
    .select('*')
    .then((rows) => {
      console.log('Data acquired successfully!');
      // Render index and use rows from cardContentFiller
      res.render('index', { cardsContent: rows });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.get('/about', function (req, res) {
  // Read every row data in from aboutCardContentFiller
  knex
    .from('aboutCardContentFiller')
    .select('*')
    .then((rows) => {
      console.log('Data acquired successfully!');
      // Render index and use rows from aboutCardContentFiller
      res.render('about', { cardsContent: rows });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

router.get('/join', function (req, res) {
  res.render('join');
});
app.use('/', router);
app.listen(3000, function () {
  console.log('Valley app listening on port 3000!');
});

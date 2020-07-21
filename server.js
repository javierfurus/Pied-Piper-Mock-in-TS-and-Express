const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const router = require('./routers/main');
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
app.use(router);
app.get('/', function (req, res) {
  res.redirect('/index');
});
app.listen(3000, function () {
  console.log('Valley app listening on port 3000!');
});

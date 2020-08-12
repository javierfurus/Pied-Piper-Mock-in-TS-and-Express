import * as express from 'express';
import * as createMiddleware from 'swagger-express-middleware';
import { SwaggerMiddleware } from 'swagger-express-middleware';
import * as handlebars from 'express-handlebars';
import * as path from 'path';
import router from './app/routers';

const app = express();
const { PORT = 3000 } = process.env;
// Set up handlebars
app.engine(
  'hbs',
  handlebars({
    layoutsDir: path.join(__dirname, 'app', 'views', 'layouts'),
    extname: 'hbs'
  })
);
// Setup public directory
app.use(express.static(path.join(__dirname, 'app', 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app' ,'views'));
createMiddleware(
  'config/swagger.json',
  app,
  (err, middleware: SwaggerMiddleware) => {
    if (err) {
      console.error(err);
    }

    app.use(
      middleware.metadata(),
      middleware.CORS(),
      middleware.parseRequest(),
      middleware.validateRequest()
    );

    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  }
);

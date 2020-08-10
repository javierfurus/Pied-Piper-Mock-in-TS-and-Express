import * as express from 'express';
import {router as about} from './about';
import {router as home} from './home';
import {router as join} from './join';
const router = express.Router({ mergeParams: true });
const routes = [
  {
    path: '/home',
    router: home
  },
  {
    path: '/about',
    router: about
  },
  {
    path: '/join',
    router: join
  }
];
routes.forEach(r => router.use(r.path, r.router));
export default router;

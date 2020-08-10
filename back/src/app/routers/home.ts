import * as express from 'express';
import controller from '../controllers/home';
const router = express.Router({mergeParams: true});

router.use(controller.authorization);
router.get('/', controller.index);

export { router };

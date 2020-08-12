import * as express from 'express';
import controller from '../controllers/join';
const router = express.Router({mergeParams: true});

router.use(controller.authorization);
router.get('/', controller.index);

export { router };

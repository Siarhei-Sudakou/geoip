import { Router } from 'express'
import about from './about'
import map from './map'
import home from './home'

const router = Router();

router.use('/about', about);
router.use('/map', map);
router.use('/', home);

export default router;
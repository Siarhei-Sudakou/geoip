import { Router } from 'express'
import about from './about'
import map from './map'
import home from './home'
import geoip from './geoip'
import search from './search'
import api from './api'

const router = Router();

router.use('/about', about);
router.use('/map', map);
router.use('/', home);
router.use('/geoip', geoip);
router.use('/search', search);
router.use('/api', api);

export default router;
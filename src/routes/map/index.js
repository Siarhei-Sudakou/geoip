import { Router } from 'express'
import map from './map'

const router = Router();

router.route('/').get(map.render);

export default router;
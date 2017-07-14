import { Router } from 'express'
import about from './about'

const router = Router();

router.route('/').get(about.render);

export default router;
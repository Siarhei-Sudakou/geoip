import { Router } from 'express'
import home from './home'

const router = Router();

router.route('/').get(home.render);

export default router;
import { Router } from 'express'
import api from './api'

const router = Router();

router.route('/:ip').get(api.single);
router.route('/').post(api.group);

export default router;
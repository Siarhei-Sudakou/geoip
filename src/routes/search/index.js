import { Router } from 'express'
import search from './search'

const router = Router();

router.route('/:ip').get(search.render);

export default router;
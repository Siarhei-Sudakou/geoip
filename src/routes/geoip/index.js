import { Router } from 'express'
import geoip from './geoip'

const router = Router();

router.route('/city/:ip').get(geoip.city);
router.route('/country/:ip').get(geoip.country);
router.route('/asn/:ip').get(geoip.asn);
router.route('/:ip').get(geoip.all);

export default router;
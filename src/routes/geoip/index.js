import { Router } from 'express'
import geoip from './geoip'

const router = Router();

router.route('/city/:search').get(geoip.city);
router.route('/country/:search').get(geoip.country);
router.route('/asn/:search').get(geoip.asn);
router.route('/:search').get(geoip.all);

export default router;
import { Router } from 'express';
import { addProspect, getAllProspects } from '../controllers/prospectsController.js';

const router = Router();
router.post('/', addProspect);
router.get('/', getAllProspects);

export default router;
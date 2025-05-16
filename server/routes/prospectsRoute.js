import { Router } from 'express';
import { addProspect, getAllProspects } from '../controllers/prospectsController.js';

const router = Router();
router.post('/addProspect', addProspect);
router.get('/getAllProspects', getAllProspects);

export default router;
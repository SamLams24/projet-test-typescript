import { Router } from 'express';
import {getLivres, getLivre, addLivre, updateLivre, deleteLivre }  from '../controllers/livres_controllers';

const router = Router();

router.get('/', getLivres);
router.get('/:id', getLivre);
router.post('/', addLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);

export default router;
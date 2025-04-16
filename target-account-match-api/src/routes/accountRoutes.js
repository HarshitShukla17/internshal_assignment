import express from 'express';
import { getAccounts, updateAccountStatus } from '../controllers/accountcontroller.js';

const router = express.Router();

router.get('/', getAccounts);
router.post('/:id/status', updateAccountStatus);

export default router;





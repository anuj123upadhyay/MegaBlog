import express from 'express';
import { submitFeedback } from '../Controller/feedbackController.js';
const router = express.Router();

router.post('/submitFeedback', submitFeedback);

export default router;   

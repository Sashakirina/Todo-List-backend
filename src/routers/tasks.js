import { Router } from 'express';

const router = Router();

router.get('/', getAllTasksController);

export default router;

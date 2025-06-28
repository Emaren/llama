import { Router } from '@nestjs/common';
import { UserController } from './user.controller';

const router = new Router();
router.use('/users', UserController);
export const usersRouter = router;

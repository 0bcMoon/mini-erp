import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '@/src/controllers/userController';
import { validateRequest } from '@/src/middleware/validateRequest';
import { createUserSchema, updateUserSchema } from '@/src/validations/userValidation';

const router = Router();

router.get('/', getUsers);
router.post('/', validateRequest(createUserSchema), createUser);
router.get('/:id', getUserById);
router.put('/:id', validateRequest(updateUserSchema), updateUser);
router.delete('/:id', deleteUser);

export default router;

import { Request, Response } from 'express';
import { db } from '@/config/db';
import { users } from '@/src/models/schema';
import { eq } from 'drizzle-orm';
import { asyncHandler } from '@/src/utils/asyncHandler';

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await db.select().from(users).where(eq(users.id, Number(id))).limit(1);

    if (user.length === 0) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.json(user[0]);
});

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' });
        return;
    }

    const newUser = await db.insert(users).values({ name, email }).returning();
    res.status(201).json(newUser[0]);
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await db.update(users)
        .set({ name, email })
        .where(eq(users.id, Number(id)))
        .returning();

    if (updatedUser.length === 0) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.json(updatedUser[0]);
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await db.delete(users).where(eq(users.id, Number(id))).returning();

    if (deletedUser.length === 0) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.json({ message: 'User deleted successfully' });
});

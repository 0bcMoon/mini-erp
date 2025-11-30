import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
    }),
});

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Name cannot be empty').optional(),
        email: z.string().email('Invalid email address').optional(),
    }),
});

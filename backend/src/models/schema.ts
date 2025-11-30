import { pgTable, serial, text, numeric, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
});

export const services = pgTable('services', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    price: numeric('price').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

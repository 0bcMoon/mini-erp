import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
// Import your schema definitions (you'll create this later)
import * as schema from '@/src/models/schema';

// Load environment variables from .env file
dotenv.config();

// Get the connection URL
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not set in environment variables.');
}

// 1. Initialize the PostgreSQL Pool
// This manages the connections to your Neon database
const pool = new Pool({
    connectionString: DATABASE_URL,
});

// 2. Instantiate the Drizzle Client
// We export this client so other parts of the application can run queries
export const db = drizzle(pool, {
    schema: schema, // Optional: Link your schema for type-safe relational queries
    logger: true // Recommended for debugging SQL during development
});

// 3. Connection Function (for server initialization)
export async function connectDB() {
    // We attempt a simple query to ensure the connection is live
    try {
        await pool.query('SELECT 1');
        return pool;
    } catch (error) {
        console.error('Failed to connect to PostgreSQL:', error);
        throw error;
    }
}

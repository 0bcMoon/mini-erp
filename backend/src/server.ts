import { connectDB } from '@/config/db'; // Import the connection function
import express, { Request, Response } from 'express';
import userRoutes from '@/src/routes/userRoutes';
import { errorHandler } from '@/src/middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional but recommended)
app.use(express.json()); // To parse JSON bodies


async function startServer() {
    try {

        await connectDB();
        console.log('✅ Database connected successfully.');

        // ... Route Configuration
        app.use('/api/users', userRoutes);

        // Error Handler
        app.use(errorHandler);

        // 2. Start Listening
        app.listen(PORT, () => {
            console.log(`🚀 Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server failed to start. Check database connection.', error);
        process.exit(1);
    }
}

startServer();

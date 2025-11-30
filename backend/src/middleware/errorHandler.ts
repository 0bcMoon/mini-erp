import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    if (err.code === '23505' || (err.cause && err.cause.code === '23505')) {
        statusCode = 409;
        message = 'Email already exists';
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

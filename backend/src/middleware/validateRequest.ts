import { Request, Response, NextFunction } from 'express';
import { ZodTypeAny, ZodError } from 'zod';

export const validateRequest = (schema: ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const result = await schema.safeParseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        if (!result.success) {
            return res.status(400).json({
                message: 'Validation Error',
                errors: ((result.error as any).errors || (result.error as any).issues).map((e: any) => ({
                    field: e.path.join('.'),
                    message: e.message,
                })),
            });
        }

        next();
    };
};

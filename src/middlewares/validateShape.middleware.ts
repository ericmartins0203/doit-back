import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateShape = (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body = await shape.validate(req.body);
        return next();
    } catch (error: any) {
        return res.status(400).json({ error: error.errors });
    }
  };

export { validateShape };
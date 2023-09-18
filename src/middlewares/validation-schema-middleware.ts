import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import httpStatus from "http-status";

export function validationSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessages = error.details.map((e) => e.message);
      console.log(errorMessages);
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessages);
    }

    next();
  };
}
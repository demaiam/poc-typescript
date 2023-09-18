import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({
      message: error.message
    });
  }

  if (error.name === 'ConflictError') {
    return res.status(httpStatus.CONFLICT).send({
      message: error.message
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: "Internal server error"
  });
}
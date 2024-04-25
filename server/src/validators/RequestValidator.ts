import { Request, Response, NextFunction } from "express";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export default class RequestValidator {
  static validate = <T extends object>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const convertedObject = plainToInstance(classInstance, req.body);
      await validate(convertedObject).then((errors) => {
        if (errors.length > 0) {
          let rawErrors: string[] = [];
          for (const error of errors) {
            rawErrors = rawErrors.concat(
              ...rawErrors,
              Object.values(error.constraints ?? [])
            );
          }

          const message = "Request validation error";
          console.log(`❌ [RequestValidator.Error]`, rawErrors);
          res.status(400).json({ message, errors: rawErrors });
        }
      });
      next();
    };
  };
}

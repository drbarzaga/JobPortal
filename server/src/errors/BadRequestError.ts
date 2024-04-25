import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";

export class BadRequestError extends ApiError {
  constructor(message: string, errors: string[]) {
    super(StatusCodes.BAD_REQUEST, message, errors);
  }
}

import { Request, Response, NextFunction } from "express";

/**
 * AuthController
 * This class contains methods for handling authentication
 * @class
 *
 * @method login - This method is used to login a user
 * @method signup - This method is used to register a user
 */
export default class AuthController {
  /**
   * This method is used to login a user
   * @param req Request
   * @param res Response
   */
  public static async login(req: Request, res: Response, next: NextFunction) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: AuthController login!`);
  }

  /**
   * This method is used to register a user
   * @param req Request
   * @param res Response
   */
  public static async signup(req: Request, res: Response, next: NextFunction) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: AuthController signup!`);
  }
}

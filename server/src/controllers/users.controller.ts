import { Request, Response, NextFunction } from "express";

/**
 * UserController
 * This class contains methods for handling users
 *
 * @class
 *
 * @method getUserPersonal - This method is used to get the personal information of a user
 * @method getUser - This method is used to get a user by id
 * @method updateUser - This method is used to update a user
 */
export default class UserController {
  /**
   * This method is used to get the personal information of a user
   * @param req Request
   * @param res Response
   */
  public static async getUserPersonal(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res
      .status(200)
      .send(`⚡️[Server]: User ManagementController getUserPersonal!`);
  }

  /**
   * This method is used to get a user by id
   * @param req Request
   * @param res Response
   */
  public static async getUser(req: Request, res: Response, next: NextFunction) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: User ManagementController getUser!`);
  }

  /**
   * This method is used to update a user
   * @param req Request
   * @param res Response
   */
  public static async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: User ManagementController updateUser!`);
  }
}

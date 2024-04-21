import { Request, Response, NextFunction } from "express";

/**
 * JobsController
 * This class contains methods for handling jobs
 * @class
 *
 * @method getJobs - This method is used to get list of jobs paginated
 * @method createJob - This method is used to create a job
 * @method getJob - This method is used to get a job details by id
 * @method updateJob - This method is used to update a job
 * @method deleteJob - This method is used to delete a job
 */
export default class JobsController {
  /**
   * This method is used to get list of jobs paginated
   * @param req Request
   * @param res Response
   */
  public static async getJobs(req: Request, res: Response, next: NextFunction) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: JobsController getJobs!`);
  }

  /**
   * This method is used to create a job
   * @param req Request
   * @param res Response
   */
  public static async createJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: JobsController createJob!`);
  }

  /**
   * This method is used to get a job details by id
   * @param req Request
   * @param res Response
   */
  public static async getJob(req: Request, res: Response, next: NextFunction) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: JobsController getJob!`);
  }

  /**
   * This method is used to update a job
   * @param req Request
   * @param res Response
   */
  public static async updateJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: JobsController updateJob!`);
  }

  /**
   * This method is used to delete a job
   * @param req Request
   * @param res Response
   */
  public static async deleteJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: JobsController deleteJob!`);
  }
}

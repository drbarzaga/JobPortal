import { Request, Response, NextFunction } from "express";

/**
 * JobApplicationsController
 * This class contains methods for handling job applications
 * @class
 *
 * @method applyForJob - This method is used to apply for a job
 * @method getJobApplications - This method is used to get list of job applications paginated
 */
export default class JobApplicationsController {
  /**
   * This method is used to apply for a job
   * @param req Request
   * @param res Response
   */
  public static async applyForJob(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res.status(200).send(`⚡️[Server]: ApplicationsController applyForJob!`);
  }

  /**
   * This method is used to get list of a job applications paginated
   * @param req Request
   * @param res Response
   */
  public static async getJobApplications(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res
      .status(200)
      .send(`⚡️[Server]: ApplicationsController getJobApplications!`);
  }

  /**
   * This method is used to get list of a user [recruiter or job seeker] applications paginated
   * @param req Request
   * @param res Response
   */
  public static async getUserApplications(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res
      .status(200)
      .send(`⚡️[Server]: ApplicationsController getUserApplications!`);
  }

  /**
   * This method is used to update a job application
   * [Job seeker can update their application status, recruiter can do everything]
   *
   * @param req Request
   * @param res Response
   */
  public static async updateJobApplication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO: Not implemented yet
    res
      .status(200)
      .send(`⚡️[Server]: ApplicationsController updateJobApplication!`);
  }
}

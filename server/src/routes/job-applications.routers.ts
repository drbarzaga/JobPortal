import { Router } from "express";
import JobApplicationsController from "../controllers/job-applications.controller";
import { asyncWrapper } from "../helpers/async-wrapper";

export default class JobApplicationsRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post(
      "/:id/apply",
      asyncWrapper(JobApplicationsController.applyForJob)
    );
    this.router.get(
      "/:id/applications",
      asyncWrapper(JobApplicationsController.getJobApplications)
    );
    this.router.get(
      "/applications",
      asyncWrapper(JobApplicationsController.getUserApplications)
    );
    this.router.put(
      "/applications/:id",
      asyncWrapper(JobApplicationsController.updateJobApplication)
    );
  }
}

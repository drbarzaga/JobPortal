import { Router } from "express";
import JobsController from "../controllers/jobs.controller";
import { asyncWrapper } from "../helpers/async-wrapper";

export default class JobsRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/", asyncWrapper(JobsController.getJobs));
    this.router.post("/", asyncWrapper(JobsController.createJob));
    this.router.get("/:id", asyncWrapper(JobsController.getJob));
    this.router.put("/:id", asyncWrapper(JobsController.updateJob));
    this.router.delete("/:id", asyncWrapper(JobsController.deleteJob));
  }
}

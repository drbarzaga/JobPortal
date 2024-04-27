import { Application, Request, Response, NextFunction } from "express";
import UsersRoutes from "./users.routes";
import JobsRoutes from "./jobs.routes";
import JobApplicationsRoutes from "./job-applications.routers";
import AuthRoutes from "./auth.routes";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "../errors/ApiError";
import { authMiddleware } from "../middlewares/auth.middleware";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/auth", new AuthRoutes().router);
    app.use("/api/v1/jobs", authMiddleware, new JobsRoutes().router);
    app.use("/api/v1/users", authMiddleware, new UsersRoutes().router);
    app.use("/api/v1/job", authMiddleware, new JobApplicationsRoutes().router);

    app.get("/", (req: Request, res: Response) => {
      res.status(StatusCodes.OK).send(`⚡️[Server]: Server is running!`);
    });

    app.get("/health", (req: Request, res: Response) => {
      res.status(StatusCodes.OK).send(`⚡️[Server]: Server is running!`);
    });

    app.use("*", (req: Request, res: Response, next: NextFunction) => {
      const error = new ApiError(
        StatusCodes.NOT_FOUND,
        `🔍[Server]: Route not found: ${req.originalUrl}`
      );
      next(error);
    });
  }
}

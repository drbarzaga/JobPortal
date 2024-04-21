import { Router } from "express";
import UsersController from "../controllers/users.controller";
import { asyncWrapper } from "../helpers/async-wrapper";

export default class UserManagementRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/user", asyncWrapper(UsersController.getUserPersonal));
    this.router.get("/:id", asyncWrapper(UsersController.getUser));
    this.router.put("/:id", asyncWrapper(UsersController.updateUser));
  }
}

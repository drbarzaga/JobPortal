import { Router } from "express";
import passport from "passport";
import AuthController from "../controllers/auth.controller";
import { asyncWrapper } from "../helpers/async-wrapper";

export default class AuthRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post("/login", asyncWrapper(AuthController.login));
    this.router.post("/signup", asyncWrapper(AuthController.signup));
  }
}

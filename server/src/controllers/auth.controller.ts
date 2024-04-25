import passport from "passport";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import UserAccount from "../models/user/user-account.model";
import UserType from "../models/user/user-type.model";
import { ApiError } from "../errors/ApiError";
import { BadRequestError } from "../errors/BadRequestError";
// import { BadRequestError } from "../errors/BadRequestError";

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
    // res.status(200).send(`⚡️[Server]: AuthController login!`);
    passport.authenticate("login", async (err: any, user: any, info: any) => {
      try {
        if (err || !user) {
          const error = new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized");
          return next(error);
        }

        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { _id: user._id, email: user.email };
          const token = jwt.sign({ user: body }, process.env.JWT_SECRET || "");

          return res.json({ token });
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }

  /**
   * This method is used to register a user
   * @param req Request
   * @param res Response
   */
  public static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const { user_type_name } = payload;

      // Find the user type where name [job_seeker, hr_recruiter]
      const userType = await UserType.findOne({
        user_type_name: user_type_name,
      });

      // If user type is not found, throw an error
      if (!userType) {
        throw new BadRequestError(
          `User type not found with user_type_name provided`,
          []
        );
      }

      // Check don't exist user account with the email address provided
      const existingUser = await UserAccount.findOne({
        email: payload.email,
      });

      // If user account exists, throw an error
      if (existingUser) {
        throw new BadRequestError("User account already exists", []);
      }

      // Create a new user account with the user type id and other details
      const userAccount = new UserAccount({
        ...payload,
        user_type_id: userType._id,
        registration_date: new Date(),
      });

      // Save the user account
      await userAccount.save();

      // Send a response with the user account details
      res.status(StatusCodes.CREATED).json({
        message: "User account created successfully",
        data: userAccount,
      });
    } catch (error) {
      throw error;
    }
  }
}

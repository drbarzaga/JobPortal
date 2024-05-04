import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import UserAccount from "../models/user/user-account.model";
import UserType from "../models/user/user-type.model";
import { BadRequestError } from "../errors/BadRequestError";
import { ApiError } from "../errors/ApiError";

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
    try {
      const { email, password } = req.body;
      const user = await UserAccount.findOne({ email: email });

      // If user account is not found, throw an error
      if (!user) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "User account not found",
          []
        );
      }

      // If user account is found, compare the password
      if (!(user as any).comparePassword(password)) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "Invalid email or password",
          []
        );
      }

      // Send a response with the user account details
      res.status(StatusCodes.OK).json({
        user: user,
        token: (user as any).generateJWT(),
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * This method is used to register a user
   * @param req Request
   * @param res Response
   * @param next NextFunction
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

      // Check if user account exists
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
        user: userAccount,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * This method is used to get the current user
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public static async me(req: Request, res: Response, next: NextFunction) {
    try {
      // Get the user account from the request object
      const user = req.user;

      // Send a response with the user account details
      res.status(StatusCodes.OK).json({
        user: user,
      });
    } catch (error) {
      throw error;
    }
  }
}

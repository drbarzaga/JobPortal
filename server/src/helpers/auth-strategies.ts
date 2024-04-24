import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;
import UserAccount from "../models/user/user-account.model";

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email: string, password: string, done: any) => {
      try {
        const user = await UserAccount.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        const validate = await (user as any).isValidPassword(password);
        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }
        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

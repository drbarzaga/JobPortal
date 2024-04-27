import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserAccount from "../models/user/user-account.model";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "jwt_secret",
};

module.exports = (passport: any) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      UserAccount.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => {
          return done(err, false, { message: "Server error" });
        });
    })
  );
};

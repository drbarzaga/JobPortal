import bcrypt from "bcrypt";
import mongoose from "mongoose";

// This is the schema for the user_account collection
const UserAccountSchema = new mongoose.Schema(
  {
    user_type_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserType",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      length: 255,
    },
    password: {
      type: String,
      required: true,
      length: 100,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      length: 10,
    },
    is_active: {
      type: Boolean,
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
      length: 15,
    },
    sms_notification_active: {
      type: Boolean,
      required: false,
      default: false,
    },
    email_notification_active: {
      type: Boolean,
      required: false,
      default: false,
    },
    user_image: {
      type: String,
      required: false,
    },
    registration_date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "user_account",
    timestamps: true,
  }
);

// Password hashing
UserAccountSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  // Hash the password
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

export default UserAccount;

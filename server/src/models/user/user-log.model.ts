import mongoose from "mongoose";

const UserLogSchema = new mongoose.Schema(
  {
    user_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    last_login_date: {
      type: Date,
      required: true,
    },
    last_job_apply_date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "user_log",
    timestamps: true,
  }
);

const UserLog = mongoose.model("UserLog", UserLogSchema);

export default UserLog;

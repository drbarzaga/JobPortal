import mongoose from "mongoose";

const JobPostActivitySchema = new mongoose.Schema(
  {
    user_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    job_post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost",
      required: true,
    },
    apply_date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "job_post_activity",
    timestamps: true,
  }
);

const JobPostActivity = mongoose.model(
  "JobPostActivity",
  JobPostActivitySchema
);

export default JobPostActivity;

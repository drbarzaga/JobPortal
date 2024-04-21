import mongoose from "mongoose";

const JobTypeSchema = new mongoose.Schema(
  {
    job_type: {
      type: String,
      required: true,
      length: 50,
    },
  },
  {
    collection: "job_type",
    timestamps: true,
  }
);

const JobType = mongoose.model("JobType", JobTypeSchema);

export default JobType;

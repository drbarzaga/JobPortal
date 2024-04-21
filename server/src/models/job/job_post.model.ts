import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema(
  {
    posted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    job_type_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobType",
      required: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    is_company_name_hidden: {
      type: Boolean,
      required: true,
    },
    created_date: {
      type: Date,
      required: true,
    },
    job_description: {
      type: String,
      required: true,
      length: 4000,
    },
    job_location_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobLocation",
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "job_post",
    timestamps: true,
  }
);

const JobPost = mongoose.model("JobPost", JobPostSchema);

export default JobPost;

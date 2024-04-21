import mongoose from "mongoose";

const JobPostSkillSetSchema = new mongoose.Schema(
  {
    skill_set_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SkillSet",
      required: true,
    },
    job_post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost",
      required: true,
    },
    skill_level: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "job_post_skill_set",
    timestamps: true,
  }
);

const JobPostSkillSet = mongoose.model(
  "JobPostSkillSet",
  JobPostSkillSetSchema
);

export default JobPostSkillSet;

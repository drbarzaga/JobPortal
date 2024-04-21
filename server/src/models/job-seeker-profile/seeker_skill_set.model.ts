import mongoose from "mongoose";

const SeekerSkillSetSchema = new mongoose.Schema(
  {
    user_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    skill_set_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SkillSet",
      required: true,
    },
    skill_level: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "seeker_skill_set",
    timestamps: true,
  }
);

const SeekerSkillSet = mongoose.model("SeekerSkillSet", SeekerSkillSetSchema);

export default SeekerSkillSet;

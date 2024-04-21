import mongoose from "mongoose";

const SkillSetSchema = new mongoose.Schema(
  {
    skill_set_name: {
      type: String,
      required: true,
      length: 50,
    },
  },
  {
    collection: "skill_set",
    timestamps: true,
  }
);

const SkillSet = mongoose.model("SkillSet", SkillSetSchema);

export default SkillSet;

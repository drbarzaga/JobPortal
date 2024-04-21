import mongoose from "mongoose";

// This is the schema for the user_type collection
// User types [Job Seekers, HR recruiters (or Independent Recruiters)]
const UserTypeSchema = new mongoose.Schema(
  {
    user_type_name: {
      type: String,
      required: true,
      unique: true,
    },
    user_type_display_name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "user_type",
    timestamps: true,
  }
);

const UserType = mongoose.model("UserType", UserTypeSchema);

export default UserType;

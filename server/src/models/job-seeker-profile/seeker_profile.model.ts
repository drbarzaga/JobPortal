import mongoose from "mongoose";

const SeekerProfileSchema = new mongoose.Schema(
  {
    user_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    first_name: {
      type: String,
      required: true,
      length: 50,
    },
    last_name: {
      type: String,
      required: true,
      length: 50,
    },
    current_salary: {
      type: Number,
      required: false,
    },
    is_annually_monthly: {
      type: String,
      required: false,
      length: 1,
    },
    currency: {
      type: String,
      required: false,
      length: 50,
    },
  },
  {
    collection: "seeker_profile",
    timestamps: true,
  }
);

const SeekerProfile = mongoose.model("SeekerProfile", SeekerProfileSchema);

export default SeekerProfile;

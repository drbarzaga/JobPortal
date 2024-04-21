import mongoose from "mongoose";

const JobLocationSchema = new mongoose.Schema(
  {
    street_address: {
      type: String,
      required: true,
      length: 200,
    },
    city: {
      type: String,
      required: true,
      length: 50,
    },
    state: {
      type: String,
      required: true,
      length: 50,
    },
    country: {
      type: String,
      required: true,
      length: 50,
    },
    zip_code: {
      type: String,
      required: true,
      length: 10,
    },
  },
  {
    collection: "job_location",
    timestamps: true,
  }
);

const JobLocation = mongoose.model("JobLocation", JobLocationSchema);

export default JobLocation;

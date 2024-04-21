import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      length: 100,
    },
    profile_description: {
      type: String,
      required: true,
      length: 1000,
    },
    business_stream_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessStream",
      required: true,
    },
    establishment_date: {
      type: Date,
      required: true,
    },
    company_website_url: {
      type: String,
      required: true,
      length: 500,
    },
  },
  {
    collection: "company",
    timestamps: true,
  }
);

const Company = mongoose.model("Company", CompanySchema);

export default Company;

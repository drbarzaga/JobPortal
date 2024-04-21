import mongoose from "mongoose";

const CompanyImageSchema = new mongoose.Schema(
  {
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyProfile",
      required: true,
    },
    company_image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "company_image",
    timestamps: true,
  }
);

const CompanyImage = mongoose.model("CompanyImage", CompanyImageSchema);

export default CompanyImage;

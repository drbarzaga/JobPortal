import mongoose from "mongoose";

const BusinessStreamSchema = new mongoose.Schema(
  {
    //- description of the company’s main business stream
    business_stream_name: {
      type: String,
      required: true,
      length: 255,
    },
  },
  {
    collection: "business_stream",
    timestamps: true,
  }
);

const BusinessStream = mongoose.model("BusinessStream", BusinessStreamSchema);

export default BusinessStream;

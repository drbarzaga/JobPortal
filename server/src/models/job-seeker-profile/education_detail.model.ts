import mongoose from "mongoose";

const EducationDetailSchema = new mongoose.Schema(
  {
    user_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true,
    },
    certificate_degree_name: {
      type: String,
      required: true,
      length: 100,
    },
    major: {
      type: String,
      required: true,
      length: 100,
    },
    institute_university_name: {
      type: String,
      required: true,
      length: 100,
    },
    starting_date: {
      type: Date,
      required: true,
    },
    completion_date: {
      type: Date,
      required: false,
    },
    percentage: {
      type: Number,
      required: false,
    },
    cgpa: {
      type: Number,
      required: false,
    },
  },
  {
    collection: "education_detail",
    timestamps: true,
  }
);

EducationDetailSchema.index({
  user_account_id: 1,
  certificate_degree_name: 1,
  major: 1,
});

const EducationDetail = mongoose.model(
  "EducationDetail",
  EducationDetailSchema
);

export default EducationDetail;

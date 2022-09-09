import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("brand", brandSchema);

import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    deliveryNumber: {
      type: String,
      required: true,
      unique: true
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },
    riderName: {
      type: String,
      trim: true,
      default: "Not Assigned"
    },
    riderPhone: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Out for Delivery", "Delivered", "Cancelled"],
      default: "Pending"
    },
    deliveryAddress: {
      type: String,
      required: true,
      trim: true
    },
    customerPhone: {
      type: String,
      trim: true
    },
    estimatedTime: {
      type: String,
      trim: true
    },
    notes: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

deliverySchema.index({ createdAt: -1 });
deliverySchema.index({ status: 1 });

const Delivery = mongoose.models.Delivery || mongoose.model("Delivery", deliverySchema);
export default Delivery;

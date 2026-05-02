import Delivery from "../models/delivery.js";
import Order from "../models/order.js";

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate("orderId").sort({ createdAt: -1 });
    res.json({ deliveries });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createDelivery = async (req, res) => {
  try {
    const { orderId, riderName, riderPhone, notes } = req.body;
    
    // Check if order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if delivery already exists for this order
    const existing = await Delivery.findOne({ orderId });
    if (existing) {
      return res.status(400).json({ message: "Delivery record already exists for this order" });
    }

    const deliveryNumber = `DEL-${Date.now()}`;
    const delivery = new Delivery({
      deliveryNumber,
      orderId,
      riderName: riderName || "Not Assigned",
      riderPhone,
      deliveryAddress: order.deliveryAddress || "No address provided",
      customerPhone: order.phone,
      notes,
      status: riderName ? "Assigned" : "Pending"
    });

    await delivery.save();
    res.status(201).json({ message: "Delivery created", delivery });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const { riderName, riderPhone, status, notes, estimatedTime } = req.body;

    const delivery = await Delivery.findById(id);
    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    if (riderName) delivery.riderName = riderName;
    if (riderPhone) delivery.riderPhone = riderPhone;
    if (status) delivery.status = status;
    if (notes) delivery.notes = notes;
    if (estimatedTime) delivery.estimatedTime = estimatedTime;

    // Auto-update status to Assigned if riderName is provided and status is Pending
    if (riderName && delivery.status === "Pending") {
      delivery.status = "Assigned";
    }

    await delivery.save();
    res.json({ message: "Delivery updated", delivery });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findByIdAndDelete(id);
    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }
    res.json({ message: "Delivery deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

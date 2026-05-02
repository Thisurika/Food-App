import express from "express";
import {
  getDeliveries,
  createDelivery,
  updateDelivery,
  deleteDelivery
} from "../controllers/deliveryController.js";

const router = express.Router();

router.get("/deliveries", getDeliveries);
router.post("/deliveries", createDelivery);
router.patch("/deliveries/:id", updateDelivery);
router.delete("/deliveries/:id", deleteDelivery);

export default router;

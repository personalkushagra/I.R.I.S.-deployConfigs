import express from "express";
import { checkout } from "./paymentController.js";

const router = express.Router();

router.post("/checkout", checkout);

export default router;
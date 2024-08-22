import express from "express";
import shopController from "../controllers/shopController.js";
const router = express.Router();

router.get("/getshopdata", shopController.getshopData);
router.post("/createshopdata", shopController.createshopData);

export default router;

import express from "express";
import {
  createBrand,
  getAllBrands,
  getBrandById,
  deleteBrandById,
  updateBrand,
} from "../controller/brandController.js";

const router = express.Router();

router.post("/create", createBrand);

router.get("/get", getAllBrands);

router.get("/get/:id", getBrandById);

router.delete("/delete/:id", deleteBrandById);

router.put("/update/:id", updateBrand);

export default router;

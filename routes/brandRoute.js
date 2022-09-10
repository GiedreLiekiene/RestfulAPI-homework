import express from "express";
import {
  createBrand,
  getAllBrands,
  getBrandById,
  deleteBrandById,
  updateBrand,
  deleteAllBrands,
} from "../controller/brandController.js";

const router = express.Router();

router.post("/create", createBrand);

router.get("/get", getAllBrands);

router.get("/get/:id", getBrandById);

router.delete("/delete/:id", deleteBrandById);

router.put("/update/:id", updateBrand);

router.delete("/delete", deleteAllBrands);

export default router;

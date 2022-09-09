import BrandModel from "../models/brandModel.js";
import bcrypt from "bcrypt";

export const createBrand = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.address, salt);
    const newBrand = new BrandModel({
      ...req.body,
      address: hash,
    });
    await newBrand.save();
    res.status(201).send("New brand is created");
  } catch (error) {
    console.error(error);
    res.status(405).send(error);
  }
};

export const getAllBrands = async (req, res) => {
  try {
    const allBrands = await BrandModel.find({}, { address: 0 });

    res.status(202).json(allBrands);
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getBrandById = async (req, res) => {
  try {
    const brand = await BrandModel.findById(req.params.id);
    const { address, ...remainingBrandData } = brand._doc;
    res.status(200).json(remainingBrandData);
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const deleteBrandById = async (req, res) => {
  try {
    await BrandModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Brand has been successfuly deleted");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const updateBrand = async (req, res) => {
  try {
    const updateBrand = await BrandModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBrand);
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

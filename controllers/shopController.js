import { error } from "console";
import shopModel from "../model/shopModel.js";

const createshopData = async (req, res) => {
  try {
    const data = req.body;
    const shopData = await shopModel.create(data);
    if (!shopData) {
      return res.status(400).json({
        sucess: false,
        message: "Failed to create shop data",
      });
    }
    return res.status(200).json({
      message: "Shop data created successfully",
      data: shopData,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: "internal server error",
      error: error.message,
    });
  } // returns the shop data when the request is successful
};

const getshopData = async (req, res) => {
  try {
    const shopData = await shopModel.find();
    if (!shopData) {
      return res.status(404).json({
        sucess: false,
        message: "No shop data found",
        error: error.message,
      });
    }
    return res.status(200).json({
      suceess: true,
      message: "Shop data fetched successfully",
      data: shopData,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        sucess: false,
        message: "internal Server Error",
        error: error.message,
      });
  }
};

export default {
  getshopData,
  createshopData,
};

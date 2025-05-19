import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";
import cloudinary from "cloudinary";

// add food items

const addFood = async (req, res) => {
  const imageFile = req.files.image;
  const base64Image = `data:${
    imageFile.mimetype
  };base64,${imageFile.data.toString("base64")}`;

  const myCloud = await cloudinary.v2.uploader.upload(base64Image, {
    folder: "images",
    crop: "fit",
  });

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: myCloud.secure_url ?? "default_image",
    image_id: myCloud.public_id ?? "no_id",
  });
  try {
    let userData = await userModel.findById(req.body.userId);

    if (userData && userData.role === "admin") {
      await food.save();
      res.json({ success: true, message: "Food Added" });
    } else {
      res.json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all foods
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    if (userData && userData.role === "admin") {
      const food = await foodModel.findById(req.body.id);

      const foodId = food.image_id;

      await cloudinary.v2.uploader.destroy(foodId);

      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food Removed" });
    } else {
      res.json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };

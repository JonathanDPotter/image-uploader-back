import cloudinary from "cloudinary";
import { Request, Response } from "express";

const imageUpload = async (req: Request, res: Response) => {
  const  image  = req.body.data;
  try {
    const response = await cloudinary.v2.uploader.upload(image);
    console.log(response.url);
    res.json(response.url);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const controller = { imageUpload };

export default controller;

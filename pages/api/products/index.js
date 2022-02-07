import dbConnect from "../../../util/mongo";
import Product from "../../../Models/Product";

export default async function handler(req, res) {
  const { method } = req;

  // GET DATABASE
  await dbConnect();

  // GET PRODUCT
  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // POST PRODUCT
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      console.log("Product added Succesfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

import dbConnect from "../../../util/mongo";
import Product from "../../../Models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  // GET DATABASE
  dbConnect();

  // GET PRODUCT BY ID
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // PUT PRODUCT
  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      console.log("Product added Succesfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // DELETE PRODUCT
  //   if (method === "DELETE") {
  //     try {
  //       const product = await Product.create(req.body);
  //       res.status(201).json(product);
  //       console.log("Product added Succesfully");
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   }
}

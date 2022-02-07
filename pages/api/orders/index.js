import dbConnect from "../../../util/mongo";
import Order from "../../../Models/Product";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
};

export default handler;

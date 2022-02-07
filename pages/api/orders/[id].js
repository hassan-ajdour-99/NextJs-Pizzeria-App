import dbConnect from "../../../util/mongo";
import Order from "../../../Models/Product";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  // GET DATABASE
  await dbConnect();

  if (method === "GET") {
    try {
      const orderById = await Order.findById(id);
      res.status(201).json(orderById);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
  }

  if (method === "DELETE") {
  }
};

export default handler;

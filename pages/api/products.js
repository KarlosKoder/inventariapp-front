import { connectToDatabase } from "../../util/mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
*/
export default async (req, res) => {

  const { db } = await connectToDatabase();

  const products = await db

    .collection("products")

    .find({})

    .toArray();

  res.json(products);

};
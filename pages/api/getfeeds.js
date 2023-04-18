import clientPromise from "./db/mongodb.ts";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const fed = await db
           .collection("feedbacks")
           .find({})
           .toArray();

       res.json(fed);
   } catch (e) {
       console.error(e);
   }
};
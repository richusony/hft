import clientPromise from "./db/mongodb.ts";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const gal = await db
           .collection("gallerys")
           .find({})
           .toArray();

       res.json(gal);
   } catch (e) {
       console.error(e);
   }
};
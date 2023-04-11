import clientPromise from "./db/mongodb.ts";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const adop = await db
           .collection("adoptions")
           .find({})
           .sort({ name: 1 })
           .toArray();

       res.json(adop);
   } catch (e) {
       console.error(e);
   }
};
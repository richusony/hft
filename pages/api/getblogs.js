import clientPromise from "../api/auth/lib/mongodb.ts";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const stu = await db
           .collection("blogs")
           .find({})
           .sort({ metacritic: -1 })
           .toArray();

       res.json(stu);
   } catch (e) {
       console.error(e);
   }
};
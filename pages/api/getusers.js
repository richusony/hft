import clientPromise from "./db/mongodb.ts";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const stu = await db
           .collection("users")
           .find({})
           .sort({ name: 1 })
           .toArray();

       res.json(stu);
   } catch (e) {
       console.error(e);
   }
};
import clientPromise from "./db/mongodb.ts";
var jwt = require('jsonwebtoken');

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("hft-web");

       const don = await db
           .collection("donars")
           .find({})
           .sort({ donar: 1 })
           .toArray();

       res.json(don);
   } catch (e) {
       console.error(e);
   }
};
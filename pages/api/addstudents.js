const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);
// The database to use
const dbName = "hft-web";

export default async function (req, res) {
   try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection("students");

      // Construct a document                                                                                                                                                              
      let studentDocument = {
         "stu_name": `${req.body.name}`,
         "stu_email": `${req.body.email}`,
         "stu_age": `${req.body.age}`,
         "blood": `${req.body.blood}`,
         "school": `${req.body.school}`,
         "img_url": `${req.body.img}`
      }

      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(studentDocument);
      // Find one document
      if (p) {
         res.status(200).json({ studentDocument })
      }
      else {
         res.status(500).json({})
      }
      const myDoc = await col.findOne();
      // Print to the console
      console.log(myDoc);

   } catch (err) {
      console.log(err.stack);
   }

   finally {
      await client.close();
   }
}
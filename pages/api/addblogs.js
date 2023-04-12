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
      const col = db.collection("blogs");

      const filter = { "blog_id": req.body.id };

       // Check if the student exists in the database
       const existingStudent = await col.findOne(filter);
       if (existingStudent) {
          res.status(401).json({ message: "Blog id already exists." });
          return;
       }

      // Construct a document                                                                                                                                                              
      let blogDocument = {
         "blog_id": `${req.body.id}`,
         "title": `${req.body.title}`,
         "img_url": `${req.body.image}`,
         "desc": `${req.body.desc}`
      }

      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(blogDocument);
      // Find one document
      if (p) {
         res.status(200).json({ blogDocument })
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
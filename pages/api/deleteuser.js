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

      // Use the collection "students"
      const col = db.collection("users");

      // Construct a filter to find the student to delete
      const filter = { "email": req.body.email };

      // Find the student that matches the filter
      const user = await col.findOne(filter);

      // If the student exists, delete it
      if (user) {
         // Delete a single document that matches the filter, wait for promise so we can read the result
         const result = await col.deleteOne(filter);

         // Check if a document was deleted and return a response accordingly
         if (result.deletedCount === 1) {
            res.status(200).json({ message: "Student deleted successfully." });
         } else {
            res.status(500).json({ message: "Failed to delete student." });
         }
      } else {
         // If the student doesn't exist, return an error message
         res.status(404).json({ message: "Student not found." });
      }

   } catch (err) {
      console.log(err.stack);
      res.status(500).json({ message: "Server error." });
   }

   finally {
      await client.close();
   }
}

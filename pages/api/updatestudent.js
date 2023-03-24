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
      const col = db.collection("students");

      // Construct a filter to find the student to update
      const filter = { "stu_email": req.body.email };

      // Check if the student exists in the database
      const existingStudent = await col.findOne(filter);
      if (!existingStudent) {
         res.status(404).json({ message: "Student not found in the database." });
         return;
      }

      // Construct an update document with the new student details
      const updateDoc = {
         $set: {
            "stu_name": req.body.name,
            "stu_email":req.body.email,
            "stu_age": req.body.age,
            "blood": req.body.blood,
            "school": req.body.school,
            "img_url": req.body.img
         }
      };

      // Find the student that matches the filter and update their details
      const result = await col.updateOne(filter, updateDoc);

      // Check if a document was updated and return a response accordingly
      if (result.modifiedCount === 1) {
         res.status(200).json({ message: "Student details updated successfully." });
      } else {
         res.status(500).json({ message: "Failed to update student details." });
      }

   } catch (err) {
      console.log(err.stack);
      res.status(500).json({ message: "Server error." });
   }

   finally {
      await client.close();
   }
}

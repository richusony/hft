import Gallery from "../../models/gallery";
import connectMongo from "../../middleware/mongodb";

const handler = async (req, res) => {
   if (req.method == 'POST') {
      const exists = await Gallery.findOne({ gallery_id: req.body.id });
      console.log(exists);
      if (exists) {
         res.status(401).json({ error: "Gallery_id already exists" });
      }
      else {
         const currentdates = new Date();
         const times = currentdates.toLocaleString("en-us", {
           hour12: true,
           weekday: "short",
           day: "2-digit",
           hour: "2-digit",
           minute: "2-digit",
           month: "long",
           year: "numeric",
         });
         let g = new Gallery({
            "gallery_id": req.body.id,
            "img_url": req.body.image,
            "dateTime": times
         })
         console.log(req.body);
         await g.save();
         res.status(200).json({ success: "success" })
      }
   }
   else {
      res.status(400).json({ error: "This method is not allowed" })
   }

}

export default connectMongo(handler);
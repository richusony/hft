import Donar from "../../models/donar";
import connectMongo from "../../middleware/mongodb";

const handler = async (req, res) => {
    if (req.method == 'POST') {
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

        let d = new Donar({
            "donar": req.body.uname,
            "student": "HFT",
            "payment_id": req.body.payment_id,
            "amount": req.body.amt,
            "dateTime": times
        })
        await d.save();
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(500).json({ error: "Bad request!!" })
    }
}

export default connectMongo(handler);
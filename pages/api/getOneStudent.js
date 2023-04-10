import Student from "../../models/students";
import connectMongo from "../../middleware/mongodb";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const exists = await Student.findOne({ email: req.body.email });
        console.log(exists);
        res.status(200).json({ success: "success" })
    }
}

export default handler;
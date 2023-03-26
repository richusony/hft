import User from "../../models/user";
import connectMongo from "../../middleware/mongodb";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const exists = await User.findOne({ email: req.body.email });
        console.log(exists);
        if (exists) {
            var bytes = CryptoJS.AES.decrypt(exists.password, 'secret key 123');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (exists.email == req.body.email && originalText == req.body.password) {
                res.status(200).json({ success: "success", name: exists.name, email: exists.email })
            }
            else {
                res.status(402).json({ error: "Invalid credentials!!" })
            }
        }
        else {
            res.status(401).json({ error: "User doesn't exists!!" });
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}

export default connectMongo(handler);
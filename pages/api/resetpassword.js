import User from "../../models/user";
import connectMongo from "../../middleware/mongodb";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body.email)
        const user = await User.findOne({ "email": req.body.email });
        console.log(user);
        if (!user) {
            res.status(401).json({ error: "User not found with this email" });
        } else {
            const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.LOGIN_SECRET).toString();
            user.password = encryptedPassword;
            await user.save();
            res.status(200).json({ success: "success" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectMongo(handler);

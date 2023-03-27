import User from "../../models/user";
import connectMongo from "../../middleware/mongodb";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');



const handler = async (req, res) => {
    if (req.method == 'POST') {
        const exists = await User.findOne({ email: req.body.email });
        console.log(exists);
        if (exists) {
            var bytes = CryptoJS.AES.decrypt(exists.password, process.env.LOGIN_SECRET);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (exists.email == req.body.email && originalText == req.body.password) {
                var token = jwt.sign({ name: exists.name, email: exists.email }, process.env.JWT_SECRET,{
                    expiresIn: Math.floor(Date.now() / 1000) + 60 // 1 minute
                });
                var userd=jwt.verify(token,process.env.JWT_SECRET);
                res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Max-Age=60`);
                res.status(200).json({ success: "success", token ,userd})
                console.log(token);
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
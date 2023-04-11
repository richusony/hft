import Adoption from "../../models/adoption";
import connectMongo from "../../middleware/mongodb";
var CryptoJS = require("crypto-js");

const handler = async (req,res) =>{
    if(req.method== 'POST'){
        let u = new Adoption({
            "name":req.body.name,
            "place":req.body.place,
            "email":req.body.email,
            "gender":req.body.gender,
            "age":req.body.age,
            "count":req.body.count,
            "phone":req.body.phone,
            "date":req.body.date,
            "status":req.body.status

        })
       await u.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }

}

export default connectMongo(handler);
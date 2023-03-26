import User from "../../models/user";
import connectMongo from "../../middleware/mongodb";

const handler = async (req,res) =>{
    if(req.method== 'POST'){
        const exists = await User.findOne({"email":req.body.email});
        console.log(exists);
        if(exists){
            res.status(401).json({error:"User already existed on this email"});
        }
        let u = new User({
            "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password
        })
       await u.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }

}

export default connectMongo(handler);
import Feedback from "../../models/feedback";
import connectMongo from "../../middleware/mongodb";

const handler = async (req,res) =>{
    if(req.method== 'POST'){
        let f = new Feedback({
            "user": req.body.userr,
            "feed": req.body.feed
        })
       await f.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }

}

export default connectMongo(handler);
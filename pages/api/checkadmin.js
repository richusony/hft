var jwt = require('jsonwebtoken');

export default async (req, res) => {
    const { cookies } = req;
    const token = cookies.token;
    var admind = jwt.verify(token, process.env.JWT_SECRET);
    console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token recieved~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    )
    console.log(token)
    console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    )
        console.log(admind);
        if(!token){
            res.status(401).json({error:"cookies not exists"})
        }
        else{
            if(admind.email != "admin@gmail.com"){
                res.status(401).json({error:"user not identified."})
            }
            res.status(200).json({ success: "success",admind})
        }
}

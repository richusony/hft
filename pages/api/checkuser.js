var jwt = require('jsonwebtoken');

export default async (req, res) => {
    const { cookies } = req;
    const token = cookies.token;
    var userd = jwt.verify(token, process.env.JWT_SECRET);
    console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token recieved~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    )
    console.log(token)
    console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    )
        console.log(userd);
        if(!token){
            res.status(401).json({error:"cookies not exists"})
        }
        else{
            res.status(200).json({ success: "success",userd})
        }
}

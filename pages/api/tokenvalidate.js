var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if (req.method == 'POST') {
        let tok = req.body.token;
        var decoded = jwt.verify(tok, 'jwtsecret');
        if(decoded){
            res.status(200).json({decoded})
            console.log(decoded);
        }
        else{
            res.status(400).json({message:"token is not valid"})
        }
     
    }
}

export default handler;
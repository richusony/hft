var jwt = require('jsonwebtoken');

export default async (req, res) => {
    const { cookies } = req;
    const token = cookies.token;
    if (!token) {
        res.status(401).json({ error: "cookies not exists" })
    }
    else {
        var userd = jwt.verify(token, process.env.JWT_SECRET);
        if (userd.email == 'admin@gmail.com') {
            res.status(401).json({ error: "admin is not allowed" })
        }
        else {
            console.log(
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token recieved~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            )
            token ? console.log(token) : ""
            console.log(
                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~token data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            )
            console.log(userd);
            res.status(200).json({ success: "success", userd })
        }
    }
    // if (!token) {
    //     res.status(401).json({ error: "cookies not exists" })
    // }
    // else {
    //     res.status(200).json({ success: "success", userd })
    // }
}

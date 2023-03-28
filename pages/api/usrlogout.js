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
    res.setHeader('Set-Cookie', [
        `token=; HttpOnly; Secure; SameSite=strict Max-Age=Thu, 01 Jan 1970 00:00:00 GMT`,
        `name=; HttpOnly; Secure; SameSite=strict Max-Age=Thu, 01 Jan 1970 00:00:00 GMT`
      ]);
    res.status(200).json({ success: "success"})
}
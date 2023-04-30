import nodemailer from 'nodemailer';

export default function (req, res) {
    const pass = process.env.MAIL_PASS;
    console.log("request received");
    const emailId = req.body.donorEmail;
    const uname = req.body.uname;
    const student = req.body.name;
    const amt = req.body.amt;
    const payment_id = req.body.payment_id;

    const transporter = nodemailer.createTransport({
        port: 25,
        host: "smtp.gmail.com",
        auth: {
            user: 'bloggzzy@gmail.com',
            pass: pass,
        },
        secure: false,
    })
    const mailData = {
        from: 'bloggzzy@gmail.com',
        to: `${emailId}`,
        subject: `HFT - Donations`,
        text: `Thank you ${uname}, for donating to ${student} Rs.${amt} we appriciate your kindness and we pray for you and your family's well-being and health`,
        html: `<html>
            <body>
            <p style="font-size:16px;">Thank you ${uname}, for donating to ${student} Rs.${amt} we appriciate your kindness and we pray <br>for you and your family's well-being and health</p>
            <h3>Your Payment ID is : ${payment_id} </h3><br>
            <a style="padding: 15px 32px;text-align: center;text-decoration: none;font-size: 16px;color: white; border: none;background-color: #008CBA;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);border-radius: 8px;" href='http://localhost:3000/yourdonations'>Your Donations</a>
            <h1 style="text-align:center;background-color:black;color:white;padding:2px 4px;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);border-radius: 8px;">Hope For Tomorrow - Heaven for Every child on Earth.</h1>
            </body>
            </html>`,
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
            res.end()
        }
        else
            console.log(info)
    })
    return res.status(200).json({ emailId });
}

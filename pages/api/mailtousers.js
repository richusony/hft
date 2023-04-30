import nodemailer from 'nodemailer';

export default function (req, res) {
    const pass = process.env.MAIL_PASS;
    console.log("request received");

    const msg = req.body.msg;
    const data = req.body.data;
console.log(data.length)

    for (let i = 0; i < data.length; i++) {
        const emailId = data[i].email;
        console.log(emailId)

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
            to: `${data[i].email}`,
            subject: `HFT - Donations`,
            text: `Hi ${data[i].name},`,
            html: `<html>
            <body>
            <p style="font-size:16px;">Hi ${data[i].name},${msg}</p>
            <a style="padding: 15px 32px;text-align: center;text-decoration: none;font-size: 16px;color: white; border: none;background-color: #008CBA;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);border-radius: 8px;" href='http://localhost:3000'>HFT Homepage</a>
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
    }
        return res.status(200).json({message:"Mail send to users"});
}

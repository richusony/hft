import nodemailer from 'nodemailer';

export default function (req, res) {
    const pass = process.env.NEXT_PUBLIC_MAIL_PASS;
    let val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'bloggzzy@gmail.com',
            pass: pass,
        },
        secure: true,
    })
    const mailData = {
        from: 'bloggzzy@gmail.com',
        to: `${req.body.email}`,
        subject: `Verification using OTP`,
        text: `Hello ${req.body.name}, Your OTP(One Time Password) for account creation is:`,
        html: `<h1 style='font-size:20px;text-align:center;'>${val}</h1>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
            res.end()
        }
        else
            console.log(info)
    })
    res.status(200).json({val})
    res.end();
}
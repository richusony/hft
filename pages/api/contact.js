import fs from 'fs';
import nodemailer from 'nodemailer';

export default function (req, res) {
    const pass = process.env.NEXT_PUBLIC_MAIL_PASS;
    console.log("request received");
    const emailId = req.body.email;
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
            to: `${emailId}`,
            subject: `Verification using OTP`,
            text: `Hello , Your OTP(One Time Password) for account creation is:`,
            html: `<html><body><a href='https://hft.vercel.app/Login/${emailId}'>reset Password</a></body></html>`,
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

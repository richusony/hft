import Razorpay from "razorpay"
import User from "../../models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {

    const amounts = req.body.amt;
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_API,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = amounts;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: Math.floor(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
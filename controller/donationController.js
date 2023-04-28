import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkoutSession = async (req, res) =>{
    const body = req.body;


    const line_items = body.items.map((item)=>{
        return{
            price_data: {
                currency:'inr',
                product_data:{
                    name:item.name,

                },
                unit_amount:item.price * 100
            },
            quantity:1
        }
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cancel`,
        customer_email:req.user.email,
        mode:'payment',
        line_items
    });
    res.status(200).json({
        url:session.url
    })
}
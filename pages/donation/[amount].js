import React, { useEffect, useState } from 'react'
import otplg from './otp.png'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const amount = () => {
  const [amt, setAmt] = useState(0);
  const [data, setData] = useState([]);
  const [usr, setUsr] = useState([]);
  const router = useRouter();
  const { amount } = router.query;
  let name;
  let img;
  const email = amount

  useEffect(() => {
    async function fetchuser() {
      const res = await fetch('/api/checkuser'); // Replace with your API endpoint
      console.log(res);
      if (res.status != 200) {
        router.push('/Login');
      }
      const newData = await res.json();
      setUsr(newData);
    }
    fetchuser();
  }, [router.query])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getstudent'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, [router.query])

  data.map((item) => {
    if (item.stu_email == email) {
      name = item.stu_name;
      img = item.img_url;
    }
  })

  // const [item, setItem] = useState({
  //   name: 'Alex',
  //   description: 'kasdfkladjlfl',
  //   image: "ksda",
  //   quantity: 1,
  //   price: 11,
  // });

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  // const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  // const stripePromise = loadStripe(publishableKey);

  // const createCheckOutSession = async () => {
  //   const stripe = await stripePromise;
  //   const checkoutSession = await axios.post('/api/checkout_sessions', {
  //     item: item,
  //   });
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });
  //   if (result.error) {
  //     alert(result.error.message);
  //   }
  // };

  return (
    <>
      <div className="bg-[#151522] p-5 w-full">
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme=""
        />
        <form className="flex-row w-72 h-80 text-center mx-auto border px-3 mt-10" action='/api/checkout_sessions' method='POST'>
          <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter the Donation Amount</h2>
          <input type="tel" placeholder="amount" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required maxLength={6} onChange={(e) => { setAmt(e.target.value) }} />
          <button type="submit" role="link" className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4">Pay</button>
        </form>
        <div className="p-1 mt-20">
          <Image src={otplg} width={0} height={0} alt='childrens' className='w-3/4 md:w-1/2 mx-auto' />
        </div>
      </div>
    </>
  )
}

export default amount;

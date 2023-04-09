import React, { useState } from 'react'
import otplg from './otp.png'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const amount = () => {
  const [amt, setAmt] = useState(0);
  const [data, setData] = useState([]);
  const router = useRouter();
  const { amount } = router.query;
  let name;
  let img;
  const email = amount
  if (!localStorage.getItem('token')) {
    push('/Login')
  }

  async function fetchData() {
    const res = await fetch('/api/getstudent'); // Replace with your API endpoint
    const newData = await res.json();
    setData(newData);
  }
  fetchData();

  data.map((item) => {
    if (item.stu_email == email) {
      name = item.name;
      img = item.img_url;
    }
  })

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const handlePay = async (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      amt,
      img
    }
    await toast.promise(
      fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      ).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          toast.success('Payment Succefull!!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setAmt(0)
        }
        if (!res.status === 200) {
          toast.error('payment failed!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }),
      {
        pending: 'Checking...',
        // success: 'Successfully Logged in 👌',
        // error: 'Login Failed 🤯'
      }
    );
  }

  return (
    <>
      <div className="bg-[#151522] p-5 w-full">
        <form className="flex-row w-72 h-80 text-center mx-auto border px-3 mt-10">
          <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter the Donation Amount</h2>
          <input type="tel" placeholder="amount" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required maxLength={6} onChange={(e) => { setAmt(e.target.value) }} />
          <button type="submit" role="link" className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4" onClick={(e) => handlePay(e)}>Pay</button>
        </form>
        <div className="p-1 mt-20">
          <Image src={otplg} width={0} height={0} alt='childrens' className='w-3/4 md:w-1/2 mx-auto' />
        </div>
      </div>
    </>
  )
}

export default amount

import React, { useEffect, useState } from 'react'
import otplg from '../donation/otp.png'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const amount = () => {
  const [amt, setAmt] = useState(0);
  const [data, setData] = useState([]);
  const [dates, setDates] = useState('');
  const [usr, setUsr] = useState([]);
  const router = useRouter();
//   const { amount } = router.query;
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
      console.log(newData)
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

  const makePayment = async (e) => {
    e.preventDefault();
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    let details = {
      name,
      img,
      amt
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razor", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    }).then((t) =>
      t.json()
    );

    var options = {
      key: process.env.RAZORPAY_API, // Enter the Key ID generated from the Dashboard
      name: "HFT",
      currency: data.currency,
      amount: amt,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: img,
      handler: function (response) {
        console.log(response)
        if (response.razorpay_payment_id != undefined) {
          router.push('/success');
          localStorage.setItem("payment_id", response.razorpay_payment_id);
          localStorage.setItem("amount", amt);
          const payment_id = response.razorpay_payment_id;
          const uname = localStorage.getItem("uname");
          const dbpayment = async () => {

            let detail = {
              uname,
              name,
              payment_id,
              amt,
            }
            // Make API call to the serverless API
            const d = await fetch("/api/orphanagepayment", {
              method: "POST",
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(detail)
            }).then((t) =>
              t.json()
            );
          }
          dbpayment();
        }
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "HFT",
        email: email,
        contact: "+91 8945324356",
      },
      theme: {
        "color": "#151522"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setAmt('');
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

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
        <form className="flex-row w-72 h-80 text-center mx-auto border px-3 mt-10">
          <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter the Donation Amount</h2>
          <input type="tel" placeholder="amount" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required maxLength={6} onChange={(e) => { setAmt(e.target.value) }} />
          <button type="submit" id="rzp-button1" role="link" className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4" onClick={makePayment}>Pay</button>
        </form>
        <div className="p-1 mt-20">
          <Image src={otplg} width={1080} height={1080} alt='childrens' className='w-3/4 md:w-1/2 mx-auto' />
        </div>
      </div>
    </>
  )
}

export default amount;

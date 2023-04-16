import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const resetpassword = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const { resetpassword } = router.query;

  const handlePassword = async (e) => {
    e.preventDefault();
    setEmail(resetpassword)
    let data = {
      password,
      email
    }
    if (password == "") {
      toast.warning('Fill all the Details!!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    else {
      // toast.promise( 
      const res = await fetch('https://hft.vercel.app/api/resetpassword', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      )
      let response = await res.json()
      console.log('Response received')
      if (res.status === 200) {

        toast.success('Password has been changed !!', {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        // setTimeout(() => {
        //     router.push('/')
        // }, 4000)
        setEmail('');

      }
      if (res.status === 401) {

        toast.error('email is not valid !!', {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }
    }
  }
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
        <div className="flex-row w-72 h-80 text-center mx-auto border px-3 mt-10">
          <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter new Password</h2>
          <input type="password" placeholder="new password" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required onChange={(e) => setPassword(e.target.value)} />
          <button className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handlePassword(e) }}>reset</button>
        </div>
        <div className="p-1 mt-20">

        </div>
      </div>
    </>
  )
}

export default resetpassword;

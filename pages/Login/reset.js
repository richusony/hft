import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const reset = () => {
    const [email, setEmail] = useState('')
    const sendMail = async (e) => {
        e.preventDefault()
        let data = {
            email
        }
        if (email == "") {
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
            const res = await fetch('/api/contact', {
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

                toast.success('check your email!!', {
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
                    <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter the Email</h2>
                    <input type="tel" placeholder="email" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required onChange={(e) => setEmail(e.target.value)} />
                    <button className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4" onClick={(e) => { sendMail(e) }}>send</button>
                </div>
                <div className="p-1 mt-20">

                </div>
            </div>
        </>
    )
}

export default reset

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const adoption = () => {
    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Boy')
    const [age, setAge] = useState('')
    const [count, setCount] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('Pending')
    const router = useRouter();
    const handleAdoption = async (e) => {
        console.log('Sending')
        let data = {
            name,
            place,
            email,
            gender,
            age,
            count,
            phone,
            date,
            status
        }
        await toast.promise(
            fetch('/api/adoptionsubmit', {
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
                    toast.success('Details Submitted!!', {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setName('')
                    setPlace('')
                    setEmail('')
                    setGender('')
                    setAge('')
                    setCount('')
                    setPhone('')
                    setDate('');
                }
                if (res.status != 200) {
                    toast.error('Something wrong!!', {
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
            <div>
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
                <div className='w-full text-center bg-cover font-bold flex justify-center items-center bg-family md:bg-family2 shadow-2xl bg-fixed px-5 md:py-60 py-80 rounded-b-lg object-cover'>
                    <h1 className='transition duration-150 text-5xl text-white tracking-wide font-semibold ease-linear'><span className='text-[#ff6600]'>Every child </span>deserves home and<br /> love period</h1>
                </div>
                {/* <div className='w-full text-center rounded-b-3xl flex justify-center items-center'>
                    <Image width={1080} height={1080} src={family} className='shadow-2xl md:rounded-b-3xl w-full h-2/3'></Image>

                    <h1 className='bg-gradient-to-r from-blue-500 to-transparent text-4xl text-white tracking-wide absolute font-medium'><span className='text-[#ff6600]'>Every child </span>deserves home and<br/> love Period</h1>
                </div> */}
                <div className='text-center mb-20'>
                    <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">ADOPTION</h1>
                </div>

                <div className='text-center bg-[#ff6600] w-full py-20'>
                    <h2 className='text-2xl font-semibold text-white italic'>"GIVE A HELPING HAND TO THOSE WHO NEED IT <br /> share your love with them!"</h2>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <div class="mx-auto flex justify-center items-center w-full h-full bg-slate-800">

                        <div class="container mx-auto my-4 px-4 lg:px-20">

                            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
                                <div class="flex">
                                    <h1 class="font-bold uppercase text-5xl text-white">ADOPTION <br /> Details</h1>
                                </div>
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Full Name*" onChange={(e) => setName(e.target.value)} />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Place*" onChange={(e) => setPlace(e.target.value)} />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
                                    <select class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" onChange={(e) => setGender(e.target.value)}>
                                        <option value='Boy'>Boy</option>
                                        <option value='Girl'>Girl</option>
                                        <option value='Both'>Both</option>
                                    </select>
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel" placeholder="Child Age (2-14)*" maxLength={2} onChange={(e) => setAge(e.target.value)} />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel" maxLength={1} placeholder="No of children you want to adopt*" onChange={(e) => setCount(e.target.value)} />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel" maxLength={13} placeholder="Phone with country code*" onChange={(e) => setPhone(e.target.value)} />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="date" placeholder="Date of adoption*" onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div class="mx-auto my-8 w-1/2 lg:w-1/4">
                                    <button class="transition duration-300 mx-auto uppercase text-sm font-bold tracking-wide bg-blue-900 ease-linear hover:bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={(e) => handleAdoption(e)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default adoption;


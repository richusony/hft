import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {

    const [feed, setFeed] = useState('');
    const [usr, setUsr] = useState([]);
    const [userr, setUserr] = useState([]);
    const [feedData, setFeedData] = useState('');
    const [count, setCount] = useState(0);
    const router = useRouter();
    let counter = 0;
    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkuser'); // Replace with your API endpoint
            if (res.status != 200) {
                router.push('/Login');
            }
            const newData = await res.json();
            setUsr(newData);
            console.log(newData.userd.name);
            setUserr(newData.userd.name);
            // setUserr(usr.userd.name);
        }
        fetchuser();

        async function fetchData() {
            const res = await fetch('/api/getfeeds'); // Replace with your API endpoint
            const newData = await res.json();
            setFeedData(newData);
        }
        fetchData();
    }, [router.query])

    const handleFeed = async (e) => {
        if (!feed) {
            toast.warning('Nothing to send!', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        console.log('Sending')
        let data = {
            userr,
            feed
        }
        await toast.promise(
            fetch('/api/feedbacks', {
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
                    toast.success('send feedback!!', {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setFeed('');
                }
                if (res.status === 401) {
                    toast.error('something went wrong !!', {
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
            <div className='bg-[#272A37] p-5'>
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
                <h1 className='text-center text-[#D9D9DC] text-4xl font-semibold mb-5'>FAQ</h1>
                <div className='bg-[#323644] p-5 md:p-20 rounded-md '>
                    <div className='overflow-y-scroll scrollbar-hide h-80'>
                        {feedData ? feedData.map((item, key) => (
                            <div className="">
                                <div key={key} className={`p-5 ${counter % 2 == 0 ? 'bg-[#424656]' : 'border-[#1D90F5]'} text-[#D9D9DC] rounded-t-2xl rounded-br-2xl my-3`}>{item.feed}</div>
                                <span className='text-[#D9D9DC]'>{item.user}</span> <span className='text-[#61646E]'>9:01 PM</span>
                            </div>
                        )) : "oops!! No feeds yet!!"}
                    </div>

                    <div className='px-5 md:px-0 mt-10 w-full items-center flex justify-center'>
                        <input type='text' onChange={(e) => setFeed(e.target.value)} required className='p-3 md:p-3 md:w-1/2 text-[#D9D9DC] rounded-lg bg-transparent border border-[#1D90F5] ' placeholder='Type something...' />
                        <button className='bg-[#1D90F5] px-2 py-1 md:px-4 md:py-3 mx-2 rounded-3xl'><FontAwesomeIcon icon={faPaperPlane} className='text-[#D9D9DC]' onClick={(e) => { handleFeed(e) }} /></button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default index

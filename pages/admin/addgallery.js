import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addgallery = () => {
    const [id, setId] = useState();
    const [image, setImage] = useState();
    const [date, setDate] = useState('');
    const [usr, setUsr] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkadmin'); // Replace with your API endpoint
            console.log(res);
            if (res.status != 200) {
                router.push('/admin/adlogin');
            }
            const newData = await res.json();
            setUsr(newData);
        }
        fetchuser();
    }, [router.query])

    const handleSubmit = async (e) => {
        const currentdate = new Date();
        const time = currentdate.toLocaleString("en-us", {
            hour12: true,
            weekday: "short",
            day:"2-digit",
            hour: "2-digit",
            minute: "2-digit",
            month: "long",
            year: "numeric",
        });
        setDate(time);
        console.log(date);

        e.preventDefault();
        let data = {
            id,
            image,
            date
        }
        if (!id || !image) {
            toast.warning('Fill all the details!!', {
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
        await toast.promise(
            fetch('/api/addgallery', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            ).then((res) => {
                console.log('Response received')
                if (res.status == 401) {
                    toast.error('Gallery id already exists!!', {
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
                if (res.status === 200) {
                    console.log('Gallery added!')
                    setId('');
                    setImage('');
                    setDate('');
                    toast.success('Gallery added!!', {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setTimeout(() => {
                        router.push('/admin/gallery')
                    }, 4000)
                }
            }),
            {
                pending: 'Checking...',
                // success: 'Successfully Logged in 👌',
                // error: 'Login Failed 🤯'
            }
        )
    }
    return (
        <>
            <div className="bg-[#151522] py-10 px-5">
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
                    theme="dark"
                />
                <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Add Gallery</h1>

                    <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                        <input type="text" placeholder="Gallery id" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setId(e.target.value) }} required />
                        <input type="text" placeholder="Image" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setImage(e.target.value) }} required />
                        {/* <input type="date" placeholder="date" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setDate(e.target.value) }} required /> */}

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Add</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default addgallery;

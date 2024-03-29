import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const deleteblog = () => {
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [usr, setUsr] = useState([]);

    const router = useRouter();

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkadmin'); // Replace with your API endpoint
            console.log(res);
            if (res.status == 500) {
                router.push('/admin/adlogin');
            }
            const newData = await res.json();
            setUsr(newData);
        }
        fetchuser();
    }, [router.query])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            id,
            title
        }
        if(!id || !title){
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
        await toast.promise( fetch('/api/deleteblog', {
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
                console.log('blog deleted successfully')
                setId('');
                setTitle('');
                toast.success('Blog deleted!!', {
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
                    router.push('/admin/manage-blogs')
                }, 4000)
            }
            if (res.status === 401) {
                toast.error('Invalid Blog id!!', {
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
                <div className="bg-white/10 rounded p-4 mt-10 mx-auto md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Remove Blog</h1>

                    <form action='' className="flex-row mx-auto w-full md:flex-col md:w-fit md:m-auto">
                        <input type="text" placeholder="Blog id" className="w-fit mx-auto p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setId(e.target.value) }} required />
                        <input type="text" placeholder="Title" className="w-fit mx-auto p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setTitle(e.target.value) }} required />

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Delete</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default deleteblog;

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/dist/client/router";

const index = () => {
    const router = useRouter();
    const [scount, setScount] = useState([]);
    const [bcount, setBcount] = useState([]);
    const [ucount, setUcount] = useState([]);
    const [usr, setUsr] = useState([]);

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkuser'); // Replace with your API endpoint
            console.log(res);
            if (res.status == 500) {
                router.push('/admin/adlogin');
            }
            const newData = await res.json();
            setUsr(newData);
        }
        fetchuser();
    }, [router.query]);

    useEffect(() => {
        async function fetchData() {
            const resStudents = await fetch('/api/studentscount');
            const resBlogs = await fetch('/api/blogcount');
            const resUsers = await fetch('/api/usercount');

            const totStudents = await resStudents.json();
            const totBlogs = await resBlogs.json();
            const totUsers = await resUsers.json();
            setScount(totStudents.totalStudents)
            setBcount(totBlogs.totalBlogs)
            setUcount(totUsers.totalUsers)
        }
        fetchData();
    }, []);
    return (
        <>
            <div className='text-white'>
                <h1 className='text-center text-2xl font-bold text-black tracking-wide my-10'>Admin Panel</h1>
                <div className=''>

                    {/* <h1 className='text-xl font-medium text-black'>Dashboard</h1> */}

                    <div className='bg-admin-bg p-5 md:flex md:justify-center'>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-students') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Students</h1>
                            <h1 className='text-center mt-2'>{scount ? scount : "Loading..."}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/donars') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Donars</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-users') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Users</h1>
                            <h1 className='text-center mt-2'>{ucount ? ucount : "Loading..."}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-blogs') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Blogs</h1>
                            <h1 className='text-center mt-2'>{bcount ? bcount : "Loading..."}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-gallery') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Gallery</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/feedbacks') }}>
                            <h1 className='text-center text-xl font-medium'>Feedbacks</h1>
                            <h1 className='text-center mt-2'>user's Feedbacks and queries</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default index

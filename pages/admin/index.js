import React, { useEffect, useState } from 'react'
import { useRouter } from "next/dist/client/router";
import Image from "next/image"
import otplg from "./otp.png"

const index = () => {
    const router = useRouter();
    const [scount, setScount] = useState([]);
    const [bcount, setBcount] = useState([]);
    const [ucount, setUcount] = useState([]);
    const [acount, setAcount] = useState([]);
    const [fcount, setFcount] = useState([]);
    const [gcount, setGcount] = useState([]);
    const [dcount, setDcount] = useState([]);
    const [hcount, setHcount] = useState([]);
    const [usr, setUsr] = useState([]);

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
    }, [router.query]);

    useEffect(() => {
        async function fetchData() {
            const resStudents = await fetch('/api/studentscount');
            const resBlogs = await fetch('/api/blogcount');
            const resUsers = await fetch('/api/usercount');
            const resAdopters = await fetch('/api/adoptercount');
            const resFeeds = await fetch('/api/feedcount');
            const resGallerys = await fetch('/api/gallerycount');
            const resDonors = await fetch('/api/donorcount');

            const totStudents = await resStudents.json();
            const totBlogs = await resBlogs.json();
            const totUsers = await resUsers.json();
            const totAdopters = await resAdopters.json();
            const totFeeds = await resFeeds.json();
            const totGallerys = await resGallerys.json();
            const totDonors = await resDonors.json();

            setScount(totStudents.totalStudents)
            setBcount(totBlogs.totalBlogs)
            setUcount(totUsers.totalUsers)
            setAcount(totAdopters.totalAdopts)
            setFcount(totFeeds.totalFeeds)
            setGcount(totGallerys.totalGallerys)
            setDcount(totDonors.totalDonors)
            const hft = localStorage.getItem('hft');
            setHcount(hft);
        }
        fetchData();
    }, []);
    return (
        <>
            <div className='text-white'>
                <h1 className='text-center text-2xl font-bold text-black tracking-wide my-10'>Admin Panel</h1>
                <div className=''>

                    {/* <h1 className='text-xl font-medium text-black'>Dashboard</h1> */}

                    <div className='bg-admin-bg p-5 md:h-fit md:flex md:flex-wrap md:justify-center'>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-students') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Students</h1>
                            <h1 className='text-center mt-2'>{scount ? scount : "No Students"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/donars') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Donars</h1>
                            <h1 className='text-center mt-2'>{dcount ? dcount : "No Donors"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/adoptionlist') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Adoptions</h1>
                            <h1 className='text-center mt-2'>{acount ? acount : "No Adopters"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-users') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Users</h1>
                            <h1 className='text-center mt-2'>{ucount ? ucount : "No Users"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/manage-blogs') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Blogs</h1>
                            <h1 className='text-center mt-2'>{bcount ? bcount : "No Blogs"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/gallery') }}>
                            <h1 className='text-center text-xl font-medium'>Manage Gallery</h1>
                            <h1 className='text-center mt-2'>{gcount ? gcount : "No Gallerys"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/faq') }}>
                            <h1 className='text-center text-xl font-medium'>FAQ</h1>
                            <h1 className='text-center mt-2'>{fcount ? fcount : "No Queries"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/hftdonations') }}>
                            <h1 className='text-center text-xl font-medium'>HFT Donations</h1>
                            <h1 className='text-center mt-2'>{hcount ? hcount : "0"}</h1>
                        </div>

                        <div className='transition duration-300 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={() => { router.push('/admin/mailtousers') }}>
                            <h1 className='text-center text-xl font-medium'>Send Message</h1>
                            <h1 className='text-center mt-2'></h1>
                        </div>

                    </div>
                    <div className="p-1 mt-20">
                        <Image src={otplg} width={0} height={0} alt='childrens' className='w-3/4 md:w-1/2 mx-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/dist/client/router";

const index = () => {
    const { push } = useRouter();
    const [scount, setScount] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch('/api/studentscount');
          const tot = await res.json();
          setScount(tot.totalStudents)
        }
        fetchData();
      }, []);
    return (
        <>
            <div className=' bg-slate-500'>
                <h1 className='text-center text-xl font-medium'>Admin Panel</h1>
                <div className=' bg-orange-200'>

                    <h1 className='text-xl font-medium'>Dashboard</h1>

                    <div className=' bg-lime-600 p-5 md:flex md:justify-center'>

                        <div className='transition duration-300 bg-blue-200 p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={()=>{push('/admin/manage-students')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Students</h1>
                            <h1 className='text-center mt-2'>{scount?scount:"Loading..."}</h1>
                        </div>

                        <div className='transition duration-300 bg-yellow-200 p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={()=>{push('/admin/donars')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Donars</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className='transition duration-300 bg-red-200 p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer' onClick={()=>{push('/admin/manage-users')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Users</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className='transition duration-300 bg-cyan-200 p-5 m-3 rounded ease-linear hover:scale-105 cursor-pointer'onClick={()=>{push('/admin/feedbacks')}}>
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

import React from 'react'
import { useRouter } from "next/dist/client/router";

const index = () => {
    const { push } = useRouter();
    return (
        <>
            <div className=' bg-slate-500'>
                <h1 className='text-center text-xl font-medium'>Admin Panel</h1>
                <div className=' bg-orange-200'>

                    <h1 className='text-xl font-medium'>Dashboard</h1>

                    <div className=' bg-lime-600 p-5 md:flex md:justify-center'>

                        <div className=' bg-blue-200 p-5 m-3 rounded' onClick={()=>{push('/admin/manage-students')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Students</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className=' bg-yellow-200 p-5 m-3 rounded' onClick={()=>{push('/admin/donars')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Donars</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className=' bg-red-200 p-5 m-3 rounded' onClick={()=>{push('/admin/manage-users')}}>
                            <h1 className='text-center text-xl font-medium'>Manage Users</h1>
                            <h1 className='text-center mt-2'>300</h1>
                        </div>

                        <div className=' bg-cyan-200 p-5 m-3 rounded'onClick={()=>{push('/admin/feedbacks')}}>
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

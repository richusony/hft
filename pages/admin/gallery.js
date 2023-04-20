import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faImages, faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const gallery = () => {
    const [data, setData] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/getgallery'); // Replace with your API endpoint
            const newData = await res.json();
            setData(newData);
        }
        fetchData();
    }, [router.query])
    return (
        <>
            <div className='text-center mb-20'>
                <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">GALLERY</h1>
            </div>

            <div className='w-full p-3'>
                <div className='mx-auto md:w-full flex justify-end space-x-2 mb-2 px-3'>
                    <button onClick={() => { router.push('/admin/addgallery') }} className='rounded my-2 px-8 py-1 font-semibold bg-green-400 hover:bg-green-500 duration-300' >Add</button>
                    <button onClick={() => { router.push('/admin/deletegallery') }} className='rounded my-2 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 duration-300' ><FaTrash /></button>
                </div>
                <div className='px-2 py-2 flex flex-wrap items-center mx-auto'>
                    {data.length >0 ? data.map((item, key) => (
                        <div key={key} className='transition duration-150 mx-auto my-2 w-72 ease-linear hover:scale-105 rounded-2xl'><img className='h-96 rounded-2xl w-full' src={item.img_url} /><h3 className='text-[#8c8c8e] text-sm'>{item.dateTime}</h3><span>gallery id : {item.gallery_id}</span></div>
                    )) : <div className='p-5 text-center w-full '>
                        <h1 className='text-center text-7xl'><FontAwesomeIcon icon={faImages} /></h1>
                        <h1 className='text-center text-2xl mt-5'>Oops!! No Gallerys</h1>
                    </div>}

                    {/* <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div>
                    <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div>
                    <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div>
                    <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div>
                    <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div>
                    <div className='mx-auto my-2 w-72 rounded-2xl'><img className='h-96 rounded-2xl w-full' src='https://i.pinimg.com/474x/ab/c5/27/abc527e193c93ef536ae675c174f012d.jpg' /><h3>April 2023 Thu at 02:10 AM</h3><span>gallery id :</span></div> */}
                </div>
            </div>
        </>
    )
}

export default gallery

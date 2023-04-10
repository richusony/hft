import React, { useEffect, useState } from 'react'
import Image from "next/image"
import family from "./family.jpg"
import { useRouter } from 'next/router';
const adoption = () => {
    const [head,setHead] = useState('translate-y-full')
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{

            setHead('translate-y-0');
        },[2000])
    },[])
    return (
        <>
            <div>
                <div className='w-full text-center bg-cover font-bold flex justify-center items-center bg-family md:bg-family2 shadow-2xl bg-fixed px-5 md:py-60 py-80 rounded-b-lg'>
                    <h1 className='transition duration-150 text-5xl text-white tracking-wide font-semibold ease-linear'><span className='text-[#ff6600]'>Every child </span>deserves home and<br/> love Period</h1>
                </div>
                {/* <div className='w-full text-center rounded-b-3xl flex justify-center items-center'>
                    <Image width={1080} height={1080} src={family} className='shadow-2xl md:rounded-b-3xl w-full h-2/3'></Image>

                    <h1 className='bg-gradient-to-r from-blue-500 to-transparent text-4xl text-white tracking-wide absolute font-medium'><span className='text-[#ff6600]'>Every child </span>deserves home and<br/> love Period</h1>
                </div> */}
                <div className='text-center mb-20'>
                    <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">ADOPTION</h1>
                </div>

                <div className='text-center bg-[#ff6600] w-full py-20'>
                    <h2 className='text-2xl font-semibold text-white italic'>"GIVE A HELPING HAND TO THOSE WHO NEED IT <br/> share your love with them!"</h2>
                </div>
            </div>
        </>
    )
}

export default adoption;


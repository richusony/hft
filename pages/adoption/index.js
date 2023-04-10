import React from 'react'
import Image from "next/image"
import family from "./family.jpg"
const adoption = () => {
    return (
        <>
            <div className='w-full  rounded-b-3xl flex justify-center '>
                <Image width={1080} height={1080} src={family} className='shadow-2xl md:rounded-b-3xl w-full md:w-3/4 h-40 md:h-4/6'/>
            </div>
            <div className='text-center mb-20'>
                <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">ADOPTION</h1>
            </div>
        </>
    )
}

export default adoption;


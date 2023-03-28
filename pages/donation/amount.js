import React from 'react'
import otplg from './otp.png'
import Image from 'next/image'
import { useRouter } from 'next/router';


const amount = () => {
    const { push } = useRouter();
    if(!localStorage.getItem('token')){
      push('/Login')
  }
  return (
    <>
      <div className="bg-[#151522] p-5 w-full">
                <form className="flex-row w-72 h-80 text-center mx-auto border px-3 mt-10">
                    <h2 className="text-xl w-fit text-center mx-auto font-medium text-white mt-6 mb-5">Enter the Donation Amount</h2>
                    <input type="tel" placeholder="amount" className="block w-fit mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required maxLength={6}/>
                    <button className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4">Pay</button>
                </form>
                <div className="p-1 mt-20">
                    <Image src={otplg} width={0} height={0} alt='childrens' className='w-3/4 md:w-1/2 mx-auto' />
                </div>
            </div>
    </>
  )
}

export default amount

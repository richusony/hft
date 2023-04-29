import React, { useEffect, useState } from 'react'

const success = () => {
  const [smily, setSmily] = useState("scale-75");

  setInterval(() => {
    smily == "scale-75" ? setSmily("scale-125") : setSmily("scale-75");

  }, [2000])
  return (
    <>
      <div className='transition duration-150 p-5 bg-[#151522] w-full h-screen flex justify-center items-center'>
        <div className='transition duration-150'>
        <div className='w-full'>
          <img className={`transition duration-300 w-52 mx-auto ease-linear ${smily}`} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FIbfNOqhHyH6mAPcmAt%2Fgiphy.gif&f=1&nofb=1&ipt=2c1a38a564100919a7cd51fe1b28cc09d56c14aef0a1be159cb04ca2ee068f28&ipo=images' alt='smily' />
        </div>
        <h1 className='text-center text-white semibold text-2xl'>Payment Successfull</h1>
        <h3 className='text-center text-white text-xl'>Payment ID : {localStorage.getItem("payment_id")}</h3>
        <h3 className='text-center text-white text-xl'>Payment Amount :<span className='font-semibold'>{localStorage.getItem("amount")}</span>.Rs</h3>
        </div>
      </div>
    </>
  )
}

export default success;

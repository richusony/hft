import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';



const id = () => {
 
  const router = useRouter();
  const { id } = router.query;
  const img = id;

  return (
    <>
      <div className="bg-[#151522] p-5 w-full">
        <div className="p-1 mt-20">
          <img src={img} alt='Gallerys' className='' />
        </div>
      </div>
    </>
  )
}

export default id;

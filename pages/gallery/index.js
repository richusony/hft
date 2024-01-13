import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [data, setData] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getgallery'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, [router.query]);

  const viewImage = (e,img_url) =>{
    router.push(img_url);
  }

  return (
    <>
      <div className='text-center mb-20'>
        <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">GALLERY</h1>
      </div>

      <div className='px-2 py-2 flex flex-wrap items-center mx-auto'>
      {data.length >0 ? data.map((item, key) => (
                        <div key={key} className='transition duration-150 mx-auto my-2 w-72 rounded-2xl ease-linear hover:cursor-pointer hover:scale-105' onClick={(e)=>viewImage(e,item.img_url)}><img className='h-96 rounded-2xl w-full object-cover' src={item.img_url} /><h3 className='text-[#8c8c8e] mt-2 text-center text-sm'>{item.dateTime}</h3></div>
                    )) : <div className='p-5 text-center w-full '>
                        <h1 className='text-center text-7xl'><FontAwesomeIcon icon={faImages} /></h1>
                        <h1 className='text-center text-2xl mt-5'>Oops!! No Gallerys</h1>
                    </div>}
      </div>
    </>
  )
}

export default Gallery;

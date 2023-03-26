import React, { useEffect, useState } from 'react'

function Blog() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch('/api/getblogs'); // Replace with your API endpoint
          const newData = await res.json();
          setData(newData);
        }
        fetchData();
      }, []);

    return (
        <div>
            <div className='text-center mb-20'>
                <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">BLOGS</h1>
            </div>

            <div className='md:flex md:flex-wrap px-3'>
                {data.map((item,key)=>( <div key={key} className='transition duration-300 rounded w-full md:w-96 mx-auto  bg-[#e2e0e0] p-2 mb-5 ease-in hover:scale-105'> <img src={item.img_url} width={0} height={0} alt='child' className='rounded w-full' /> <div className='w-full'><h2 className='text-xl text-center font-medium mt-3'>{item.title}</h2> <p className='text-sm text-start p-2'>{item.desc}</p></div></div>))}
            </div>

        </div>
    )
}

export default Blog;

import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';

const manageblogs = () => {
  const [data, setData] = useState([]);
  const [usr, setUsr] = useState([]);
  const router=useRouter();

  useEffect(() => {
    async function fetchuser() {
        const res = await fetch('/api/checkuser'); // Replace with your API endpoint
        console.log(res);
        if (res.status == 500) {
            router.push('/admin/adlogin');
        }
        const newData = await res.json();
        setUsr(newData);
    }
    fetchuser();
}, [router.query])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getblogs'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className='text-center mb-20'>
          <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">BLOGS</h1>
        </div>


        <div className='md:flex md:flex-wrap px-3'>
          <div className='mx-auto md:w-full flex justify-end space-x-2 mb-4'>
            <button onClick={() => { router.push('/admin/addblogs') }} className='rounded my-2 px-8 py-1 font-semibold bg-green-400 hover:bg-green-500 duration-300' >Add</button>
            <button onClick={() => { router.push('/admin/updateblog') }} className='rounded my-2 px-6 py-1 font-semibold bg-blue-400 hover:bg-blue-500 duration-300' >Update</button>
            <button onClick={() => { router.push('/admin/deleteblog') }} className='rounded my-2 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 duration-300' ><FaTrash /></button>
          </div>
          {data.map((item, key) => (<div key={key} className='transition duration-300 rounded w-full md:w-96 mx-auto  bg-[#e2e0e0] p-2 mb-5 ease-in hover:scale-105'> <img src={item.img_url} width={0} height={0} alt='child' className='rounded w-full' /> <div className='w-full'><h2 className='text-xl text-center font-medium mt-3'>{item.title}</h2> <p className='text-sm text-start p-2'>{item.desc} <br /><br /> <h2>blog_id : {item.blog_id}</h2></p></div></div>))}
        </div>

      </div>
    </>
  )
}

export default manageblogs

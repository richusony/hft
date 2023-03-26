import React, { useEffect, useState } from 'react'
import { useRouter } from "next/dist/client/router";
import { FaTrash } from 'react-icons/fa'

const manageUsers = () => {
  const [data, setData] = useState([]);
  const {push}=useRouter();
  let i = 0
  console.log(data)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getusers'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className=' md:w-auto p-3'>
        <div className='text-center mb-20'>
          <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">Users</h1>
        </div>

        <div className='w-full px-3 overflow-hidden md:overflow-none'>

          <div className='mx-auto md:w-full flex justify-end space-x-2 mb-2'>
            <button onClick={() => { push('/admin/deleteuser') }} className='rounded my-2 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 duration-300' ><FaTrash /></button>
          </div>
          <div className=' mx-auto overflow-scroll md:overflow-hidden'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500 text-md">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-center">SL No.</th>
                          <th scope="col" className="px-6 py-4 ">Name</th>
                          <th scope="col" className="px-6 py-4 text-center">Email</th>
                          <th scope="col" className="px-6 py-4 text-center">Password</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, key) => (
                          <tr key={key} className="border-b border-neutral-500 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{i = i + 1}</td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">{item.name}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.email}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.password}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default manageUsers

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/dist/client/router";
import { FaTrash } from 'react-icons/fa'

const adoptionList = () => {
  const [data, setData] = useState([]);
  const [usr, setUsr] = useState([]);
  const router=useRouter();
  let i = 0
  console.log(data)

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
      const res = await fetch('/api/getadopters'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className=' md:w-auto p-3'>
        <div className='text-center mb-20'>
          <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">Adopters</h1>
        </div>

        <div className='w-full px-3 overflow-hidden md:overflow-none'>

          <div className='mx-auto md:w-full flex justify-end space-x-2 mb-2'>
            <button onClick={() => { router.push('/admin/confirm-adoption') }} className='rounded my-2 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 duration-300' >Confirm</button>
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
                          <th scope="col" className="px-6 py-4 ">Place</th>
                          <th scope="col" className="px-6 py-4 text-center">Email</th>
                          <th scope="col" className="px-6 py-4 text-center">Child Gender</th>
                          <th scope="col" className="px-6 py-4 text-center">Child Age</th>
                          <th scope="col" className="px-6 py-4 text-center">No. Childrens</th>
                          <th scope="col" className="px-6 py-4 text-center">Phone</th>
                          <th scope="col" className="px-6 py-4 text-center">Date of Adoption</th>
                          <th scope="col" className="px-6 py-4 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, key) => (
                          <tr key={key} className="border-b border-neutral-500 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{i = i + 1}</td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">{item.name}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.place}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.email}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.gender}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.age}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.count}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.phone}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.date}</td>
                            <td className='p-5'>{item.status == "Pending"?<span className="whitespace-nowrap px-3 py-2 font-semibold text-center bg-red-500 rounded text-white">{item.status}</span>:<span className="whitespace-nowrap font-semibold rounded px-3 py-2 text-center text-white bg-green-500">{item.status}</span>}</td>
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

export default adoptionList;

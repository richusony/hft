import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const donars = () => {
  const [usr, setUsr] = useState([]);
  const [data, setData] = useState([]);
  const router = useRouter();

  let total = 0;
  let i = 0;

  useEffect(() => {
    async function fetchuser() {
      const res = await fetch('/api/checkadmin'); // Replace with your API endpoint
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
      const res = await fetch('/api/getdonars'); // Replace with your API endpoint
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);


  return (
    <div>
      <div className=' md:w-auto p-3'>
        <div className='text-center mb-20'>
          <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">Donors</h1>
        </div>

        <div className='w-full px-3 overflow-hidden md:overflow-none'>
        {
        data.map((items, key) => (
          <span className='text-white'>{total = total + Number(items.amount)}</span>
        ))

      }
          <div className=' mx-auto overflow-scroll md:overflow-hidden'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500 text-md">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-center">SNo.</th>
                          <th scope="col" className="px-6 py-4 ">Donars</th>
                          <th scope="col" className="px-6 py-4 text-center">Student Name</th>
                          <th scope="col" className="px-6 py-4 text-center">Payment ID</th>
                          <th scope="col" className="px-6 py-4 text-center">Donation</th>
                          <th scope="col" className="px-6 py-4 text-center">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, key) => (
                          <tr key={key} className="border-b border-neutral-500 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-center">{i = i + 1}</td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">{item.donar}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.student}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.payment_id}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">{item.amount}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-left">{item.dateTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className='px-2 mt-10'>
                      <span className="text-xl font-semibold">Total Donations :<span className='font-bold'> {total}.Rs</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default donars

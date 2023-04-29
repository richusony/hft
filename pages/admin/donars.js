import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const donars = () => {
  const [usr, setUsr] = useState([]);
  const [data, setData] = useState([]);
  const router=useRouter();
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
{/* 
          <div className='mx-auto md:w-full flex justify-end space-x-2 mb-2'>
            <button onClick={() => { router.push('/admin/addstudents') }} className='rounded my-2 px-8 py-1 font-semibold bg-green-400 hover:bg-green-500 duration-300' >Add</button>
            <button onClick={() => { router.push('/admin/updatestudent') }} className='rounded my-2 px-6 py-1 font-semibold bg-blue-400 hover:bg-blue-500 duration-300' >Update</button>
            <button onClick={() => { router.push('/admin/deletestudent') }} className='rounded my-2 px-2 py-1 font-semibold bg-red-400 hover:bg-red-500 duration-300' ><FaTrash /></button>
          </div> */}
          <div className=' mx-auto overflow-scroll md:overflow-hidden'>
            {/* <table className='w-full md:w-full border-2 border-solid text-start mx-auto'>
              <tr className='border-4 m-5'>
                <th>sl no</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>School</th>
                <th>Image Url</th>
              </tr>
              {data.map((item, key) => (
                <tr className='border-4 p-3'>
                  <td key={key}>{i = i + 1}</td>
                  <td>{item.stu_name}</td>
                  <td>{item.stu_email}</td>
                  <td>{item.stu_age}</td>
                  <td>{item.blood}</td>
                  <td>{item.school}</td>
                  <td>{item.img_url}</td>
                </tr>
              ))}

            </table> */}
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
                          <tr className="border-b border-neutral-500 ">
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

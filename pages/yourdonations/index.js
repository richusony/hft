import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHoldingChild } from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from 'react-icons/fa';

const yourdonations = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  let newData = {};
  let i = 0;
  const uname = localStorage.getItem("uname");
  useEffect(() => {
    async function fetchData() {
      const ress = await fetch('/api/checkuser'); // Replace with your API endpoint
      console.log(ress);
      if (ress.status != 200) {
        router.push('/Login');
      }
      const details = {
        uname
      }
      const res = await fetch('/api/yourdonations', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      }); // Replace with your API endpoint
      newData = await res.json();
      setData(newData);
      console.log(data)
    }
    fetchData();
  }, []);
  return (
    <>
      <div className='p-5'>

        <div className='mt-10 text-center p-5'><FontAwesomeIcon className='text-8xl' icon={faHandsHoldingChild} /></div>
        <h1 className='mb-10 text-2xl text-center font-semibold'>Your Donations</h1>
    {data.length <= 0?<h1 className='text-center text-2xl'>NO Donations Yet !!</h1>:
          <div className=' md:w-auto p-3'>

            <div className='w-full px-3 overflow-hidden md:overflow-none'>

              <div className=' mx-auto overflow-scroll md:overflow-hidden'>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500 text-md">
                            <tr>
                              <th scope="col" className="px-6 py-4 text-center">SNo.</th>
                              <th scope="col" className="px-6 py-4 ">Donar</th>
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
        }
      </div>
    </>
  )
}

export default yourdonations;
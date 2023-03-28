import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from 'cookies-next';
import { useRouter } from "next/dist/client/router";

const Donation = ({ keys }) => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [usr, setUsr] = useState([]);

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkuser'); // Replace with your API endpoint
            console.log(res);
            if (res.status == 500) {
                router.push('/Login');
            }
            const newData = await res.json();
            setUsr(newData);
        }
        fetchuser();
    }, [router.query])

    let i = 0
    console.log(data)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/getstudent'); // Replace with your API endpoint
            const newData = await res.json();
            setData(newData);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className='text-center mb-20'>
                <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">DONATIONS</h1>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <div className='w-full md:flex md:flex-wrap p-3'>
                {data.map((item, key) => (<div key={key} className='mx-auto mb-5 w-72 bg-[#d2d0d2] rounded-[14px] p-2'>
                    <div className='w-full'>
                        {item.img_url ? <img src={item.img_url} width={1080} height={1080} className='rounded w-72 h-80' alt='child-profile' /> : <img src={'https://cdn.onlinewebfonts.com/svg/img_218090.png'} className='rounded mx-auto border p-2 w-30 h-56' alt='child-profile' />}
                    </div>
                    <div className='p-2 rounded-[4px]'>
                        <h2 className='font-medium text-center text-2xl'>{item.stu_name ? item.stu_name : "John Wick"}</h2>
                        <h3 className='text-xl'>Email: {item.stu_email}</h3>
                        <h3 className='text-xl'>Age: {item.stu_age}</h3>
                        <h3 className='text-xl'>Blood: {item.blood}</h3>
                        <h3 className='text-xl'>School: {item.school}</h3>
                        <div className='text-center flex justify-center align-middle py-3'><button onClick={() => { push('/donation/amount') }} className='transition duration-300 px-5 border-2 border-white py-3 font-medium ease-linear hover:bg-[#ff6600] hover:text-white hover:border-2 hover:border-white'>DONATE</button></div>
                    </div>
                </div>))}
            </div>
        </>
    )

}
export default Donation;
// export const getServerSideProps = withApiAuthRequired();

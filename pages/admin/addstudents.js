import { useRouter } from 'next/router';
import { useS3Upload } from "next-s3-upload";
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const addStudents = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [blood, setBlood] = useState();
    const [school, setSchool] = useState();
    const [donation, setDonation] = useState();
    const [status, setStatus] = useState("Pending");
    const [img, setImg] = useState();
    const [usr, setUsr] = useState([]);
    const router = useRouter();

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
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
    let handleFileChange = async file => {
        let { url } = await uploadToS3(file);
        setImg(url);
        console.log(url);
      };
      console.log(img);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            age,
            blood,
            school,
            donation,
            img,
            status
        }
        await toast.promise( fetch('/api/addstudents', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        ).then((res) => {
            console.log('Response received')
            if(res.status == 401){
                toast.error('Student already exists!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            if (res.status === 200) {
                console.log('Response succeeded!')
                setName('');
                setEmail('');
                setAge('');
                setBlood('');
                setSchool('');
                setDonation('');
                setImg('');
                toast.success('Account Created!!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setTimeout(() => {
                router.push('/admin/manage-students');
            }, 4000)
            }
        }),
        {
            pending: 'Checking...',
            // success: 'Successfully Logged in 👌',
            // error: 'Login Failed 🤯'
        }
    );
    }
    return (
        <>
            <div className="bg-[#151522] py-10 px-5">
            <ToastContainer
                        position="bottom-left"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme=""
                    />
                <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Student Details</h1>

                    <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                        <input type="text" placeholder="Student Name" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setName(e.target.value) }} required />
                        <input type="text" placeholder="Student Email" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type="tel" placeholder="Age" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setAge(e.target.value) }} required />
                        <input type="text" placeholder="Blood Group" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setBlood(e.target.value) }} required />
                        <input type="text" placeholder="School" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setSchool(e.target.value) }} required />
                        <input type="text" placeholder="Donation Amount" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setDonation(e.target.value) }} required />
                        <input type="text" placeholder="Image" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setImg(e.target.value) }} required />
                        

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Add</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}


export default addStudents;

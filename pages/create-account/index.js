import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'


const create_account = () => {
    if (typeof window !== "undefined") {
        // let val = (Math.floor(1000 + Math.random() * 9000));
        const router = useRouter();
        const [pas, setPas] = useState('password')
        const [show, setShow] = useState('show')
        const showp = () => {
            setPas('text')
            if (pas == 'text') {
                setPas('password')
            }

            setShow('hide');
            if (show == 'hide') {
                setShow('show');
            }
        }
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = async (e) => {
            e.preventDefault()
            if(!email || !name || !password ){
                toast.warning('Fill all the details!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            console.log('Sending')
            let data = {
                name,
                email,
                password
            }
            await toast.promise(
                fetch('/api/createaccount', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
                ).then((res) => {
                    console.log('Response received')
                    if (res.status === 200) {
                        console.log('Response succeeded!')
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
                        setName('')
                        setEmail('')
                        setPassword('')
                        setTimeout(() => {
                            router.push('/Login')
                        }, 4000)
                    }
                    if (res.status === 401) {
                        toast.error('User already exists!', {
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
                        <h1 className="text-white text-3xl text-center py-3 mb-5">Create Account</h1>
                        <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                            <input type="text" placeholder="Enter Your Name" value={name} className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" id='name' required maxLength={20} minLength={5} title='Name must be alphabets (a to z or A to Z).' onChange={(e) => { setName(e.target.value) }} />
                            <input type="gmail" placeholder="Enter Gmail" value={email} className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" id='gmail' required onChange={(e) => { setEmail(e.target.value) }} />
                            <input type={pas} placeholder="Enter password" value={password} className="w-full p-3 placeholder:p-3 rounded h-10 mb-1 bg-inherit border md:w-96 block text-white" id='password' required onChange={(e) => { setPassword(e.target.value) }} />
                            <div className='flex justify-between'>
                                <h3 className="text-white text-sm mt- transition duration-150 ease-linear hover:text-[#abaaaa] cursor-pointer" onClick={showp}>{show} password</h3>
                            </div>
                            <div className="w-full text-center">
                                <button type='submit' className="border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} ><Link href=''>create</Link></button>
                            </div>
                        </form>
                        <h2 className="text-white text-center my-5">or continue with</h2>
                        <div className="text-white border mx-auto w-fit text-xl text-center rounded p-2 mb-3 md:w-40 md:m-auto">
                            <h2 className='text-center mx-auto'>Google Login</h2>
                        </div>

                        <h2 className="text-white text-center text-sm">Already a memeber? <Link href='/Login' className='hover:underline'>Login</Link></h2>
                    </div>
                </div>
            </>
        )
    }
}

export default create_account;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    if (typeof window !== "undefined") {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const { push } = useRouter();
        const [pas, setPas] = useState('password')
        const [show, setShow] = useState('show')

        const mail = email
        const pass = password

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
        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log('Sending')
            let data = {
                email,
                password
            }
            console.log(data)
            if (mail == "" && pass == "") {
                toast.warning('Fill all the Details!!', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            else {
                await toast.promise(
                    fetch('/api/login', {
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
                            toast.success('Login Successfull!!', {
                                position: "bottom-left",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            })
                            console.log(res.json());
                            setTimeout(() => {
                                push('/')
                            }, 4000)
                            setEmail('')
                            setPassword('')


                        }
                        if (res.status === 401) {
                            toast.error('User does not exists!', {
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
                        if (res.status === 402) {
                            toast.error('Invalid Credentials!!', {
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
        }
        return (
            <>
                <div className="w-full bg-[#151522] py-10 px-5">
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
                        theme="dark"
                    />
                    <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:p-5">
                        <h1 className="text-white text-3xl text-center py-3">Hello Again</h1>
                        <h2 className="text-white text-xl text-center mb-10">Welcome back you've been missed!</h2>
                        <form className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                            <input type="text" placeholder="Enter gmail" className="w-full p-3 rounded h-10 mb-3 bg-inherit border text-white md:w-72 block" required onChange={(e) => { setEmail(e.target.value) }} />
                            <input type={pas} placeholder="Enter password" className="w-full p-3 rounded h-10 mb-1 bg-inherit border text-white md:w-72 block" required onChange={(e) => { setPassword(e.target.value) }} />
                            <div className='flex justify-between'>
                                <h3 className="transition duration-150 text-white text-sm mt-1 ease-linear hover:text-[#abaaaa] cursor-pointer" onClick={showp}>{show} password</h3>
                                <h3 className="transition duration-150 text-white text-sm mt-1 ease-linear cursor-pointer hover:text-[#abaaaa]">recovery password</h3>
                            </div>
                            <div className="w-full text-center">
                                <button className="border p-2 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >login</button>
                            </div>
                        </form>
                        <h2 className="text-white text-center my-5">or continue with</h2>
                        <div className="text-white border mx-auto w-fit text-xl text-center rounded p-2 mb-3 md:w-40 md:m-auto">
                            <h2 className='text-center mx-auto'>Google Login</h2>
                        </div>
                        <h2 className="text-white text-center text-sm mt-3">Not a memeber? <Link href='/create-account' className='hover:underline'>Register now</Link></h2>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;
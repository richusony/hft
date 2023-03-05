import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faUser,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    if (typeof window !== "undefined") {
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
        return (
            <>
                <div className="w-full bg-[#151522] py-10 px-5">
                    <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:p-5">
                        <h1 className="text-white text-3xl text-center py-3">Hello Again</h1>
                        <h2 className="text-white text-xl text-center mb-10">Welcome back you've been missed!</h2>
                        <form className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                            <input type="text" placeholder="Enter gmail" className="w-full p-3 rounded h-10 mb-3 bg-inherit border text-white md:w-72 block" required />
                            <input type={pas} placeholder="Enter password" className="w-full p-3 rounded h-10 mb-1 bg-inherit border text-white md:w-72 block" required/>
                        <div className='flex justify-between'>
                            <h3 className="transition duration-150 text-white text-sm mt-1 ease-linear hover:text-[#abaaaa] cursor-pointer" onClick={showp}>{show} password</h3>
                            <h3 className="transition duration-150 text-white text-sm mt-1 ease-linear cursor-pointer hover:text-[#abaaaa]">recovery password</h3>
                        </div>
                        <div className="w-full text-center">
                            <button className="border p-2 text-2xl text-white rounded w-36 my-4" >login</button>
                        </div>
                        </form>
                        <h2 className="text-white text-center my-5">or continue with</h2>
                        <div className="text-white border text-xl text-center rounded p-2 mb-3 md:w-40 md:m-auto">
                            Google Login
                        </div>
                        <h2 className="text-white text-center text-sm mt-3">Not a memeber? <Link href='/create-account' className='hover:underline'>Register now</Link></h2>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;
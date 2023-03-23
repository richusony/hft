import Image from "next/image";
import otplg from './otp.png'
import { useState } from "react";


const otp = () => {

    const [pin, setPin] = useState('')
    const otpVerify = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            pin
        }

        fetch('/otp', ((res) => {
            console.log('Response received')
            console.log(res);
            // if (res.status === 200) {
            //     console.log('Response succeeded!')
            //     setPin('');
            // }
        }));
    }
    return (
        <>
            <div className="bg-[#151522] p-5 w-full">
                <form className="flex-row w-full text-center border p-2 mt-10">
                    <h2 className="text-sm text-center text-white mb-5">OTP has been sent to your email</h2>
                    <input type="tel" placeholder="Enter OTP" className="block mx-auto placeholder:p-3 rounded h-10 mb-3 bg-inherit border text-white" required maxLength={4} onChange={(e) => { setPin(e.target.value) }} />
                    <button className="block mx-auto border p-2 text-2xl text-white rounded w-36 my-4" onClick={(e) => { otpVerify(e) }}>verify</button>
                </form>
                <div className="p-1 my-10">
                    <Image src={otplg} width={0} height={0} alt='childrens' />
                </div>
            </div>
        </>
    )
}

export default otp;

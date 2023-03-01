import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="bg-black p-3 flex-row md:flex md:justify-between md:p-10">
                <div className="">
                    <h1 className="text-white text-2xl font-medium md:text-5xl md:mb-10">Contact Us</h1>
                    <h3 className="text-white md:text-xl"><FontAwesomeIcon icon={faPhoneSquare} className='text-slate-200' /> +91 9892422452</h3>
                    <h3 className="text-white mt-2 md:text-xl"><FontAwesomeIcon icon={faUser} className='text-slate-200' /> sample@gmail.com</h3>
                    <h2 className='my-5 md:my-10'>
                        <FontAwesomeIcon icon={faFacebook} className='text-slate-200 mx-2 text-xl transition duration-150 hover:-translate-y-3 ease-linear hover:text-blue-500 md:text-3xl' />
                        <FontAwesomeIcon icon={faInstagram} className='text-slate-200 mx-2 text-xl transition duration-150 hover:-translate-y-3 ease-linear hover:text-red-500 md:text-3xl' />
                        <FontAwesomeIcon icon={faTwitter} className='text-slate-200 mx-2 text-xl transition duration-150 hover:-translate-y-3 ease-linear hover:text-blue-500 md:text-3xl' />
                        <FontAwesomeIcon icon={faYoutube} className='text-slate-200 mx-2 text-xl transition duration-150 hover:-translate-y-3 ease-linear hover:text-red-500 md:text-3xl' />
                    </h2>
                    <button className='text-white p-2 border rounded hover:bg-white hover:text-black font-serif md:block'>Submit</button>
                </div>


                <div className="mt-5 md:mt-0 md:w-3/5">
                    <h1 className="text-white text-2xl font-medium mb-3 md:text-5xl md:mb-10">FAQ</h1>
                    <div className='flex-row w-full p-2'>
                        <input type="text" placeholder="Your Name" className="bg-slate-800 h-10 w-full mb-4 text-slate-200 p2 rounded md:block md:w-full md:h-12 placeholder:pl-3" />
                        <input type="text" placeholder="Your Email Address" className="bg-slate-800 h-10 w-full mb-4 text-slate-200 p2 rounded md:block md:w-full md:h-12 placeholder:pl-3" />
                        <textarea  placeholder="Your Message" className="bg-slate-800 w-full h-36 mb-4 text-slate-200 p2 rounded md:block md:w-full placeholder:pl-3"></textarea>
                        <button className='text-white p-2 border rounded mb-7 hover:bg-white hover:text-black font-serif md:block'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
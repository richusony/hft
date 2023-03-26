import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
    const [hide, setHide] = useState('hidden')
    const hideLout = () => {
        setHide('block');
        if (hide == 'block')
            setHide('hidden');
    }
    const { push } = useRouter();
    const { isLoading, user, error, } = useUser();

    // if (isLoading) return (
    //     <h1>Loading...</h1>
    // )
    console.log(user)
    const handleLogin = () => push('/login')
    const handleLogout = () => push('/logout');
    if (typeof window !== "undefined") {
        const [menus, setMenus] = useState(faBars)
        const [cname, setCname] = useState('hidden')
        // const [cname, setCname] = useState('opacity-0')

        const openMenu = (event) => {
            console.log(event)
            setMenus(faClose);
            setCname('block')
            if (menus === faClose) {
                setMenus(faBars)
                // setCname('hidden')
                setCname('hidden')
            }
        }

        const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

        function scrollToFoot() {
            if (!isBrowser()) return;
            window.scrollTo({ top: 3000, behavior: 'smooth', });
        }
        return (
            <>
                <div className="flex justify-between  p-3 text-center">
                    <div>
                        <h2 className="transition duration-150 font-black text-2xl ease-linear hover:italic"><Link href='/'>HFT</Link></h2>
                    </div>

                    <FontAwesomeIcon icon={menus} className='transition duration-300 absolute right-4 text-2xl ease-linear md:static md:hidden md:invisible' onClick={openMenu} />

                    <ul className={`transition duration-[1000ms] rounded p-3 md:p-0 md:bg-inherit ease-in bg-[#efeded] absolute z-10 md:static ${cname} md:opacity-100 md:translate-x-0 top-14 right-0 md:flex justify-between`}>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/about" className="transition duration-300 ease-linear hover:font-medium hover:italic">About</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/blog" className="transition duration-300 ease-linear hover:font-medium hover:italic">Blog</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/gallery" className="transition duration-300 ease-linear hover:font-medium hover:italic">Gallery</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/donation" className="transition duration-300 ease-linear hover:font-medium hover:italic">Donation</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none cursor-pointer select-none ease-linear hover:font-medium hover:italic" onClick={scrollToFoot}>Contact</li>
                        <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none cursor-pointer select-none ease-linear hover:font-medium hover:italic" onClick={scrollToFoot}>FAQ</li>
                        <h3 id='new' className="transition duration-150 text-xl p-3 md:p-0 md:mx-auto w-[100px] md:border-none select-none md:rounded md:bg-[#151522] md:text-white cursor-pointer ease-in hover:scale-95" onClick={handleLogin}>Login</h3>
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    if (typeof window !== "undefined") {
        const [menus, setMenus] = useState(faBars)
        const [cname, setCname] = useState('hidden')
        const openMenu = (event) => {
            console.log(event)
            setMenus(faClose);
            setCname('')
            if (menus === faClose) {
                setMenus(faBars)
                setCname('hidden')
            }
        }

        const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

        function scrollToFoot() {
            if (!isBrowser()) return;
            window.scrollTo({ top: 3000, behavior: 'smooth' });
        }
        return (
            <>
                <div className="flex justify-between h-14 p-3 text-center">
                    <div>
                        <h2 className="font-black text-2xl"><Link href='/'>HFT</Link></h2>
                    </div>
                    <FontAwesomeIcon icon={menus} className='absolute right-4 text-2xl transition duration-300 ease-linear md:static md:hidden md:invisible' onClick={openMenu} />
    
                        <ul className={`p-3 md:p-0 md:bg-inherit bg-slate-600 absolute z-10 md:static ${cname} top-14 right-0 md:flex justify-between`}>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none select-none"><Link href="/about">About</Link></li>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none select-none"><Link href="/blog">Blog</Link></li>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none select-none"><Link href="/gallery">Gallery</Link></li>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none cursor-pointer select-none" onClick={scrollToFoot}>Contact</li>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none cursor-pointer select-none" onClick={scrollToFoot}>FAQ</li>
                            <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b md:border-none select-none md:rounded md:bg-[#151522] md:text-white"><Link href="/Login">Login</Link></li>
                        </ul>

                    
                </div>
            </>
        )

    }
}

export default Navbar;
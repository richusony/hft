import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "cookies-next"
import { useRouter } from "next/dist/client/router";


const Navbar = ({ user, logout, keys }) => {
    const [hide, setHide] = useState('hidden');
    const [dropdown, setDropdown] = useState(false);
    const [usr, setUsr] = useState([]);
    const token = user.value

    const hideLout = () => {
        setHide('block');
        if (hide == 'block')
            setHide('hidden');
    }
    const router = useRouter();

    // const handleLogin = () => router.push('/Login');
    // const handleLogout = () => router.push('/logout');
    if (typeof window !== "undefined") {
        const [menus, setMenus] = useState(faBars)
        const [cname, setCname] = useState('hidden')
        // const [cname, setCname] = useState('opacity-0')
        let response;
        const data = {
            token
        }

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
        useEffect(() => {
            user
            async function fetchuser() {
                const res = await fetch('/api/checkadmin'); // Replace with your API endpoint
                const newData = await res.json();
                setUsr(newData);
                console.log(usr);
            }
            fetchuser();
        }, [router.query])
        const logicon = usr.success == "success"
        const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
        function scrollToFoot() {
            if (!isBrowser()) return;
            window.scrollTo({ top: 3000, behavior: 'smooth', });
        }
        return (
            <>
                <div keys={keys} className="transition duration-[1000ms] flex justify-between ease-linear p-3 text-center">
                    <div>
                        <h2 className="transition duration-150 font-black text-2xl ease-linear hover:italic"><Link href='/admin'>HFT</Link></h2>
                    </div>

                    <FontAwesomeIcon icon={menus} className='transition duration-300 absolute right-4 text-2xl ease-linear md:static md:hidden md:invisible' onClick={openMenu} />

                    <ul className={`transition duration-[1000ms] rounded p-3 md:p-0 md:bg-inherit ease-in bg-[#efeded] absolute z-10 md:static ${cname} md:opacity-100 md:translate-x-0 top-14 right-0 md:flex justify-between`}>
                    <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/manage-blogs" className="transition duration-300 ease-linear hover:font-medium hover:italic">Blogs</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/manage-users" className="transition duration-300 ease-linear hover:font-medium hover:italic">Users</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/adoptionlist" className="transition duration-300 ease-linear hover:font-medium hover:italic">Adoptions</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/donars" className="transition duration-300 ease-linear hover:font-medium hover:italic">Donors</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/manage-students" className="transition duration-300 ease-linear hover:font-medium hover:italic">Students</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/admin/gallery" className="transition duration-300 ease-linear hover:font-medium hover:italic">Gallery</Link></li>
                        <li className="text-xl p-3 md:p-0 md:mx-2 w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href='/admin/faq' className="transition duration-300 ease-linear hover:font-medium hover:italic" >Feedback</Link></li>
                        <li className="transition duration-[1000ms] ease-linear">{logicon ? <div className="transition duration-[1000ms] my-auto ease-in rounded-[55%]"><FontAwesomeIcon onClick={() => { dropdown ? setDropdown(false) : setDropdown(true) }} className="transition duration-[1000ms] text-2xl mt-3 md:my-auto md:p-0 md:mx-3 border-b-2 border-black md:border-none cursor-pointer select-none ease-linear hover:font-medium hover:italic" icon={faUser} /></div> : <h3 id='new' className="transition duration-150 text-xl px-2 py-1 md:mx-3 w-[100px] md:border-none select-none md:rounded md:bg-[#151522] md:text-white cursor-pointer ease-in hover:scale-95"><Link href="/admin/adlogin">Login</Link></h3>}
                            {dropdown && logicon && <div className="transition duration-[1000ms] text-white cursor-pointer px-2 py-1 rounded bg-blue-500 h-fit w-fit mx-auto ease-in hover:bg-blue-800 translate-y-2" onClick={logout}>logout</div>}</li>
                        {/* <li className="text-xl p-3 md:p-0 md:mx-auto w-[100px] border-b-2 border-black md:border-none select-none ease-linear"><Link href="/Login" className="transition duration-300 ease-linear hover:font-medium hover:italic">Login</Link></li> */}
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar;

import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";


const mailtousers = () => {
    const [emails, setEmails] = useState([]);
    const [name, setName] = useState([]);
    const [msg, setMsg] = useState([]);
    const [data, setData] = useState([]);
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

        async function fetchData() {
            const res = await fetch('/api/getusers'); // Replace with your API endpoint
            const newData = await res.json();
            setData(newData);
        }
        fetchData();

    }, [router.query])


    const handleSubmit = async (e) => {
        e.preventDefault();

            let datas = {
                data,
                msg
            }
            fetch('/api/mailtousers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datas)
            }
            ).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('user deleted successfully')
                    setEmails('');
                    setName("");
                }
            }).then(() => {
                // router.push('/admin/manage-users');
            })
        
    }
    return (
        <>
            <div className="bg-[#151522] py-10 px-5">
                <div className="bg-white/10 rounded p-4 mt-10 mx-auto md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Send Mail to Users</h1>

                    <form action='' className="flex-row mx-auto w-full md:flex-col md:w-fit md:m-auto">
                        <textarea type="text" placeholder="Type Something..." cols={40} rows={10} className="w-full mx-auto p-3 placeholder:p-3 rounded mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setMsg(e.target.value) }} required />

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default mailtousers;

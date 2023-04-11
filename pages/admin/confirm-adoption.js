import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const confirmAdoptin = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [usr, setUsr] = useState('')

    const router = useRouter();

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch('/api/checkuser'); // Replace with your API endpoint
            console.log(res);
            if (res.status == 500) {
                router.push('/admin/adlogin');
            }
            const newData = await res.json();
            setUsr(newData);
        }
        fetchuser();
    }, [router.query])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name,
            email
        }
        fetch('/api/confirmadoption', {
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
                console.log('confirmed Adoption')
               setEmail('')
                alert(`${email} confirmed Adoption`)
                router.push('/admin/adoptionlist');
            }
            if (res.status != 200) {
                alert(`${email} confirmation failed!!`)
            }
        })
    }
    return (
        <>
            <div className="bg-[#151522] py-10 px-5">
                <div className="bg-white/10 rounded p-4 mt-10 mx-auto md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Confirm Adoption</h1>

                    <form action='' className="flex-row mx-auto w-full md:flex-col md:w-fit md:m-auto">
        
                        <input type="text" placeholder="Name" className="w-fit mx-auto p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setName(e.target.value) }} required />
                        <input type="email" placeholder="Email" className="w-fit mx-auto p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setEmail(e.target.value) }} required />

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >confirm</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default confirmAdoptin;

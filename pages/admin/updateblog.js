import React, { useState } from 'react'
import { useRouter } from 'next/router';
const updateblog = () => {
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [desc, setDesc] = useState();
    const { push } = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            id,
            title,
            image,
            desc
        }
        fetch('/api/updateblog', {
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
                console.log('Blog updated!!')
                setId('');
                setTitle('');
                setImage('');
                setDesc('');
                alert(`${title} updated !!`);
                push('/admin/manage-blogs');
            }
            if(res.status === 404){
                alert(`${title} doesn't exists!!`)
            }
        })
    }
    return (
        <>
            <div className="bg-[#151522] py-10 px-5">
                <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Update Blogs</h1>

                    <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                        <input type="text" placeholder="Blog id" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setId(e.target.value) }} required />
                        <input type="text" placeholder="Title" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setTitle(e.target.value) }} required />
                        <input type="text" placeholder="Image" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setImage(e.target.value) }} required />
                        <textarea placeholder="desc" className="border bg-transparent w-full h-36 mb-4 text-slate-200 p2 rounded md:block md:w-full placeholder:pl-3" onChange={(e) => { setDesc(e.target.value) }} required ></textarea>

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default updateblog;
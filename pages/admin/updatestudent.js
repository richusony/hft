import { useRouter } from 'next/router';
import React, { useState } from 'react'

const updatestudent = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [blood, setBlood] = useState();
    const [school, setSchool] = useState();
    const [img, setImg] = useState();
    const {push}=useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            age,
            blood,
            school,
            img
        }
        fetch('/api/updatestudent', {
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
                console.log('Student Details Updated')
                setName('');
                setEmail('');
                setAge('');
                setBlood('');
                setSchool('');
                setImg('');
                alert(`${name} detail have been updated`)
            }
        }).then(()=>{
            push('/admin/manage-students');
        })
    }
  return (
    <>
      <div className="bg-[#151522] py-10 px-5">
                <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Update Student Details</h1>
        
                    <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                        <input type="text" placeholder="Student Name" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setName(e.target.value) }} required />
                        <input type="text" placeholder="Student Email" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type="tel" placeholder="Age" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setAge(e.target.value) }} required />
                        <input type="text" placeholder="Blood Group" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setBlood(e.target.value) }} required />
                        <input type="text" placeholder="School" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setSchool(e.target.value) }} required />
                        <input type="text" placeholder="Image URL" className="w-full p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-96 block text-white" onChange={(e) => { setImg(e.target.value) }} required />

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Update</button>
                        </div>
                    </form>
                </div>

            </div>
    </>
  )
}

export default updatestudent

import React, { useState } from 'react'

const deletestudent = () => { 
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name,
            email
        }
        fetch('/api/deletestudent', {
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
                console.log('student deleted successfully')
                setEmail('');
                alert(`${name} deleted from the database`)
            }
        });
    }
  return (
    <>
      <div className="bg-[#151522] py-10 px-5">
                <div className="bg-white/10 rounded p-4 mt-10 md:w-fit md:m-auto md:py-5 md:px-10">
                    <h1 className="text-white text-3xl text-center py-3 mb-5">Remove Student</h1>
        
                    <form action='' className="flex-row w-full md:flex-col md:w-fit md:m-auto">
                    <input type="text" placeholder="Student Name" className="w-fit p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setName(e.target.value) }} required />
                        <input type="text" placeholder="Student Email" className="w-fit p-3 placeholder:p-3 rounded h-10 mb-3 bg-inherit border md:w-fit block text-white" onChange={(e) => { setEmail(e.target.value) }} required />

                        <div className="w-full text-center">
                            <button type='submit' className="button border p-1 text-2xl text-white rounded w-36 my-4" onClick={(e) => { handleSubmit(e) }} >Delete</button>
                        </div>
                    </form>
                </div>

            </div>
    </>
  )
}

export default deletestudent;

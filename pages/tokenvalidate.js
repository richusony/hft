import React, { useEffect } from 'react'

const tokenvalidate = ({ user, logout,response}) => {
    const token = user.value
    
    const data = {
        token
    }
    useEffect(() => {
        userValidateToken();
    }, [])
    const userValidateToken = async () => {

        let res = await fetch('/api/tokenvalidate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
         response = await res.json();

console.log(response.decoded.name);
        // console.log(response);
        return (
            <div className='bg-blue-200'>
                <p className='bg-red-200 h-40'>dsdkjfasdlkjfaf;lkadfkasdjf adsfkadsfadskfj
                    asdkfjadsklf
                    dfadsfas
                    asdfasdfa
                </p>
            </div>
        )
    }
}

export default tokenvalidate;

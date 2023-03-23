import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const emailVerified = () => {
  const {
    query: { updateSession },
    push,
  } = useRouter();
  const [refreshed, setRefreshed] = useState(false);
  useEffect(() => {
    if (updateSession === 'true') {
      axios.get('http://localhost:3000/api/refreshToken').then(data => {
        if (data) setRefreshed(true)
      })
    }
  }, [updateSession])
  return (<>
    <div className='h-screen'>
      <h1>Your Email is Verified</h1>
      {refreshed && <button className='bg-blue-500 text-white' onClick={() => push('http://localhost:3000/')}>Go to Home</button>}
    </div>
  </>
  )
}

export default emailVerified

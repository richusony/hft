import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const feedbacks = () => {
  const [usr, setUsr] = useState([]);
  const router=useRouter();

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
  }, [router.query])
  return (
    <div>
      feedbacks page
    </div>
  )
}

export default feedbacks

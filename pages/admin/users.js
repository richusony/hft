import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
const users = () => {
    var axios = require("axios").default;
    const { isLoading, user, error,  } = useUser();

var options = {
  method: 'GET',
  url: 'https://hft-auth.jp.auth0.com/api/v2/users',
  params: {q: `${user.email}`, search_engine: 'v3'},
  headers: {authorization: `Bearer ${process.env.AUTH0_MANAGEMENT_API}`}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

  return (
    <>
      <div>{user}</div>
    </>
  )
}

export default users

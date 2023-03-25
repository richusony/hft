import axios from "axios";
import { managementApiAccessToken } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
    try {
  const accessToken = process.env.AUTH0_MANAGEMENT_API;
  const url = "https://hft-auth.jp.auth0.com/api/v2/users";
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const { data } = await axios.get(url, { headers });
 console.log(data);
  res.status(200).json(data);
} catch (error) {
    console.error(error);
    res.status(error.response.status || 500).end(error.response.statusText || 'Internal server error');
  }
}

import axios from "axios";
import { managementApiAccessToken } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
  const accessToken = await managementApiAccessToken();
  const url = "https://hft-auth.jp.auth0.com/api/v2/users";
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const { data } = await axios.get(url, { headers });
  res.status(200).json(data);
}

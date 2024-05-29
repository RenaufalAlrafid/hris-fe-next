import { cookies } from "next/headers";
import axios from "axios";

export function getCookies() {
  const authCookie = cookies().get("token")?.value as string | undefined;
  return authCookie;
} 

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function get_user(){
  // make set time out first
  

  const token = getCookies() as string;
  
  const response = await axios.post(
    "http://127.0.0.1:8000/api/me",{},
    {
      headers: { Authorization: `Bearer ${token}` }
  }
  );

  await sleep(2000);
  // console.log(response.data.data);
  return response.data.data;
  
}
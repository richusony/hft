import { NextResponse} from 'next/server'
import { verify } from "jsonwebtoken"
import { getCookieParser } from 'next/dist/server/api-utils';

const secret = process.env.JWT_SECRET;

export default function middleware(req) {
  const cookieParser = getCookieParser(req)
  const cookies = cookieParser()
 const token = cookies.token
  const url = req.url;

  if(url.pathname.includes("/Login")){
  if(token){
    try{
      verify(token, secret);
      return NextResponse.redirect("/")
      console.log("token verified");
    }
    catch(e){
      return NextResponse.next();
    }
  }
}
  if (req.url.pathname.includes('/donation')) { // it affects only in donation page
    if (url.includes("/donation")) {
      if (token == undefined) {
        return NextResponse.redirect("/Login")
      }
    

      try {
        verify(token, secret);
        return NextResponse.next();
      }
      catch (e) {
        return NextResponse.redirect("/Login")
      }
    }
  }
  return NextResponse.next();
}

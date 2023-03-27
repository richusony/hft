import { NextResponse} from 'next/server'
import { verify } from "jsonwebtoken"
import { getCookieParser } from 'next/dist/server/api-utils';

const secret = 'jwtwebtoken'

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.token;

  const url = req.url;

  if(url.pathname.includes("/Login")){
  if(jwt){
    try{
      verify(jwt, secret);
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
      if (jwt == undefined) {
        return NextResponse.redirect("/Login")
      }
    

      try {
        verify(jwt, secret);
        return NextResponse.next();
      }
      catch (e) {
        return NextResponse.redirect("/Login")
      }
    }
  }
  return NextResponse.next();
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/userLayout'
// import layout from '../components/adminLayout'
import Header from '../components/adnav'
import Footer from '../components/adfoot'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect } from 'react';
import { setCookie } from 'cookies-next'
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
  const [showChild, setShowChild] = useState(false);
  const [user, setUser] = useState({ value: null });
  const [keys, setKeys] = useState(0)
  const [usr, setUsr] = useState('');
  // const [layout ,setLayout] = useState('userLayout')
  const router = useRouter();
  const { pathname, query } = useRouter();
    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
      setKeys(Math.random())
    }
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

  }, [router.query])

  const logout = () => {
    async function logoutuser() {
      const res = await fetch('/api/usrlogout'); // Replace with your API endpoint
      const newData = await res.json();
      setUsr(newData);
      if (res.status == 200) {
        setCookie("token","");
        setCookie("name","");
        console.log("user logged out")
        router.push('/');
      }
      else {
        console.log("couldn't logout!!")
      }
    }
    logoutuser();
    localStorage.removeItem('token');
    localStorage.removeItem('uname');
    setUser({ value: null });
    setKeys(Math.random())
  }
  
  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return;
  }
  else {
    const fullUrl = `${window.location.origin}${pathname}?${new URLSearchParams(query as Record<string, string>).toString()}`;
  console.log(fullUrl);

    if (fullUrl.includes('/admin') ) {
      return (
        <>
          <Header keys={keys} user={user} logout={logout} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            waitingTime={800}
            onLoaderFinished={() => setProgress(0)}
          />
          <Component {...pageProps} keys={keys} user={user} logout={logout} >
          </Component>
          <Footer />
        </>
      )
    }
    else {
      return (
        <>
          <Layout keys={keys} user={user} logout={logout}>
            <LoadingBar
              color='#f11946'
              progress={progress}
              waitingTime={800}
              onLoaderFinished={() => setProgress(0)}
            />
            <Component {...pageProps} keys={keys} user={user} logout={logout} >
            </Component>
          </Layout>

        </>
      )
    }
  }
}

export default MyApp;

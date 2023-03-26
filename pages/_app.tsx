import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect } from 'react';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [router.query])
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
    return (
      <>
        <Layout>
          <LoadingBar
            color='#f11946'
            progress={progress}
            waitingTime={800}
            onLoaderFinished={() => setProgress(0)}
          />
          <Component {...pageProps}>
          </Component>
        </Layout>

      </>
    )
  }
}

export default MyApp;

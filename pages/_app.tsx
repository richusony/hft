import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { useState, useEffect } from 'react';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
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
        <UserProvider>
          <Layout>
            <Component {...pageProps}>
            </Component>
          </Layout>
        </UserProvider>
      </>
    )
  }
}

export default MyApp;

import "@/styles/globals.css";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})


import CookieMenu from '@/components/cookie-menu/cookie-menu';
import CookieMenuMobile from '@/components/cookie-menu/cookie-menu-mobile';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <MediaQuery minWidth={800}>
          {
            (matches) => matches ? 
              <CookieMenu />
            :
              <CookieMenuMobile />
          }
        </MediaQuery>
      </>
    );
}

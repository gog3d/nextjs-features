import { FC, ReactNode } from 'react';

import ConsentPageMobile from "@/components/screens/consent-page-mobile";
import ConsentPage from "@/components/screens/consent-page";


import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

const  Consent = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <ConsentPage />
             :
            <ConsentPageMobile />
        }
      </MediaQuery>
    </>
  )
}

export default Consent;

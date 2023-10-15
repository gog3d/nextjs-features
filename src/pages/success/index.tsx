import { FC, ReactNode } from 'react';

import SuccessPageMobile from "@/components/screens/success-page-mobile";
import SuccessPage from "@/components/screens/success-page";


import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

const  Success = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <SuccessPage />
             :
            <SuccessPageMobile />
        }
      </MediaQuery>
    </>
  )
}

export default Success;

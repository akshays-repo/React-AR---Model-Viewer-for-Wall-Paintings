// import ThreeDLandingPage from '@/components/3DLandingPage'
import dynamic from "next/dynamic";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
const ThreeDLandingPage = dynamic(() => import('@/components/3DLandingPage'), { ssr: false });


const ThreeDView = () => {

  return (
    <div className="flex text-[#644e22] flex-col items-center w-full overflow-x-hidden ">
      <div className="bg-[#ECDBBA] gap-[43px] pb-10 flex flex-col items-center justify-center max-h-fit  w-full  bg-[url('/photos/bgwall.webp')] bg-cover">
        <Header />
        <ThreeDLandingPage />
      </div>
      <Footer />
    </div>
  )
}

export default ThreeDView
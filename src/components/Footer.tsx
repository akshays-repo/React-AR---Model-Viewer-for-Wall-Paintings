import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className=" bg-[#191919] w-full flex justify-center pb-[30px] flex-col items-center gap-[50px] ">
            <div className=" border-[5px] border-[#ECDBBA] w-full "></div>
            <div className="px-[5%] xl:px-0   flex-col flex gap-5 md:flex-row  md:gap-5  md:flex items-start justify-between max-w-[1180px] w-full">
                <div className="text-start -mt-[25px] max-w-[464px] w-full flex flex-col  gap-[11px] ">
                    <Link href={'/'}>
                        <img src='/arlogo.webp' width={'100px'} height={'100px'} style={{
                            
                        }} />
                    </Link>
                    <div className="text-base leading-5 tracking-[0.03em] font-normal font-montserrat ">
                        Elevate your surroundings with us: Where each creation is a work of art. Curate your perfect sanctuary today!
                    </div>
                </div>
                <div className=" items-start  flex flex-col gap-2 md:gap-[21px]">
                    <div className="font-Cormorant whitespace-nowrap  sm:text-2xl leading-[29px] tracking-[0.03em] font-bold">
                        Quick Links
                    </div>
                    <div className="text-start font-montserrat text-base leading-5 tracking-[0.03em] flex flex-col gap-2.5 font-medium">
                        <a href="#_"> About</a>
                        <a href="#_"> Blog</a>
                        <a href="#_"> Press</a>
                    </div>
                </div>
                <div className="items-start  flex flex-col gap-2 md:gap-[21px]">
                    <div className="font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-bold">
                        Resources
                    </div>
                    <div className="text-start font-montserrat text-base leading-5 tracking-[0.03em] flex flex-col gap-2.5 font-medium">
                        <a href="#_"> Help Center</a>
                        <a href="#_"> Community</a>
                        <a href="#_"> Partners</a>
                    </div>
                </div>
                <div className="items-start flex flex-col gap-2 md:gap-[21px]">
                    <div className="text-start font-Cormorant text-2xl leading-[29px] tracking-[0.03em] font-bold">
                        Subscribe
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
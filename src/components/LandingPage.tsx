/* eslint-disable @next/next/no-img-element */import React from "react";
import "@fontsource/cormorant";
import "@fontsource/montserrat";
import classNames from "classnames";
import { photos } from '../data/photos'
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";


const Button = ({
  size,
  className,
  color,
  font,
  label,
  endIcon,
  startIcon,
  endIconClassName,
  startIconClassName,
  ...props
}: any) => {
  return (
    <button
      className={classNames(
        className,
        "flex justify-center items-center",
        size ? size : "",
        color ? color : "bg-blue",
        font ? font : "font-[500] tracking-tight text-[#ECDBBA]"
      )}
      {...props}
    >
      {startIcon && (
        <div className={classNames(startIconClassName || "")}>{startIcon}</div>
      )}
      <div className="relative">
        <div className="flex justify-center items-center gap-3">
          <div className="label">{label}</div>
        </div>
      </div>
      {endIcon && (
        <div className={classNames(endIconClassName || "")}>{endIcon}</div>
      )}
    </button>
  );
};

const LandingPage = () => {
  return (
    <div className="flex text-[#644e22] flex-col items-center w-full overflow-x-hidden ">
      <div className="bg-[#ECDBBA] gap-[43px] pb-10 flex flex-col items-center justify-center max-h-fit  w-full">
        <Header/>
        <div className=" md:flex items-center justify-between max-w-[1180px] w-full">
          <div className="text-start flex flex-col gap-2.5 sm:gap-3 md:gap-5 px-[4%] xl:px-0 md:max-w-[430px] lg:max-w-[518px] w-full ">
            <div className="text-[#2D4263] font-Cormorant text-[25px] sm:text-[40px] md:text-[50px] lg:text-[75px] md:leading-[70px] lg:leading-[87px] font-medium tracking-[0.03em]">
              Discover{" "}
              <span className="text-[#C84B31] underline">
                Rare AR Collections
              </span>{" "}
              in the
              <span className="text-[#C84B31] underline">World</span>
            </div>
            <div className="text-[#2D4263] text-sm sm:text-xl md:text-sm font-montserrat">
              Craft your ideal space with us: Where every piece is a masterpiece. Design your dream home today!
            </div>
          </div>
          <div className="px-3">
            <img src={"/assets/nft/sofa_preview.png"} alt="bubble" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex flex-col  gap-[123px] justify-center items-center mb-5">
        <div className="px-[4%]">
          <div className="max-w-[1180px] flex flex-col gap-[50px]  lg:gap-[123px]">
            <div className="mt-[30px] md:mt-[93px] flex flex-col gap-[50px] max-w-[1180px] justify-center w-full">
              <div className=" flex justify-between items-center">
                <div className="font-Cormorant  text-[30px] md:text-5xl font-bold leading-[58px] tracking-[0.03em]">
                  Hot Drops
                </div>
                <Button
                  label="View More"
                  className="text-xs  font-semibold text-center px-[30px] md:max-w-[166px] md:w-full py-3 border-2 border-[#ECDBBA] rounded-[68px] hover:text-white duration-1000 hover:bg-[#2D4263] hover:border-none"
                />
              </div>
              <div>
                <div className=" items-center justify-center flex flex-wrap gap-[30px] md:gap-[50px] lg:gap-[83px] md:px-0 px-[3%] w-full ">
                  {photos.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className=" bg-[#fbf4ff]  hover:scale-105 duration-1000 cursor-pointer bg-slate  flex flex-col justify-center items-center md:max-w-[300px] lg:max-w-[338px] w-full max-h-fit border-4 border-[#ECDBBA] rounded-[28px]"
                      >
                        <div className=" w-full flex flex-col gap-4 ">
                          <Image
                            src={data.src}
                            width={'2667'}
                            height={'4000'}
                            alt="dropmainback"
                            className="rounded-3xl w-full h-full mix-blend-mode: multiply;"
                          />
                          <div className="w-full flex flex-col gap-4 px-[4%]  py-[4%] lg:py-[2%]">
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col gap-[3px] items-start justify-start">
                                <div className="font-Cormorant text-[28px]  font-bold leading-[34px]">
                                  {data.name}
                                </div>
                                <div className="font-montserrat text-sm font-normal leading-[17px]">
                                  {data.description}
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="font-montserrat text-base leading-5 tracking-[0.03em] flex flex-col gap-2.5 font-medium">
                                  <Link
                                    href={{
                                      pathname: '/3d_view',
                                      query: { name: data.name, poster: data.src , texture: data.src },
                                    }}
                                  >
                                    <Button
                                      label="View in your room"
                                      className="border whitespace-nowrap flex justify-center items-center gap-2.5 px-[24px] border-[#ECDBBA] max-w-[221px] py-[8px] rounded-[68px]"
                                      endIcon={
                                        <img src={"/assets/nft/rightarrow.svg"} alt="get nft" />
                                      }
                                      font="font-montserrat text-base leading-5 tracking-[0.03em] font-medium"
                                    />
                                  </Link>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default LandingPage;

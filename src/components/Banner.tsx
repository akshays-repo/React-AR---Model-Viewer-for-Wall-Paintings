import React from 'react'

const Banner = () => {
  return (
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
      <img src={"/photos/oil-painting.png"} alt="bubble" />
    </div>
  </div>
  )
}

export default Banner
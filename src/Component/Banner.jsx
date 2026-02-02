import React, { useRef, useState } from "react";
import Container from "./SharedComponent/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { slides } from "../lib/lib";
import BannerContent from "./SharedComponent/BannerContent";
import { leftArrowIcon, rightArrowIcon } from "../lib/iconProvider";

const Banner = () => {
  const slidesData = slides;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-20 bg-[#F2F6F7] grid content-center relative bannerBg">
      <Container>
        <Swiper
          onSwiper={(swiper) => {
            // Wait for next tick to ensure refs are attached
            setTimeout(() => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }, 0);
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-[480px]"
        >
          {slidesData.map((items) => (
            <SwiperSlide key={items.id} className="flex items-center">
              <BannerContent items={items} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation with icon */}
        <button
          ref={prevRef}
          className="group absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white p-3 shadow cursor-pointer hover:bg-[#ff5a3c] transition-all"
        >
          <span className="[&>svg]:stroke-[#FF5A3C] group-hover:[&>svg]:stroke-white transition-all">
            {leftArrowIcon("#FF5A3C", 24, 24)}
          </span>
        </button>
        <button
          ref={nextRef}
          className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-white p-3 shadow cursor-pointer hover:bg-[#ff5a3c] transition-all"
        >
          <span className="[&>svg]:stroke-[#FF5A3C] group-hover:[&>svg]:stroke-white transition-all">
            {rightArrowIcon("#FF5A3C", 24, 24)}
          </span>
        </button>
      </Container>
    </div>
  );
};

export default Banner;

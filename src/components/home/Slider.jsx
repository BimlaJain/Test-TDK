import React from 'react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/effect-fade';
import { sliderImages } from '../utils/Helper';

const Slider = () => {
    return (
        <div className="py-20 relative">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={1000} 
                effect="fade"
                breakpoints={{
                    320: { slidesPerView: 1, centeredSlides: false },
                }}
                modules={[Autoplay, Pagination, EffectFade]} 
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    type: 'bullets', 
                    el: '.swiper-pagination',
                }}               
                className="swiper-container"
            >
                {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="sm:max-w-[600px] mx-auto max-w-[300px]"
                            src={image}
                            alt={`slider-image-${index}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination absolute bottom-0 w-full flex justify-center py-4" />
        </div>
    );
};

export default Slider;

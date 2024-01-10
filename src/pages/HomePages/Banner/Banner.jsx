import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/banner/clouds.jpg';
import slide2 from '../../../assets/banner/lalakal.jpg';
import slide3 from '../../../assets/banner/tangurhawor.jpg';
import slide4 from '../../../assets/banner/tea.jpg';


const Banner = () => {
    return (
        <div>
            {/* <h2>Banner</h2> */}
            <Swiper
                slidesPerView={'auto'}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>{<img className='w-full h-[100vh]' src={slide2} alt="" />}</SwiperSlide>
                <SwiperSlide>{<img className='w-full h-[100vh]' src={slide1} alt="" />}</SwiperSlide>
                <SwiperSlide>{<img className='w-full h-[100vh]' src={slide3} alt="" />}</SwiperSlide>
                <SwiperSlide>{<img className='w-full h-[100vh]' src={slide4} alt="" />}</SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Banner;
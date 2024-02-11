import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import  './popularStyle.css';

import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';


const PopularDestination = () => {

    const axiosPublic = useAxiosPublic();

    const { data: packages = [] } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages')
            return res.data
        }
    })

    return (
        <div className='w-10/12 mx-auto my-10 '>
            <h2 className='text-4xl font-bold text-center my-4'>Popular Destinations</h2>
            <p className='w-1/2 mx-auto text-sm text-center'>Expand your travel horizons with new facets! Explore the country by choosing your 
                ideal travel destinations, Hills, Beach, Nature and more with InfiniteTour.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper swiperrr"
            >
                {
                    packages.map(pack=> <SwiperSlide key={pack._id} className='swiper-slider relative'>
                        <Link to={`/packagesDetails/${pack._id}`}><img className='swiper-slide image ' src={pack.gallery_img_2} /></Link>
                        <p className="legend absolute bottom-2 text-white font-semibold">{pack.trip_title}</p>
                    </SwiperSlide>)
                }
                
            </Swiper>
        </div>
    );
};

export default PopularDestination;
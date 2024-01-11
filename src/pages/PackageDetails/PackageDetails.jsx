// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import TourPlan from "./TourPlan";
import BookingForm from "./BookingForm";

const PackageDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { image, tour_type, trip_title, price, gallery_img_1, gallery_img_2, about_tour, tour_plan_1, tour_plan_2, tour_plan_3 } = useLoaderData();

    return (
        <div>
            <div className="">
                <Swiper
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>{<img className='w-full h-[90vh]' src={gallery_img_1} alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img className='w-full h-[90vh]' src={gallery_img_2} alt="" />}</SwiperSlide>
                    <SwiperSlide>{<img className='w-full h-[90vh]' src={image} alt="" />}</SwiperSlide>


                </Swiper>
            </div>
            <div className="w-10/12 mx-auto">
                <h2 className="text-4xl text-center my-10 font-bold">Overview the tour</h2>
                <p>{about_tour}</p>
            </div>

            <div className="my-10">
                <h2 className="text-4xl text-center my-10 font-bold">Tour Plan</h2>
                <TourPlan></TourPlan>
            </div>

            <div>
            <h2 className="text-4xl text-center my-10 font-bold">Tour Guide</h2>

            </div>
            <div>
            <h2 className="text-4xl text-center my-10 font-bold">Book Now</h2>
                <BookingForm></BookingForm>
            </div>


        </div>
    );
};

export default PackageDetails;
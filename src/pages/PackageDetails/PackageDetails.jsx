import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import TourPlan from "./TourPlan";
import BookingForm from "./BookingForm";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PackageDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { image, tour_type, trip_title, price, gallery_img_1, gallery_img_2, about_tour, tour_plan_1, tour_plan_2, tour_plan_3 } = useLoaderData();

    const { data: guides = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            return res.data;
        }
    })

    return (
        <div>
             <Helmet>
                <title>InfiniteTour | Package Details</title>
            </Helmet>
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
            {/* Over view */}
            <div className="w-10/12 mx-auto">
                <h2 className="text-4xl text-center my-10 font-bold">Overview the tour</h2>
                <p>{about_tour}</p>
            </div>
            {/* Tour Plan */}
            <div className="my-10">
                <h2 className="text-4xl text-center my-10 font-bold">Tour Plan</h2>
                <TourPlan></TourPlan>
            </div>
            {/* Tour guide */}
            <div className="my-20">
                <h2 className="text-4xl text-center my-10 font-bold">Tour Guide</h2>
                
                    <div className="flex flex-wrap gap-10  justify-center ">
                        {
                            guides.map(guide => <Link key={guide._id} 
                                to={`/guideProfileDeatils/${guide._id}`}>
                                <div className="flex flex-col items-center space-y-1">
                                <img className="w-32 h-32 rounded-full" src={guide.image} alt="" />
                                <h2>{guide.name}</h2>
                            </div></Link>)
                        }
                    </div>
            </div>
            <div>
                <h2 className="text-4xl text-center my-10 font-bold">Book Now</h2>
                <BookingForm></BookingForm>
            </div>


        </div>
    );
};

export default PackageDetails;
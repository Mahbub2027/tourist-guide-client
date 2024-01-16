import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";

const StoryDetails = () => {
    const { name, title, image, story, date } = useLoaderData();
    return (
        <div>
             <Helmet>
                <title>InfiniteTour | Story Details</title>
            </Helmet>
            <figure><img className="w-full h-[420px]" src={image} alt="" /></figure>
            <div className="w-10/12 mx-auto my-10 space-y-5">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-lg">{story}</p>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <i>Date: {date}</i>
                    <h2 className="font-bold italic">--{name}</h2>
                </div>
                <div className="my-10 flex justify-end items-center gap-5">
                    <p className="font-bold text-xl">Share with</p> 
                        <FacebookShareButton url={window?.location?.href}>
                         
                            <FacebookIcon size={40} round={true}></FacebookIcon>
                        </FacebookShareButton>
                </div>
            </div>

        </div>
    );
};

export default StoryDetails;
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";
import TravelGuide from "../TravelGuide/TravelGuide";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>InfiniteTour | Home</title>
            </Helmet>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;
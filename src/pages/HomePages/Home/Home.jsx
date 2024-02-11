import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";
import TravelGuide from "../TravelGuide/TravelGuide";
import PopularDestination from "../PopularDestination/PopularDestination";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>InfiniteTour | Home</title>
            </Helmet>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <PopularDestination></PopularDestination>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";
import TravelGuide from "../TravelGuide/TravelGuide";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;
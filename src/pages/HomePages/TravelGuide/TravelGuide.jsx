import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview/Overview';
// import OurPackages from './OurPackages/OurPackages';
import MeetTourGuide from './MeetTourGuide/MeetTourGuide';
import Packages from './OurPackages/Packages';


const TravelGuide = () => {
    return (
        <div className='my-14'>
            <Tabs className="md:text-center ">
                <TabList>
                    <div className='text-sm lg:text-2xl font-semibold md:space-x-10'>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Out Tour Guides</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <Overview></Overview>
                </TabPanel>
                <TabPanel>
                    <Packages></Packages>
                    {/* <OurPackages></OurPackages> */}
                </TabPanel>
                <TabPanel>
                    <MeetTourGuide></MeetTourGuide>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TravelGuide;
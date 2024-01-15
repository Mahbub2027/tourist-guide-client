import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePages/Home/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Blog from "../pages/BlogPages.jsx/Blog";
// import AllPackages from "../pages/AllPackages/AllPackages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import EachType from "../pages/HomePages/TourType/EachType";
import AllStories from "../pages/HomePages/TouristStory/AllStories";
import StoryDetails from "../pages/HomePages/TouristStory/StoryDetails";
import Dashboard from "../layout/Dashboard";
import TouristProfile from "../pages/Dashboard/Tourist/TouristProfile/TouristProfile";
import TouristBooking from "../pages/Dashboard/Tourist/TouristBooking/TouristBooking";
import TouristWishlist from "../pages/Dashboard/Tourist/TouristWishlist/TouristWishlist";
import PackagesItems from "../pages/AllPackages/PackgesItems";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AddPackage from "../pages/Dashboard/Admin/AddPackage/AddPackage";
import GuideProfile from "../pages/Dashboard/TourGuide/TourGuideProfile/GuideProfile";
import AssignTour from "../pages/Dashboard/TourGuide/AssignTour/AssignTour";
import GuideProfileDetails from "../pages/HomePages/TravelGuide/MeetTourGuide/GuideProfileDetails/GuideProfileDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allStories',
          element: <AllStories></AllStories>
        },
        {
          path: '/storiesDetails/:id',
          element: <StoryDetails></StoryDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/stories/${params.id}`)
        },
        {
          path: '/packageItems',
          element: <PackagesItems></PackagesItems>
        },
        // {
        //   path: '/allPackages',
        //   element: <AllPackages></AllPackages>
        // },
        {
          path: 'packagesDetails/:id',
          element: <PackageDetails></PackageDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`)
        },
        {
          path: 'eachType/:tour_type',
          element: <EachType></EachType>,
          loader: ({params})=> fetch(`http://localhost:5000/packages/tour_type/${params.tour_type}`)
        },
        {
          path: 'guideProfileDeatils/:id',
          element: <GuideProfileDetails></GuideProfileDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/tourGuides/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
      ]
    },
    
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        // admin 
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'addPackage',
          element: <AddPackage></AddPackage>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        // tourist
        {
          path: 'touristProfile',
          element: <TouristProfile></TouristProfile>
        },
        {
          path: 'touristBooking',
          element: <TouristBooking></TouristBooking>
        },
        {
          path: 'touristWishlist',
          element: <TouristWishlist></TouristWishlist>
        },
        // tour guide
        {
          path: 'tourGuideProfile',
          element: <GuideProfile></GuideProfile>
        },
        {
          path: 'assignTour',
          element: <AssignTour></AssignTour>
        }
      ]
    }
  ]);
  

export default router;
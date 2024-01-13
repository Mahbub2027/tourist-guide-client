import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePages/Home/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Blog from "../pages/BlogPages.jsx/Blog";
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import EachType from "../pages/HomePages/TourType/EachType";
import AllStories from "../pages/HomePages/TouristStory/AllStories";
import StoryDetails from "../pages/HomePages/TouristStory/StoryDetails";
import Dashboard from "../layout/Dashboard";
import TouristProfile from "../pages/Dashboard/Tourist/TouristProfile/TouristProfile";
import TouristBooking from "../pages/Dashboard/Tourist/TouristBooking/TouristBooking";
import TouristWishlist from "../pages/Dashboard/Tourist/TouristWishlist/TouristWishlist";

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
          path: '/allPackages',
          element: <AllPackages></AllPackages>
        },
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
      element: <Dashboard></Dashboard>,
      children: [
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
      ]
    }
  ]);
  

export default router;
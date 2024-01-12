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
  ]);
  

export default router;
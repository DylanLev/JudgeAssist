
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css'
import Footer from "../src/components/footer/Footer.jsx"
import Navbar from "../src/components/navbar/Navbar.jsx"
import Register from "../src/pages/register/Register.jsx"
import Login from "../src/pages/login/Login.jsx"
import myAccount from "../src/pages/myAccount/myAccount.jsx"
import Models from "../src/pages/models/Models.jsx"
import Home from './pages/home/Home.jsx';
import HomeConnected from "./pages/homeconnected/homeConnected.jsx";
import Draft from "./pages/draft/Draft.jsx";
import Preview from "./pages/preview/Preview.jsx";

function App() {

  const Layout = () => {

    return (
      <div className="app">
        <Navbar/>
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/connected/:username",
          element: <HomeConnected/>,
        },
        
        {
          path: "/myaccount",
          element: <myAccount/>,
        },
        {
          path: "/models",
          element: <Models/>,
        },
        {
          path: "/draft/:modelName",
          element: <Draft/>,
        },
       
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
    {
      path: "/preview",
      element: <Preview/>,
    },
  ]);

  return <RouterProvider router={router} />;

}

export default App

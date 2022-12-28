import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Write from "./pages/Write"
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
    ]
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },   
]);

function App() {
    return (
      <div className="app">
        <div className="container">        
          <RouterProvider router={router} />
        </div>
      </div>
    );
  }
  
  export default App;  
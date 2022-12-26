import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Single from "./pages/Single"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home page</div>,
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
]);

function App() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
  
  export default App;  
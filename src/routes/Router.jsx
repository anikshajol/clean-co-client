import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AdminLayout from "../components/layouts/AdminLayout";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        // path: "/home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "addService",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default routes;

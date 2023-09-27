import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Contribution from "../Pages/Contribution/Contribution";
import Donations from "../Pages/Donations/Donations";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/contributions/:id",
        element: <Contribution></Contribution>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);
export default myCreatedRoute;

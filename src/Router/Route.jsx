import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Contribution from "../Pages/Contribution/Contribution";

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
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
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

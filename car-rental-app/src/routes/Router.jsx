import { useRoutes } from "react-router";
import HomePage from "../stories/components/pages/HomePage";
import CarDetailPage from "../stories/components/pages/CarDetailPage";
import ReservationPage from "../stories/components/pages/ReservationPage";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/car/:id", element: <CarDetailPage /> },
    { path: "/reservation/:id", element: <ReservationPage /> },
  ]);
  return routes;
};

export default Router;

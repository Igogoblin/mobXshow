import { Route, Routes } from "react-router";
import AppPage from "../pages/apps/app-page";
import GitHabPages from "../pages/ghpages";
import Instruments from "../pages/instruments/instruments";
import MainPage from "../pages/main-page";
const AppRoutes = () => {
  const navigationRoutes = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/apps/:appID?",
      element: <AppPage />,
    },
    {
      path: "/instruments",
      element: <Instruments />,
    },
    {
      path: "/gh-pages",
      element: <GitHabPages />,
    },
    {
      path: "*",
      element: <MainPage />, // Redirect to main page for any unmatched routes
    },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
export default AppRoutes;

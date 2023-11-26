import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../components/layout/layout";

const Home = lazy(() => import("./home"));
const ButtonPage = lazy(() => import("./button-page"));
const InputPage = lazy(() => import("./input-page"));

function Routes() {
  const publicRoutes = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/button",
          element: (
            <Suspense fallback={null}>
              <ButtonPage />
            </Suspense>
          ),
        },
        {
          path: "/input",
          element: (
            <Suspense fallback={null}>
              <InputPage />
            </Suspense>
          ),
        },
      ],
    },
  ];

  return useRoutes([...publicRoutes]);
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default AppRoutes;

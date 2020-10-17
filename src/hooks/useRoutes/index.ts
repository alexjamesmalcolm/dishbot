import { lazy, LazyExoticComponent, useMemo } from "react";

const Home = lazy(() => import("pages/Home"));
const User = lazy(() => import("pages/User"));

const useRoutes = () =>
  useMemo<Route[]>(
    () => [
      { path: "/", name: "Home", Component: Home, needsAuth: false },
      { path: "/user", name: "Profile", Component: User, needsAuth: true },
    ],
    []
  );

interface Route {
  path: string;
  needsAuth: boolean;
  Component: LazyExoticComponent<() => JSX.Element>;
  name: string;
}

export default useRoutes;

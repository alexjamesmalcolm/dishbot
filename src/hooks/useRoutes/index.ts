import { lazy, LazyExoticComponent, useMemo } from "react";

const Home = lazy(() => import("pages/Home"));
const User = lazy(() => import("pages/User"));
const SignIntoGroupMe = lazy(() => import("pages/SignIntoGroupMe"));
const GroupMeIngress = lazy(() => import("pages/GroupMeIngress"));

const useRoutes = () =>
  useMemo<Route[]>(
    () => [
      { path: "/", name: "Home", Component: Home, needsAuth: false },
      { path: "/user", name: "Profile", Component: User, needsAuth: true },
      {
        path: "/group-me-sign-in",
        name: "Sign Into Group Me",
        Component: SignIntoGroupMe,
        needsAuth: false,
      },
      {
        path: "/group-me-ingress",
        name: "GroupMe Ingress",
        Component: GroupMeIngress,
        needsAuth: false,
      },
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

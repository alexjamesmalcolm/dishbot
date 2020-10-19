import { lazy, LazyExoticComponent, useMemo } from "react";

const LandingPage = lazy(() => import("pages/LandingPage"));
const FindHouse = lazy(() => import("pages/FindHouse"));
const HouseDetails = lazy(() => import("pages/HouseDetails"));
const SignIntoGroupMe = lazy(() => import("pages/SignIntoGroupMe"));
const GroupMeIngress = lazy(() => import("pages/GroupMeIngress"));

const useRoutes = () =>
  useMemo<Route[]>(
    () => [
      {
        path: "/",
        name: "Home",
        Component: LandingPage,
        needsAuth: true,
        isInNav: true,
      },
      {
        path: "/find-house",
        name: "Find House",
        Component: FindHouse,
        needsAuth: false,
        isInNav: true,
      },
      {
        path: "/house/:houseId",
        name: "House",
        Component: HouseDetails,
        needsAuth: false,
        isInNav: false,
      },
      {
        path: "/group-me-sign-in",
        name: "Sign Into Group Me",
        Component: SignIntoGroupMe,
        needsAuth: false,
        isInNav: false,
      },
      {
        path: "/group-me-ingress",
        name: "GroupMe Ingress",
        Component: GroupMeIngress,
        needsAuth: false,
        isInNav: false,
      },
    ],
    []
  );

interface Route {
  path: string;
  needsAuth: boolean;
  Component: LazyExoticComponent<() => JSX.Element>;
  name: string;
  isInNav: boolean;
}

export default useRoutes;

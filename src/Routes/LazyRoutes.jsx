import { lazy } from "react";

export const DashboardLayout = lazy(() => import("../Components/Layout/DashboardLayout.jsx"));
export const HomeLayout = lazy(() => import("../Components/HomeLayout/HomeLayout.jsx"));

export const Home = lazy(() => import("../Pages/Home/Home.jsx"));
export const Login = lazy(() => import("../Pages/Login/Login.jsx"));

export const Dashbaord = lazy(() => import("../Pages/Dashboard/Dashboard.jsx"));
export const MyDeals = lazy(() => import("../Pages/MyDeals/MyDeals.jsx"));
export const NewDeals = lazy(() => import("../Pages/NewDeals/NewDeals.jsx"));
export const Documents = lazy(() => import("../Pages/Documents/Documents.jsx"));



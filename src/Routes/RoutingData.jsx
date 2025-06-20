import VerifyDeal from "../Pages/Verify/VerifyDeal.jsx";
import {
  Dashbaord,
  Documents,
  Home,
  Login,
  MyDeals,
  NewDeals,
  Register,
} from "./LazyRoutes";
import { PublicRoutesPath, PrivateRoutesPath } from "./StaticPaths.jsx";

export const publicRoutesData = [
  {
    path: PublicRoutesPath.login,
    component: <Login />,
  },
];

export const privateRoutesData = [
  {
    path: PrivateRoutesPath.dashboard,
    component: <Dashbaord />,
  },
  {
    path: PrivateRoutesPath.myDeals,
    component: <MyDeals />,
  },
  {
    path: PrivateRoutesPath.newDeals,
    component: <NewDeals />,
  },
  {
    path: PrivateRoutesPath.documents,
    component: <Documents />,
  },
  {
    path: PrivateRoutesPath.verify,
    component: <VerifyDeal />,
  },
];

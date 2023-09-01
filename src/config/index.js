import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import CustomerPage from "../pages/dashboard/customer";
import OrderPage from "../pages/dashboard/order";


export const publicRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "dashboard/customer",
    component: CustomerPage,
  },
  {
    path: "dashboard/order",
    component: OrderPage,
  },
];
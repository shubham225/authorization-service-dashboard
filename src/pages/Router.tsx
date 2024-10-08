import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Home } from "./Home/Home";
import { PageNotFound } from "./NotFound/PageNotFound";
import { ProtectedRoute } from "./ProtectedRoute";
import { Authentication } from "./Application/Authentication";
import { Security } from "./Application/Security";
import { Alerts } from "./Application/Alerts";
import { JwtConfig } from "./JwtConfig/JwtConfig";
import { Client } from "./Clients/Client";
import { Scope } from "./Clients/Scope";
import { User } from "./User/User";
import { Role } from "./User/Role";
import MyAccount from "./Account/MyAccount";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
            index: true,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/auth",
            element: <Authentication />,
          },
          {
            path: "/security",
            element: <Security />,
          },
          {
            path: "/alert",
            element: <Alerts />,
          },
          {
            path: "/jwt",
            element: <JwtConfig />,
          },
          {
            path: "/client",
            element: <Client />,
          },
          {
            path: "/scope",
            element: <Scope />,
          },
          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/role",
            element: <Role />,
          },
          {
            path: "/myAccount",
            element: <MyAccount />,
          },
        ],
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);

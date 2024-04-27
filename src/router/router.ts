import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { SignInPage } from "../pages/signIn";
import { SignUpPage } from "../pages/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/signin",
    Component: SignInPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
]);

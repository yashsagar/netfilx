import { createRoutesFromElements, Navigate, Route } from "react-router-dom";

import { useAuthStore } from "./store/authUser.js";
import React from "react";

// layout import
import { AppLayout } from "./layout";
// page import

const SignInPage = React.lazy(() => import("./pages/SignInPage.jsx"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage.jsx"));
const AuthChechScreen = React.lazy(() =>
  import("./pages/home/AuthChechScreen.jsx")
);

const useRouter = () => {
  const { user } = useAuthStore((state) => ({ user: state.user }));

  return createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Loading Routes...</div>}>
            <AppLayout />
          </React.Suspense>
        }
      >
        <Route index element={<AuthChechScreen />} />
        {/* <Route path="/mainpage" element={<MainPage />} /> */}
      </Route>
      <Route
        path="/signin"
        element={
          user ? (
            <Navigate to={"/"} />
          ) : (
            <React.Suspense fallback={<div>Loading Routes...</div>}>
              <SignInPage />
            </React.Suspense>
          )
        }
      />
      <Route
        path="/signup"
        element={
          user ? (
            <Navigate to={"/"} />
          ) : (
            <React.Suspense fallback={<div>Loading Routes...</div>}>
              <SignUpPage />
            </React.Suspense>
          )
        }
      />
    </Route>
  );
};

export default useRouter;

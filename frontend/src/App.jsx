import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import useRouter from "./index.routes.jsx";

import { useAuthStore } from "./store/authUser.js";
import { useEffect } from "react";

const App = () => {
  const routes = useRouter();
  const router = createBrowserRouter(routes);
  const { authCheck, isCheckingAuth } = useAuthStore((store) => ({
    authCheck: store.authCheck,
    isCheckingAuth: store.isCheckingAuth,
  }));

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return <div>Loading main App...</div>;
  }

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;

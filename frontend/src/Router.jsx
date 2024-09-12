import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// layout import
import { AppLayout } from "./layout";
// page import
import { HomePage, SignInPage, SignUpPage, MainPage } from "./pages";

const Router = () => {
  const routes = createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Route>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  );
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default Router;

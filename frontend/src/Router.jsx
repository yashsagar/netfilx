import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// layout import
import { AppLayout } from "./layout";
// page import
import { HomePage } from "./pages";

const Router = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  );
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default Router;

import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../component";
const AppLayout = () => {
  return (
    <div className="text-white hero-bg font-netflix ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default AppLayout;

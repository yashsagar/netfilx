import { useAuthStore } from "../../store/authUser";
import LandingPage from "./LandingPage.jsx";
import HomePage from "./HomePage.jsx";

const AuthChechScreen = () => {
  const { user } = useAuthStore((store) => ({ user: store.user }));

  return <>{user ? <HomePage /> : <LandingPage />}</>;
};
export default AuthChechScreen;

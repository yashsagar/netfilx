import { useState } from "react";
import { Input } from "../component";
import { useLocation, Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const SignInPage = () => {
  const emailfromLandingPage = useLocation().state?.email;
  const inputValue = useState({
    email: emailfromLandingPage ? emailfromLandingPage : "",
    password: "",
  });

  const [isValid, setValid] = useState(false);

  const { login } = useAuthStore((store) => ({
    login: store.login,
  }));

  const emailValidate =
    /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
      inputValue[0].email
    );

  const passwordValidation =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
      inputValue[0].password
    );

  async function handelSubmit() {
    if (!emailValidate) {
      setValid(true);
      return;
    }
    if (!passwordValidation) {
      setValid(true);
      return;
    }
    login(inputValue[0]);
  }

  return (
    <>
      <div className="hero-bg-singin pt-0.5">
        <div className="bg-black xs:bg-transparent lg:mt-24 lg:pb-12">
          <div className="text-white main-wrapper xs:p-16 pt-28  xs:mt-24 xs:max-w-[500px] xs:bg-black/60 xs:mx-auto  xs:rounded-md xs:pb-4 ">
            <p className="text-4xl font-bold">Sign In</p>
            <form className="mt-8 ">
              <div className="mt-4 h-14 mx-auto">
                <Input
                  type="text"
                  id="email-3"
                  name="email"
                  controledComponent={inputValue}
                >
                  Email Address
                </Input>
              </div>
              <div className="mt-4 h-14 mx-auto">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  controledComponent={inputValue}
                >
                  Password
                </Input>
              </div>
              <button
                type="button"
                onClick={handelSubmit}
                className="bg-accent hover:bg-accent-hover active:bg-accent-avtive w-full py-3 rounded-md mt-4 font-medium text-md sm:text-xl"
              >
                Sign In
              </button>
              {isValid && (
                <div className="text-red-500 mt-2 text-left text-sm flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    data-icon="CircleXSmall"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="shadow-xl">Invalid Credentials </p>
                </div>
              )}
              <p className="text-center py-4 text-white/50">OR</p>
              <button
                type="button"
                className="bg-zinc-600/80 hover:bg-zinc-600/70 active:bg-zinc-600/60 w-full py-2.5 rounded-md font-medium text-lg sm:text-xl"
              >
                Use a sign-in code
              </button>
              <p className="py-4 text-center text-lg sm:text-xl text-white/90">
                Forgot password?
              </p>
              <p className="text-slate-600">
                test emailID:{" "}
                <span className="text-white"> test1@gmail.com</span> <br />
                test password:
                <span className="text-white"> Test@123</span>
              </p>
            </form>
            <p className="text-white/70 text-lg sm:text-xl mb-7 mt-2">
              New to Netflix?{" "}
              <Link
                to={"/signup"}
                state={{
                  email: emailfromLandingPage ? emailfromLandingPage : "",
                }}
              >
                <span className="text-blue-500 cursor-pointer">Sign up.</span>
              </Link>
            </p>
            <p className="text-white/50 pb-12 text-sm xs:text-md">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-500">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
      {/* fotter */}

      <div className="text-white/50 bg-black min-h-[20vh]">
        <div className="h-[1px] bg-white/30"></div>
        <div className="main-wrapper">
          <p className="py-10 text-lg xl:px-[10%]">
            Questions? Call <span className="underline">000-800-919-1694</span>
          </p>
          <div className="underline grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4  gap-4 pb-20  xl:px-[10%] ">
            <p>FAQ</p>
            <p>Help Centre</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Corporate Information</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInPage;

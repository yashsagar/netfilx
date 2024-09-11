import { useState } from "react";
import { Input } from "../component";

const SignInPage = () => {
  const inputValue = useState({ email: "", password: "" });
  const emailValidate =
    /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
      inputValue[0].email
    );
  const emailcheck = inputValue[0].email.length < 5 ? false : !emailValidate;
  return (
    <>
      <div className="hero-bg-singin min-h-[80vh]">
        <div className="bg-black min-h-[80vh] xs:bg-transparent">
          <div className=" main-wrapper relative z-10 ">
            <div className="w-24 md:w-40 pt-6">
              <svg
                viewBox="0 0 111 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="100%"
                height="100%"
              >
                <g>
                  <path
                    fill="#ff0000"
                    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white main-wrapper mt-12 xs:max-w-[500px] xs:bg-black/60 xs:mx-auto xs:p-16 xs:rounded-md xs:pb-4">
            <p className="text-4xl font-bold">Sign In</p>
            <form className="mt-8 ">
              <div className="mt-4 h-14 mx-auto">
                <Input
                  type="text"
                  id="email-3"
                  name="email"
                  controledComponent={inputValue}
                  {...(emailValidate && {
                    inputProps: { style: { border: "2px solid green" } },
                  })}
                  {...(emailcheck && {
                    inputProps: { style: { border: "1px solid red" } },
                  })}
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
                  {...(emailValidate && {
                    inputProps: { style: { border: "2px solid green" } },
                  })}
                  {...(emailcheck && {
                    inputProps: { style: { border: "1px solid red" } },
                  })}
                >
                  Password
                </Input>
              </div>
              <button className="bg-accent hover:bg-accent-hover active:bg-accent-avtive w-full py-3 rounded-md mt-4 font-medium text-md sm:text-xl">
                Sign In
              </button>
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
            </form>
            <p className="text-white/70 text-lg sm:text-xl mb-7 mt-2">
              New to Netflix?{" "}
              <span className="text-white cursor-pointer">Sign up now.</span>
            </p>
            <p className="text-white/50 pb-28 text-sm xs:text-md">
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

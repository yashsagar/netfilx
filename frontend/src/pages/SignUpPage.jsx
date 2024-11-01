import { useState } from "react";
import { Input } from "../component";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const SignUpPage = () => {
  const emailfromLandingPage = useLocation().state?.email;
  const inputValue = useState({
    email: emailfromLandingPage ? emailfromLandingPage : "",
    password: "",
    name: "",
  });
  const [isValid, setValid] = useState(false);

  const { signup } = useAuthStore((state) => ({
    signup: state.signup,
    isSigningUp: state.isSigningUp,
  }));

  const emailValidate =
    /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
      inputValue[0].email
    );
  let emailcheck = inputValue[0].email.length < 2 ? false : !emailValidate;

  const nameValidation = /^[A-Za-z][A-Za-z0-9]{4,9}$/.test(inputValue[0].name);

  let namecheck = inputValue[0].name.length < 2 ? false : !nameValidation;

  const passwordValidation =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
      inputValue[0].password
    );

  let passwordCheck =
    inputValue[0].password.length < 2 ? false : !passwordValidation;

  function handelSbmit() {
    const { name: username, email, password } = inputValue[0];
    if (!nameValidation) {
      setValid(true);
      return;
    }

    if (!passwordValidation) {
      setValid(true);
      return;
    }

    if (!emailValidate) {
      setValid(true);
      return;
    }

    signup({ username, email, password });
  }

  return (
    <>
      <div className="hero-bg-singin min-h-[80vh] p-1">
        <div className="bg-black min-h-[80vh] xs:bg-transparent mt-24">
          <div className="text-white main-wrapper mt-[10%] xs:mt-[5%]  xs:max-w-[500px] xs:bg-black/60 xs:mx-auto xs:p-16 xs:rounded-md xs:pb-4 ">
            <p className="text-4xl font-bold">Sign Up</p>
            <form className="mt-8 ">
              <div className="mt-4 h-14 mx-auto">
                <Input
                  type="name"
                  id="name"
                  name="name"
                  controledComponent={inputValue}
                  {...(nameValidation && {
                    inputProps: { style: { border: "2px solid green" } },
                  })}
                  {...(namecheck && {
                    inputProps: { style: { border: "1px solid red" } },
                  })}
                >
                  Name
                </Input>
              </div>
              {namecheck && (
                <div className="text-red-500 mt-2 text-left text-sm flex gap-1 items-center ">
                  <p className="shadow-xl px-2">
                    usename must start from Alphabet and min lenght must be 5
                    characters
                  </p>
                </div>
              )}
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
              {emailcheck && (
                <div className="text-red-500 mt-2 text-left text-sm flex gap-1 items-center ">
                  <p className="shadow-xl px-2">email must be valid.</p>
                </div>
              )}
              <div className="mt-4 h-14 mx-auto">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  controledComponent={inputValue}
                  {...(passwordValidation && {
                    inputProps: { style: { border: "2px solid green" } },
                  })}
                  {...(passwordCheck && {
                    inputProps: { style: { border: "1px solid red" } },
                  })}
                >
                  Password
                </Input>
              </div>
              {passwordCheck && (
                <div className="text-red-500 mt-2 text-left text-sm flex gap-1 items-center ">
                  <p className="shadow-xl px-2">
                    password must contain atlist one number, one uppercase
                    letter, one smallercase letter and with minimum of 8
                    chareacter length.
                  </p>
                </div>
              )}
              <button
                type="button"
                onClick={handelSbmit}
                className="bg-accent hover:bg-accent-hover active:bg-accent-avtive w-full py-3 rounded-md mt-4 font-medium text-md sm:text-xl"
              >
                Sign Up
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
                  <p className="shadow-xl">
                    All filed is required and must be valid.
                  </p>
                </div>
              )}
            </form>
            <p className="text-white/70 text-lg  lg:text-xl my-5">
              Already a member?{" "}
              <Link to={"/signin"}>
                <span className=" cursor-pointer text-blue-500">Sign In.</span>
              </Link>
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
export default SignUpPage;

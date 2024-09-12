import { useRef, useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

export function GenerateEmailInput({ id }) {
  const inputValue = useState({ email: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const emailValidate =
    /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
      inputValue[0].email
    );
  const emailcheck = inputValue[0].email.length < 5 ? false : !emailValidate;

  function handeleSubmit() {
    if (inputValue[0].email.length === 0) {
      inputRef.current.focus();
      return;
    }
    emailValidate
      ? navigate("/signup", { state: { email: inputValue[0].email } })
      : setIsEmailValid(true);
  }

  return (
    <div className="xs:flex gap-4 pt-2 xs:max-w-[500px] mx-auto">
      <div className="xs:w-2/3">
        <div className="mt-4 h-12 mx-auto max-w-[430px]">
          <Input
            type="text"
            id={id}
            name="email"
            controledComponent={inputValue}
            inputProps={{ ref: inputRef }}
            {...(emailValidate && {
              inputProps: { style: { border: "2px solid green" } },
            })}
            {...((emailcheck || isEmailValid) && {
              inputProps: { style: { border: "1px solid red" } },
            })}
          >
            Email Address
          </Input>
        </div>
        {(emailcheck || isEmailValid) && (
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
            <p className="shadow-xl">Email is required.</p>
          </div>
        )}
      </div>
      <div className=" mt-4 mb-28 px-4 py-2.5 text-lg gap-0.5 font-[500] bg-accent hover:bg-accent-hover active:bg-accent-avtive font-netflix rounded-md mx-auto max-w-[430px] xs:w-1/3 ">
        <button
          className=" w-full h-full flex justify-center items-center"
          onClick={handeleSubmit}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            data-icon="ChevronRightStandard"
            aria-hidden="true"
            className="mb-[0.05rem] xs:mt-0 "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

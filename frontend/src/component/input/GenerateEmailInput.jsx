import { useState } from "react";
import Input from "./Input";

export function GenerateEmailInput({ id }) {
  const inputValue = useState({ email: "" });
  const emailValidate =
    /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(
      inputValue[0].email
    );
  const emailcheck = inputValue[0].email.length < 5 ? false : !emailValidate;
  return (
    <>
      <div className="mt-4 h-12 mx-auto max-w-[430px]">
        <Input
          type="text"
          id={id}
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
    </>
  );
}

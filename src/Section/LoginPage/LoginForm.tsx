import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidateData } from "../../utils/validate";

const LoginForm: React.FC = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage,setErrorMessage] = useState<string | null>(null)

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    // console.log(email.current?.value)
    // console.log(password.current?.value)
    const validationError= checkValidateData({email: email.current?.value ? email.current.value : "", password: password.current?.value ? password.current.value : ""});

    // console.log(validationError)
    setErrorMessage(validationError)
  };

  return (
    <form
      className=" w-1/3 p-12 absolute bg-black text-white bg-opacity-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-bold text-3xl py-2">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 bg-zinc-700 placeholder-slate-100 rounded-sm w-full"
        ></input>
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email or phone number"
        className="p-2 my-2 bg-zinc-700 placeholder-slate-100 rounded-sm w-full"
      ></input>
      <input
        ref={password}
        type="text"
        placeholder="Password"
        className="p-2 my-2 bg-zinc-700 placeholder-slate-100 rounded-sm w-full"
      ></input>
      <p className=" text-red-500 font-bold text-lg py-2">{errorMessage}</p>
      <button
        className="p-2 my-2 rounded-sm w-full bg-red-600"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-4">
        {isSignInForm ? (
          <>
            New to Netflix?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => {
                toggleSignInForm();
              }}
            >
              Sign Up
            </span>{" "}
            Now{" "}
          </>
        ) : (
          <>
            Already registered?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => {
                toggleSignInForm();
              }}
            >
              Sign In
            </span>{" "}
            Now{" "}
          </>
        )}
      </p>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <form className=" w-1/3 p-12 absolute bg-black text-white bg-opacity-80">
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
        type="text"
        placeholder="Email or phone number"
        className="p-2 my-2 bg-zinc-700 placeholder-slate-100 rounded-sm w-full"
      ></input>
      <input
        type="text"
        placeholder="Password"
        className="p-2 my-2 bg-zinc-700 placeholder-slate-100 rounded-sm w-full"
      ></input>
      <button className="p-2 my-2 rounded-sm w-full bg-red-600">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p>
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

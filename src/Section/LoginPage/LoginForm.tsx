import React, { useRef, useState } from "react";
import { checkValidateData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const toggleSignInForm = () => {
    setErrorMessage("");

    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    // console.log(email.current?.value)
    // console.log(password.current?.value)
    const validationError = checkValidateData({
      email: email.current?.value ? email.current.value : "",
      password: password.current?.value ? password.current.value : "",
    });

    setErrorMessage(validationError);
    if (validationError) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value ? email.current.value : "",
        password.current?.value ? password.current.value : ""
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser as firebase.User
            dispatch(addUser({uid:uid,email:email, displayName:displayName}))           
            navigate("/browse");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value ? email.current.value : "",
        password.current?.value ? password.current.value : ""
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({uid:user.uid,email:user.email, displayName:user.displayName}))           

          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
          ref={name}
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

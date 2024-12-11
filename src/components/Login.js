import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utilities/Validate";
import { auth } from "../utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  // const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // const fullNameValue = fullName.current ? fullName.current.value : "Placeholder Name";
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Login" +user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
        />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-48 text-white mx-auto left-0 right-0 bg-opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full-Name"
            className="p-4 my-4 w-full bg-gray-700"
            // ref={fullName}
          />
        )}
        <input
          type="text"
          placeholder="Email-Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg py-3">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

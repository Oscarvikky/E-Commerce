import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setstate] = useState("login");

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "signup" ? (
            <input type="text" placeholder="Name" />
          ) : (
            <></>
          )}

          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>continue</button>
        {state === "signup" ? (
          <p className="loginsignup-login">
            Already have and account?{" "}
            <span
              onClick={() => {
                setstate("login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setstate("signup");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

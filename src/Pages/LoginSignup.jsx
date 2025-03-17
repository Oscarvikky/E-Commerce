import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setstate] = useState("login");
  const [formData, setformData] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    try {
      const response = await fetch(
        "https://oscarvikky.vercel.app/Api/Users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responsedata = await response.json();
      console.log("rawdata", responsedata);

      if (responsedata.status === "success") {
        console.log("response", responsedata);
        alert(responsedata.message);
        localStorage.setItem("Token", responsedata.generatetoken);

        window.location.replace("/");
      } else {
        alert(responsedata.error);
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("An error occurred during login.");
    }
  };
  // const login = async () => {
  //   console.log("login happen", formData);
  //   let responsedata;
  //   await fetch("http://localhost:4000/Api/Users/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/form-data",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (responsedata = data));
  //   if (responsedata.success) {
  //     // localStorage.setItem("auth-token", responsedata.token);
  //     window.location.replace("/");
  //   } else {
  //     alert(responsedata.error);
  //   }
  // };

  // const signup = async () => {
  //   console.log("singup happen", formData);
  //   let responsedata;
  //   await fetch("http://localhost:4000/Api/Users/sign-up", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/form-data",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (responsedata = data));
  //   if (responsedata.success) {
  //     alert('successs')
  //     // localStorage.setItem("auth-token", responsedata.token);
  //     window.location.replace("/");
  //   } else {
  //     alert(responsedata.error);
  //   }
  // };

  const signup = async () => {
    try {
      const response = await fetch(
        "https://oscarvikky.vercel.app/Api/Users/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responsedata = await response.json();
      console.log(responsedata);

      if (responsedata.success) {
        alert(responsedata.message);
        localStorage.setItem("Token", responsedata.generatetoken);
        window.location.replace("/");
      } else {
        alert("error signing up");
      }
    } catch (error) {
      console.error("signup failed", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "signup" ? (
            <input
              name="FullName"
              value={formData.FullName}
              type="text"
              placeholder="FullName"
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}

          <input
            name="Email"
            value={formData.Email}
            onChange={changeHandler}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="Password"
            value={formData.Password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={() => (state === "login" ? login() : signup())}>
          continue
        </button>
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

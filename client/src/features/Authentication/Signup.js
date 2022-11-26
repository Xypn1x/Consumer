import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginApiResponse = await fetch("http://localhost:5000/signup", {
        method: "POST",
        body: JSON.stringify({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const formData = await loginApiResponse.json();
      console.log("signupdata", formData);
      const { ok } = formData;
      if (!ok) {
        // console.log("error aye kya", formData);
        // setError(formData.message);
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-main_color-100 min-h-screen flex items-center justify-center">
        {/* <div className="hidden sm:block  ">
          <img
            className="w-full h-full object-cover"
            src={require("../../assets/LoginImg.png")}
            alt="Signup"
          />
        </div> */}

        <div className="  bg-main_color-200 flex rounded shadow-lg max-w-4xl px-2 py-4 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-3xl text-main_color-150">
            Sign Up
          </h2>
          <form
            className="max-w-[400px]  w-full mx-auto bg-gary-900 p-8 px-8 rounded-lg"
            // method="POST"
            // action="/signup"
            onSubmit={handleFormSubmit}
          >
            <div className="flex  flex-col  py-2">
              <label htmlFor="first_name" className="text-sm" >First Name</label>
              <input
                className="rounded-sm bg-main_color-25  text-sm p-2  focus:outline-none"
                type="text"
                name="first_name"
                value={userData.first_name}
                onChange={handleInputs}
              />
            </div>

            <div className="flex  flex-col  py-2">
              <label htmlFor="last_name" className="text-sm">Last Name</label>
              <input
                className="rounded-sm bg-main_color-25  text-sm p-2  focus:outline-none"
                type="text"
                name="last_name"
                value={userData.last_name}
                onChange={handleInputs}
              />
            </div>

            <div className="flex  flex-col  py-2">
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                className="rounded-sm bg-main_color-25  text-sm p-2 focus:outline-none"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputs}
              />
            </div>

            <div className="flex flex-col  py-2">
              <label htmlFor="password" className="text-sm">Password</label>
              <input
              className="rounded-sm bg-main_color-25 text-sm p-2 focus:outline-none"
                type="Password"
                name="password"
                value={userData.password}
                onChange={handleInputs}
              />
            </div>

            <div className="flex flex-col  ">
              <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
              <input
                className="rounded-sm bg-main_color-25 text-sm p-2 focus:outline-none"
                type="Password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleInputs}
              />
            </div>
            <button
              className="w-full my-5 py-2 transition duration-0 hover:duration-150 bg-main_color-150 shadow-lg shadow-text-teal-400 hover:shadow-teal-500/20  text-white font-semibold rounded-sm"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-800">
            <NavLink to="/login">Already have Account ?</NavLink>
          </p>
          </div>
          <div class="md:block hidden w-1/2">
              <img
                className=" rounded "
                alt="Logo"
                src={require("../Shop/pexels-oladimeji-ajegbile-2861798.jpg")}
              />
            </div>
       
        </div>
      </div>
    </>
  );
};

export default SignUp;

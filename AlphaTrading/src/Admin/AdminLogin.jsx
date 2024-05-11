import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alphaUser,token } from "../Redux/Features";
import {toast} from "react-toastify";
// import { useHistory } from 'react-router-dom';



const AdminLogin = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // const history = useHistory();
  const nav = useNavigate()

  const handleSubmit = async (e) => { 
    e.preventDefault();

    const errors = {};
    if (!email || !email.includes("@")) {
      errors.email = "Please enter a valid email address";
    }

    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Logging in...")
      const loadingId = toast.loading("Logging in...")
      try {
        const response = await axios.post("https://alpha-trading.onrender.com/api/admin/sign-in", {
          email,
          password,
        });

        if (response.data.message === "Login successful") {
          console.log("Login Successful:", response);
          dispatch(alphaUser(response?.data?.data))
          dispatch(token(response?.data?.token))
          console.log(response?.data?.token)
          toast.dismiss(loadingId)
          toast.success("Login successfull")
          setTimeout(() => {
            nav("/adminDashboard")
            setEmail("");
            setPassword("");
            setError({});
          }, 5000);

        } else {
          console.error("Login failed: Response data is undefined");
          setError({ apiError: "User does not exist." });
        }
      } catch (error) {
        console.error("Login failed:", error.response.data);
        if (error.response.status === 404) {
          setError({ apiError: "User does not exist." });
        } else {
          setError({ apiError: "Login failed. Please try again." });
        }
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> 
      <div className="max-w-md w-full space-y-8">
        <div className="w-[70%]">
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-6 w-[80%]">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${error.email ? "border-red-500" : "border-gray-300"} border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {error.email && (
                <p className="mt-2 text-sm text-red-600">{error.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${error.password ? "border-red-500" : "border-gray-300"} border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {error.password && (
                <p className="mt-2 text-sm text-red-600">{error.password}</p>
              )}
            </div>
          </div>

          <div className="w-[80%]">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[#021] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import loginpageimg from "../Static/basic/loginpageimg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const AdminLogin = ({ loginUser }) => {
  const [userError, setUserError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const history = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      
    },
  });

  useEffect(() => {});
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10  text-2xl tracking-widest font-bold leading-9 ">
                  Log In
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <div>
                    <div className="flex items-center justify-between ">
                      <label
                        htmlFor="email"
                        className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
                      >
                        Email
                      </label>
                      <div className="text-sm"></div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        required
                        className="block w-full tracking-widest font-sans px-3 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                        {formik.errors.email}*
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <Link
                          to="/forgot-password"
                          className="font-semibold tracking-widest font-sans text-indigo-600 hover:text-indigo-500 "
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2 relative">
                      <input
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={showPass ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block w-full font-sans tracking-widest rounded px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <span
                        onClick={() => setShowPass(!showPass)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 cursor-pointer"
                      >
                        {!showPass ? (
                          <FaRegEye
                            className="h-6 w-6 text-gray-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaRegEyeSlash
                            className="h-6 w-6 text-gray-600"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                        {formik.errors.password}*
                      </p>
                    )}
                  </div>
                  {/* {userError && <p style={{ color: "red" }}>{userError}</p>} */}
                  <div>
                    <button
                      type="submit"
                      className="flex w-full uppercase tracking-widest justify-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="m-auto">
            <img
              className="w-full max-w-none rounded bg-gray-900 shadow ring-1 ring-gray-400/10 sm:w-[30rem]"
              src={loginpageimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

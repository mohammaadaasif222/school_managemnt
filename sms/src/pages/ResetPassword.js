import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginpageimg from "../Static/basic/loginpageimg.jpg";
import { useFormik } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import axios from "axios";
// import {URL} from '../URL'
const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const [userError, setUserError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // const response = await axios.post(`${URL}/admin/reset-password/${token}`, values);
        // setMessage(response.data.message)
        // setTimeout(() => {
        //   navigate('/login');
        // }, 2000);
      } catch (error) {
        setUserError("User not found");
      }
    },
  });

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-widest font-sans">
                  Reset Password
                </h2>
              </div>
              {message ? (
                <div className="bg-green-100 text-green-900 p-3 rounded-md my-5 text-center ">
                  {message}
                </div>
              ) : (
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="newPassword"
                          className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
                        >
                          New Password
                        </label>
                      </div>
                      <div className="mt-2 relative">
                        <input
                          id="newPassword"
                          name="newPassword"
                          value={formik.values.newPassword}
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
                      {formik.touched.newPassword &&
                        formik.errors.newPassword && (
                          <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                            {formik.errors.newPassword}
                          </p>
                        )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-sans tracking-widest font-medium leading-6 text-gray-900 "
                        >
                          Confirm Password
                        </label>
                      </div>
                      <div className="mt-2 relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formik.values.confirmPassword}
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
                      {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword && (
                          <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                            {formik.errors.confirmPassword}
                          </p>
                        )}
                    </div>
                    {userError && <p style={{ color: "red" }}>{userError}</p>}
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center font-sans tracking-widest uppercase rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>

                  <p className="mt-10  text-sm text-gray-500 ">
                  
                    <Link
                      to="/"
                      className="font-semibold leading-6 font-sans tracking-widest text-indigo-600 hover:text-indigo-500"
                    >
                      Go Back
                    </Link>
                  </p>
                </div>
              )}
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

export default ResetPassword;

import React, { useState } from "react";
// import { connect } from "react-redux";
// import { loginUser } from "../redux/actions"

import { Link } from "react-router-dom";

import loginpageimg from "../Static/basic/loginpageimg.jpg";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import {URL} from '../URL'

const ForgotPassword = () => {
  const [userError, setUserError] = useState("");
  const [message, setMessage] = useState("");

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${URL}/admin/forgot-password`,
          values
        );
        if (response.status === 200) {
          setMessage(response.data.message);
        } else {
          setUserError("User not found");
        }
      } catch (error) {
        setUserError("User not found");
      }
    },
  });

  return (
    <>
      {/* <HomePageMenu /> */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center font-sans tracking-widest text-2xl font-bold leading-9">
                  Forgot Password
                </h2>
              </div>
              {message && message ? (
                <div className="bg-green-100 text-green-900 p-3 rounded-md my-5 text-center ">
                  {message}
                </div>
              ) : (
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

                    {userError && <p style={{ color: "red" }}>{userError}</p>}
                    <div>
                      <button
                        type="submit"
                        className="flex w-full uppercase font-sans tracking-widest justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 px-2 text-sm text-gray-500 ">
                    <Link
                      to="/"
                      className="font-semibold leading-6 font-sans tracking-wide text-indigo-600 hover:text-indigo-500"
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
      {/* <BasicFooter /> */}
    </>
  );
};

export default ForgotPassword;

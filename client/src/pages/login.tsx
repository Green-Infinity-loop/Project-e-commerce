import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import img from "../image/login/login.png";

import { useRouter } from "next/router";

import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submitSingIn = () => {
    let status = 201;
    axios
      .post("http://localhost:8080/signin", { email, password })
      .then((data) => {
        if (status !== 201) {
        } else {
          console.log(data);

          localStorage.setItem("token", data.data.token);
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-4 bg-gray-900">
      <div className="col-span-3  flex h-screen w-full justify-center items-center">
        <div className="bg-gray-800 rounded-2xl">
          <Image
            className=" mx-[300px]"
            alt="login image"
            src={img}
            width={800}
            height={900}
          ></Image>
        </div>
      </div>
      <div className="bg-neutral-1000">
        <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
          <div className="w-[450px] absolute right-[450px] p-6 bg-gray-700 bg-opacity-70 rounded-2xl shadow-md lg:max-w-xl">
            <h1 className="text-2xl font-bold  text-gray-400">Welcome To</h1>
            <h2 className="text-3xl font-bold text-[#ea4c89] ">InfinityLoop</h2>
            <form
              className="mt-6 text-white"
              onSubmit={(e) => {
                e.preventDefault();
                submitSingIn();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-400"
                >
                  Email
                </label>
                <input
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-700 bg-opacity-70 text-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-700 bg-opacity-70 text-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <Link
                href="/forget"
                className="text-xs text-gray-400 hover:underline"
              >
                Forget Password?
              </Link>
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-gray-300 transition-colors duration-200 transform bg-[#ea4c89] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="relative bg-gray-800  flex items-center  justify-center w-full  mt-6 border border-t"></div>
            <div className="flex justify-center mt-4 gap-x-2">
              <button
                type="submit"
                className="flex items-center bg-gray-800  justify-center w-[50px]  border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </button>
              <button className="flex bg-gray-800 items-center justify-center w-[50px] border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
                    x1="10.341"
                    x2="40.798"
                    y1="8.312"
                    y2="38.769"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
                    d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                  ></path>
                </svg>
              </button>
              <button className="flex bg-gray-800  items-center justify-center w-[50px]  border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </button>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { validateFormFields } from "../utils/validation";


const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [validateResult, setValidateResult] = useState({});
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = ()=>{
   
    const result = validateFormFields(name?.current?.value, email?.current?.value, password?.current?.value);
    setValidateResult(result);

  }

  const toggleLog = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <div className="h-screen w-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg)]  ">
      <div className="h-full w-full bg-[#00000095]">
        <div className=" relative top-1/2 left-1/2 w-1/4 -translate-1/2 text-white bg-[#00000095] p-5 ">
          <h1 className="text-3xl font-bold my-3">
            {isNewUser ? "Sign Up" : "Sign In"}
          </h1>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            {isNewUser && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                name="full-name"
                minLength={8}
                className="my-3 bg-[#313c4ea6] p-1 text-lg border rounded-xs  border-gray-600 "
              />
              
            )}
            {!validateResult?.name && <p>Please enter valid name</p>}
            <input
              ref={email}
              className="my-3 bg-[#313c4ea6] p-1 text-lg border rounded-xs  border-gray-600 "
              type="email"
              placeholder="Email"
              name="email"
            />
            {!validateResult?.email && <p>Please enter valid email</p>}
            <input
              ref={password}
              className="my-3 bg-[#313c4ea6] p-1 text-lg border rounded-xs  border-gray-600"
              type="password"
              placeholder="Password"
              name="password"
              minLength={8}
            />
            {!validateResult?.password && <p>Please enter valid password</p>}
            <button className="my-3 bg-red-600 rounded py-1 cursor-pointer" onClick={handleSubmit}>
              {isNewUser ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="my-3">
            {isNewUser ? "Already a user" : "New to Netfilx?"}
            <span
              className="font-bold hover:underline cursor-pointer"
              onClick={toggleLog}
            >
              {" "}
              {isNewUser ? "Sign in now" : "Sign up now"}
            </span>
          </p>
          <p className="my-3 text-sm text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

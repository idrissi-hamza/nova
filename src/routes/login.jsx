import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="flex items-center justify-center mt-20 ">
      <form
        className=" h-[20rem] max-w-sm w-80  bg-white p-5 border shadow rounded text-slate-600"
        onSubmit={submitHandler}
      >
        <h2 className="text-xl font-semibold ">Login</h2>

        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Email:</span>
          <input
            className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mx-auto mb-6">
          <span className="block mb-1 text-sm"> Password</span>
          <input
            className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {isPending && <Button title={"Pending..."} />}
        {!isPending && <Button title={"Login"} />}
        {error && alert(error)}
        <div className="pt-2 font-semibold text-sm hover:text-emerald-700/50 text-emerald-600/80  inline-block ">
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleFileChange = (e) => {
    setThumbnail(null);
    // setThumbnailError(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file must be les than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName,thumbnail);
  };

  return (
    <div className="flex items-center justify-center mt-8 ">
      <form
        className=" h-[27rem] max-w-sm w-80  bg-white p-5 border shadow rounded text-slate-600"
        onSubmit={submitHandler}
      >
        <h2 className="text-xl font-semibold ">Signup</h2>

        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Email:</span>
          <input
            className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mx-auto">
          <span className="block mb-1 text-sm"> Password</span>
          <input
            className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Display name</span>
          <input
            className=" mb-2 py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Profile thumbnail</span>
          <input
            className=" mb-2  py-1 px-1 text-md h-9 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
            type="file"
            onChange={handleFileChange}
            required
            // onClick={()=>setThumbnailError(null)}
          />
          {thumbnailError && <div className=" text-red-300 -mt-3 rounded-md">{thumbnailError}</div>}
        </label>

        {isPending && <Button title={"Pending..."} />}
        {!isPending && <Button title={"Signup"} />}
        {error && alert(error)}
        <div className="pt-2 font-semibold text-sm hover:text-emerald-700/50 text-emerald-600/80  inline-block ">
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

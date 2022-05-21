import React from "react";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefaultt();
    console.log(name, details, dueDate);
  };
  return (
    <div className="max-w-xl  h-full p-12 pt-8">
      <h2 className="font-semibold pb-2">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Project name:</span>
          <input
            className=" mb-2  py-1 px-1 text-md h-9 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
        </label>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Project details:</span>
          <textarea
            className=" mb-2  py-1 px-1 text-md h-24 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            required
            value={details}
          />
        </label>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Set Due Date:</span>
          <input
            className=" mb-2  py-1 px-1 text-md h-9 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            required
            value={dueDate}
          />
        </label>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Project category: </span>
        </label>
        <label className="block my-2 mx-auto">
          <span className="block mb-1 text-sm"> Assign to: </span>
        </label>

        <button className="btn"> Add Project</button>
      </form>
    </div>
  );
};

export default Create;

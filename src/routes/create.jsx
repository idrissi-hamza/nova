import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { useCollection } from "../hooks/useCollection";

const categories = [
  { value: "develpment", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const { documents, error } = useCollection("users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate, category.value);
  };
  return (
    <div className="max-w-xl  h-full pl-12 p-4">
      <h2 className="font-semibold pb-2">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label className="block my-2 mr-2 w-1/2">
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

        
          <label className="block my-2 mr-2">
            <span className="block mb-1 text-sm"> Project category: </span>
            <Select
              options={categories}
              onChange={(option) => setCategory(option)}
            />
          </label>
          <label className="block my-2 ml-2">
            <span className="block mb-1 text-sm"> Assign to: </span>
            <Select
              options={users}
              onChange={(option) => setAssignedUsers(option)}
              isMulti
            />
          </label>
        
        <label className="block my-2  w-1/2 ">
          <span className="block mb-1 text-sm"> Set Due Date:</span>
          <input
            className=" mb-2  py-1 px-1 text-md h-9 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            required
            value={dueDate}
          />
        </label>

        <button className="btn"> Add Project</button>
      </form>
    </div>
  );
};

export default Create;

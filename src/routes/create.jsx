import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { timestamp } from "../firebase/config";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const Create = () => {
  const { addDocument, response } = useFirestore("projects");

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState();

  const { documents, error } = useCollection("users");
  const [users, setUsers] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please assign a project category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign the projet to  at least one user");
      return;
    }

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };
    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };
  return (
      <div className="max-w-xl pl-12  mx-auto h-full   rounded-sm">
        <h2 className="text-xl font-bold pb-2">Create a new Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex">
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
            <label className="block my-2 mr-2 w-1/2">
              <span className="block mb-1 text-sm"> Project category: </span>
              <Select
                options={categories}
                onChange={(option) => setCategory(option)}
              />
            </label>
          </div>
          <label className="block my-2 mx-auto">
            <span className="block mb-1 text-sm"> Project details:</span>
            <textarea
              className=" mb-2  py-1 px-1 text-md h-16 border-gray-300  border w-full  rounded focus:border-gray-500  outline-none"
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              required
              value={details}
            />
          </label>

          <label className="block my-2 ">
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
            <button className="btn h-10 "> Add Project</button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
  );
};

export default Create;

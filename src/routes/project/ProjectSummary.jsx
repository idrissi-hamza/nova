import React from 'react'
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectSummary({ project }) {
  const { user } = useAuthContext();
  const { deleteDocument, response } = useFirestore("projects");
  const navigate = useNavigate();
  const handleClick = () => {
    deleteDocument(project.id);
    // console.log(project);
    navigate("/");
  };
  return (
    <div className="sm:col-span-3 ">
      <div className="bg-white p-7 rounded-md ">
        <h2 className="text-xl font-semibold uppercase text-slate-700">
          {project.name}
        </h2>
        <p className="text-xs -mt-1">
          Author : {project.createdBy.displayName}
        </p>
        <p className="mb-3  text-sm text-slate-400">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="my-4 text-slate-800 border-b pb-5">{project.details}</p>
        <h4 className="font-semibold text-slate-600">Project assigned to:</h4>
        <div className="flex pt-2">
          {project.assignedUsersList.map((user) => (
            <div
              className="flex flex-col items-center justify-center group"
              key={user.id}
            >
              <Avatar src={user.photoURL} cls={"w-8 h-8"} />
              <span className="opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all ease-in-out text-xs font-medium text-slate-500 ">
                {user.displayName}
              </span>
            </div>
          ))}
        </div>
      </div>
      {project.createdBy.id === user.uid && (
        <button className="btn mt-3" onClick={handleClick}>
          mark as Completed
        </button>
      )}
    </div>
  );
}

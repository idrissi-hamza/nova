import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const ProjectList = ({ projects }) => {
  return (
    <div className="mt-5 grid grid-cols-fit-60 gap-5   ">
      {projects.length === 0 && <p className="glass">no project found!</p>}
      {projects.map((project) => (
        <Link
        className=" max-w-sm p-4 shadow-md text-inherit hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-100 rounded-md bg-slate-50"
        to={`/project/${project.id}`}
          key={project.id}
        >
          <h4 className="text-md font-bold uppercase text-slate-600"> {project.name}</h4>
          <p className="text-xs text-slate-400">
            Due by {project.dueDate.toDate().toDateString()}
          </p>
          <div className="mt-5 pt-2 border-t border-slate-400">
            <ul className=" my-1 flex">
              {project.assignedUsersList.map((user) => (
                <li className="mr-2 " key={user.photoURL}>
                  <Avatar src={user.photoURL} cls={"w-6 h-6"} />
                  
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;

import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const ProjectList = ({ projects }) => {
  return (
    <div className="mt-10 grid grid-cols-fit-60 gap-5   ">
      {projects.length === 0 && <p>no project found!</p>}
      {projects.map((project) => (
        <Link
          className="bg-white p-4 shadow-md text-inherit hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-100 rounded-md"
          to={`/project/${project.id}`}
          key={project.id}
        >
          <h4 className="text-lg font-semibold"> {project.name}</h4>
          <p className="text-sm text-slate-400">
            Due by {project.dueDate.toDate().toDateString()}
          </p>
          <div className="mt-5 pt-2 border-t">
            <ul className=" my-2 flex">
              {project.assignedUsersList.map((user) => (
                <li className="mr-2 " key={user.photoURL}>
                  <Avatar src={user.photoURL} cls={"w-8 h-8"} />
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

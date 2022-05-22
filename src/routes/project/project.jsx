import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full  text-red-400">
        {error}
      </div>
    );
  }
  if (!document) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }
  return (
    // <p>j</p>
    <div className="m-8 grid grid-cols-5 items-start gap-14">
      <ProjectSummary project={document} />

      {/* <div className="col-span-2">comments</div> */}
      <ProjectComments project={document} />
    </div>
  );
};

export default Project;

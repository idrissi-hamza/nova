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
    <div className="sm:m-8   flex flex-col sm:grid sm:grid-cols-5 sm:items-start gap-1 sm:gap-10 ">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
};

export default Project;

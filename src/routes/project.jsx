import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";

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
    <div className="m-8">
      <h1 className="text-xl font-semibold uppercase text-slate-700">{document.name}</h1>
    </div>
  );
};

export default Project;

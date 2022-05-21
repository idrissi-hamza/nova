import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.length === 0 && <p>no project found!</p>}
      {projects.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
};

export default ProjectList;

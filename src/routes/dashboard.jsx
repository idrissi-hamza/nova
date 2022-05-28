import  React, { useState } from "react";
import ProjectList from "../components/ProjectList";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const Dashboard = () => {
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();
  const filterList = [
    "all",
    "mine",
    "development",
    "design",
    "sales",
    "marketing",
  ];
  const [currentFilter, setCurrentFilter] = useState("all");
  const clickHandler = (filter) => {
    setCurrentFilter(filter);
  };
  // console.log(currentFilter);
  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            assignedToMe = document.assignedUsersList
              .map((e) => e.id)
              .includes(user.uid);
            return assignedToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className="p-8">
      <h2>Dashboard</h2>
      <div className=" mb-2 flex gap-2 bg-white w-max py-2 px-3 rounded-md text-slate-700 cursor-pointer">
        {filterList.map((f) => (
          <div key={f} className="group">
            <span onClick={() => clickHandler(f)}>{f} </span>
            <span className="text-slate-300 group-last:hidden">|</span>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;

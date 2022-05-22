import React from "react";
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

const OnlineUsers = () => {
  const { documents: users, error } = useCollection("users");

  return (
    <div className="w-52 p-7 bg-slate-200 text-slate-500 ">
      <h2 className="justify-end mb-10 pb-5 border-b-slate-200 text-sm">
        All Users
      </h2>
      {error && <div>{error}</div>}
      {users &&
        users.map((user) => (
          <div
            className="flex justify-end items-center mx-auto my-5"
            key={user.id}
          >
            {user.online && (
              <div className="w-2 h-2 mr-2 mt-1 rounded-full  bg-green-400" />
            )}
            <span className="mr-2">{user.displayName}</span>
            <Avatar cls={`w-8 h-8`} src={user.photoURL} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;

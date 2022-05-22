import React from "react";

const Avatar = ({ src, cls }) => {
  return (
    <div
      className={`inline-block ${cls} rounded-full overflow-hidden shadow-md `}
    >
      <img className="w-full h-full" src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;

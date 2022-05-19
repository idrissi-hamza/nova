import React from "react";

const Button = ({title, onClick}) => {
  return (
    <button  onClick={onClick} className=" w-full border-2 border-gray-600 text-gray-700 font-semibold px-3 py-1 rounded hover:bg-gray-600 hover:text-indigo-50  transition ease-in-out delay-100">
     {title}
    </button>
  );
};

export default Button;

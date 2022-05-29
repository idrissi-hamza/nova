import React, { useState, useLayoutEffect, useRef } from "react";
import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import SendIcon from "@mui/icons-material/Send";

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const { updateDocument, response } = useFirestore("projects");

  const listEl = useRef(null);
  useLayoutEffect(() => {
    listEl.current.scrollTo(0, listEl.current.scrollHeight);

    // console.log(listEl.current.scrollHeight);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!response.error) {
      setNewComment("");
    }
    // listEl.current.scrollBottom=listEl.current.scrollHeight;
    console.log(listEl);

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    // console.log(commentToAdd);
    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="sm:col-span-2 glass sm:p-2 px-4 min-h-max">
      <h4 className="text-lg font-semibold  text-slate-700">
        Project Comments
      </h4>
      <div
        ref={listEl}
        className=" overflow-y-scroll max-h-[45vh] pr-1 scrollbar-thin "
      >
        <ul className="flex flex-col">
          {project.comments.length > 0 &&
            project.comments.map((comment) => (
              <li className="bg-white p-2 rounded-xl my-2" key={comment.id}>
                <div className="flex  items-center space-x-1 text-xs font-semibold text-slate-500">
                  <Avatar src={comment.photoURL} cls={"w-6 h-6 shadow"} />
                  <p>{comment.displayName}</p>
                </div>
                <div className="text-slate-400 mt-2">
                  <p>{comment.content}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <form className=" mt-3 p-2 relative  " onSubmit={handleSubmit}>
        <input
          className="w-full mt-3 px-2 py-1 border-md relative outline-none rounded "
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        ></input>
        <button className="absolute top-[22px] right-3 text-slate-400 ">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

import  React, { useState } from "react";
import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const { updateDocument, response } = useFirestore("projects");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="col-span-2">
      <h4 className="text-lg font-semibold  text-slate-700">
        Project Comments
      </h4>
      <div className=" overflow-y-scroll h-[70vh] pr-1 scrollbar-thin">
        <ul>
          {project.comments.length > 0 &&
            project.comments.map((comment) => (
              <li className="bg-white p-2 rounded-xl my-2" key={comment.id}>
                <div className="flex items-center space-x-1 text-xs font-semibold text-slate-500">
                  <Avatar src={comment.photoURL} cls={"w-6 h-6 shadow"} />
                  <p>{comment.displayName}</p>
                </div>
                <div className="text-slate-400 mt-2">
                  <p>{comment.content}</p>
                </div>
              </li>
            ))}
        </ul>

        <form className=" mt-3 p-2" onSubmit={handleSubmit}>
          <label className="w-full">
            <span>Add new comment:</span>
            <textarea
              className="w-full mt-3 px-2 py-1 border-md"
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
            ></textarea>
          </label>
          <button className="btn mt-2 ">Add Comment</button>
        </form>
      </div>
    </div>
  );
}

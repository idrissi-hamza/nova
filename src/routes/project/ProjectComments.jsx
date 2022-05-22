import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProjectComments() {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);
  };

  return (
    <div className="col-span-2 p-2">
      <h4 className="text-lg font-semibold  text-slate-700" >Project Comments</h4>

      <form className=" mt-3" onSubmit={handleSubmit}>
        <label className="w-full">
          <span>Add new comment:</span>
          <textarea
          className="w-full mt-3 px-2 py-1 border-md"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn mt-2 w-full">Add Comment</button>
      </form>
    </div>
  );
}

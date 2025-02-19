// import { useUser, useAuth } from "@clerk/clerk-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { FaRegBookmark } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";


const PostMenuActions = () => {

  return (
    <div >
      <h1 className="mt-4 mb-4 text-sm font-medium ">Actions</h1>
      <div className=" flex items-center gap-2 text-sm cursor-pointer">
        <FaRegBookmark className="h-5 w-5" />
        <span> Save this post</span>
      </div>
      <div className=" flex items-center gap-2 text-sm cursor-pointer mt-2">
        <MdDeleteForever className="h-5 w-5" />
        <span>Delete this post</span>
      </div>

    </div>
  );
};

export default PostMenuActions;

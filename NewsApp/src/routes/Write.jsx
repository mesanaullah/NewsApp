import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { IKContext, IKUpload } from "imagekitio-react"
import Upload from "../components/Upload";


const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    // console.log(data);

    mutation.mutate(data);
  };

  return (
    // <div className="h-[calc(100vh-64px-250px)] md:h-[calc(100vh-80px-250px)] flex flex-col gap-6"></div>
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-light my-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-8">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 inset-shadow-sm rounded-xl text-sm text-gray-500 bg-[#eeee]">
            Add a cover image
          </button>
        </Upload>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-lg ">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-md inset-shadow-sm bg-[#eeeeee]"
          >
            <option value="general">General</option>
            <option value="world">World</option>
            <option value="politics">Politics</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-md inset-shadow-sm bg-[#eeeeee]"
          name="desc"
          placeholder="A Short Description"
        />
        {/* <ReactQuill theme="snow" className=" bg-[#eeeeee] ql-editor" /> */}
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-lg shadow-md ql-editor"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-lg inset-shadow-sm mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;

import { useEffect, useState } from "react";
import BlogFragment from "../Component/Fragment/BlogFragment";
import { getApi } from "../Fetch/getApi";
import { patchApi } from "../Fetch/patchApi";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().getDate();
    const month = new Date().toLocaleString("default", {
      month: "long",
    });
    const year = new Date().getFullYear();

    const newComment = {
      id: data.comment.length + 1,
      name: e.target[0].value,
      comment: e.target[1].value,
      date: `${date} ${month} ${year}`,
    };

    e.target[0].value = "";
    e.target[1].value = "";

    const addNewComment = { comment: [...data.comment, newComment] };

    await patchApi(`http://localhost:3000/blog/${id}`, addNewComment);

    location.reload();
  };

  useEffect(() => {
    getApi(`http://localhost:3000/blog/${id}`, (data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center pt-7 gap-4 ">
      <BlogFragment data={data} onsubmit={onSubmit} />
    </div>
  );
};

export default BlogPage;

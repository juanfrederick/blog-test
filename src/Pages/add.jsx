import { AddFragment } from "../Component/Fragment/AddFragment";
import { postApi } from "../Fetch/postApi";

const submit = async (e) => {
  e.preventDefault();
  const date = new Date().getDate();
  const month = new Date().toLocaleString("default", {
    month: "long",
  });
  const year = new Date().getFullYear();

  const newData = {
    image: e.target[1].value,
    title: e.target[0].value,
    text: e.target[2].value,
    date: `${date} ${month} ${year}`,
    comment: [],
  };

  await postApi("http://localhost:3000/blog/", newData);

  window.location.href = "/";
};

const AddPage = () => {
  return (
    <div className="flex flex-col items-center pt-7 gap-4 ">
      <AddFragment onsubmit={submit} />
    </div>
  );
};

export default AddPage;

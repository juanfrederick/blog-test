import Comment from "../Element/Comment/Comment";
import Form from "../Layout/Form";
import Words from "../Layout/Words";

const BlogFragment = ({ data, onsubmit }) => {
  const { image, title, date, text, comment } = data;

  return (
    <div className="p-5 w-screen max-w-2xl lg:max-w-3xl ">
      <Words date={date} title={title} image={image} text={text} />
      <h1 className="text-xl font-bold font-poppins">Comments</h1>
      <Comment comment={comment} />
      <h1 className="text-xl font-bold font-poppins mt-5">Reply</h1>
      <Form onsubmit={onsubmit} />
    </div>
  );
};

export default BlogFragment;

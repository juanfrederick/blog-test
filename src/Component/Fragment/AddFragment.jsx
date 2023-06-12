import AddForm from "../Layout/AddForm";

export const AddFragment = ({ onsubmit }) => {
  return (
    <div className="p-5 w-screen max-w-2xl lg:max-w-3xl">
      <h1 className="text-center font-bold font-poppins text-5xl">
        Add Your Blog
      </h1>
      <AddForm onsubmit={onsubmit} />
    </div>
  );
};

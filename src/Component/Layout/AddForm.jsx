import TextInput from "../Element/TextInput/TextInput";
import Button from "../Element/Button/Button";
import TextAreaInput from "../Element/TextAreaInput/TextAreaInput";
import { Link } from "react-router-dom";

const AddForm = ({ onsubmit }) => {
  return (
    <form action="submit" className="flex flex-col mt-5" onSubmit={onsubmit}>
      <TextInput name="title" text="Title:" />
      <TextInput name="image" text="Image Link:" />
      <TextAreaInput name="text" text="Text:" />
      <Button title="Add" type="submit" />
    </form>
  );
};

export default AddForm;

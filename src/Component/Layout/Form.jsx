import Button from "../Element/Button/Button";
import TextAreaInput from "../Element/TextAreaInput/TextAreaInput";
import TextInput from "../Element/TextInput/TextInput";

const Form = ({ onsubmit }) => {
  return (
    <form
      action="submit"
      className="flex flex-col mt-5 font-poppins"
      onSubmit={onsubmit}
    >
      <TextInput text="Name:" name="name" />
      <TextAreaInput text="Comment" name="comment" />
      <Button title="Comment" type="submit" />
    </form>
  );
};

export default Form;

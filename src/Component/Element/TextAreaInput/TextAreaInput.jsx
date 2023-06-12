const TextAreaInput = ({ text, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-bold text-sm mt-3">
        {text}
      </label>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="10 "
        className="border-2 border-black mb-3"
        required
      ></textarea>
    </div>
  );
};

export default TextAreaInput;

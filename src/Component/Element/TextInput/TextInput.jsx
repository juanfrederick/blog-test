const TextInput = ({ name, text }) => {
  return (
    <div className="flex flex-col mt-3">
      <label htmlFor={name} className="font-bold text-sm">
        {text}
      </label>
      <input type="text" id={name} className="border-2 border-black" required />
    </div>
  );
};

export default TextInput;

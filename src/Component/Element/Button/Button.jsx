const Button = ({ title, onclick, type }) => {
  return (
    <button
      className="text-xl font-bold font-poppins px-10 py-3 bg-sky-500 rounded-lg transition-all self-center text-white hover:bg-sky-600 hover:text-lg"
      onClick={onclick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;

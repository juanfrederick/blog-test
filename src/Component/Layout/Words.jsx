const Words = ({ date, title, image, text }) => {
  return (
    <div>
      <p className="font-poppins text-sm text-center">{date}</p>
      <h1 className="font-poppins text-3xl font-bold mt-1  text-center">
        {title}
      </h1>
      <img
        src={image}
        alt=""
        className="h-60 w-full object-cover object-center rounded-md mt-5"
      />
      <p className="text-justify px-1 py-5 font-poppins whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};

export default Words;

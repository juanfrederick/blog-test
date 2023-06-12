import React from "react";

const Card = ({ image, title, date, onclick }) => {
  return (
    <div
      className="flex flex-col items-center bg-slate-100 w-[70vw] pt-3 pb-12 rounded-xl shadow-lg cursor-pointer sm:w-96"
      onClick={onclick}
    >
      <div className="w-[90%] h-56 overflow-hidden rounded-lg group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-all group-hover:scale-105"
        />
      </div>
      <h1 className="font-poppins text-xl font-bold mt-3">{title}</h1>
      <p className="font-poppins text-sm">{date}</p>
    </div>
  );
};

export default Card;

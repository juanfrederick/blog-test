import React from "react";
import Card from "../Element/Card/Card";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
  return (
    <div className="grid gap-5 justify-center  place-items-center  p-3 lg:grid-cols-2  xl:grid-cols-3 ">
      {data?.map((val) => {
        return (
          <Link key={val.id} to={`/blog/${val.id}`}>
            <Card image={val.image} title={val.title} date={val.date} />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;

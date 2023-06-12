import { Link } from "react-router-dom";
import Button from "../Element/Button/Button";
import CardList from "../Layout/CardList";

const HomeFragment = ({ data, getid }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-poppins font-bold text-3xl">Welcome To My Blog</h1>
      <Link to="/add">
        <Button title="Add Text" type="button" />
      </Link>
      <CardList data={data} getid={getid} />
    </div>
  );
};

export default HomeFragment;

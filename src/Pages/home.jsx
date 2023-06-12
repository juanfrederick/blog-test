import { useEffect, useState } from "react";

import { getApi } from "../Fetch/getApi";
import HomeFragment from "../Component/Fragment/HomeFragment";

const HomePage = () => {
  const [data, getData] = useState([]);
  const [id, getId] = useState(null);

  useEffect(() => {
    getApi("http://localhost:3000/blog", (data) => {
      getData(data);
    });
  }, []);

  return (
    <div className="py-7">
      <HomeFragment data={data} getid={getId} />
    </div>
  );
};

export default HomePage;

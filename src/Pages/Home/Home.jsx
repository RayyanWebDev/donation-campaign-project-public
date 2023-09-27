import React from "react";
import Banner from "../../Component/Header/Banner/Banner";

import { useLoaderData } from "react-router-dom";
import Contributions from "../../Component/Contributions/Contributions";

const Home = () => {
  const contributions = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Contributions contributions={contributions}></Contributions>
    </div>
  );
};

export default Home;

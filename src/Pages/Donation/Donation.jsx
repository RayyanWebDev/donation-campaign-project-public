import React, { useEffect, useState } from "react";

const Donation = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(favoriteItems);
  }, []);
  console.log(favorites);
  return (
    <div>
      <div>Donation</div>
    </div>
  );
};

export default Donation;

import React, { useEffect, useState } from "react";

import DonationsCard from "./DonationsCard";

const Donations = () => {
  const [donates, setDonates] = useState([]);

  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donates"));
    if (donationItems) {
      setDonates(donationItems);
    } else {
      setNoFound("NO DATA");
    }
  }, []);

  console.log(donates);

  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-2">
            {donates.map((contribution) => (
              <DonationsCard key={contribution.id} contribution={contribution}>
                {" "}
              </DonationsCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;

import React, { useEffect, useState } from "react";

import DonationsCard from "./DonationsCard";

const Donations = () => {
  const [donates, setDonates] = useState([]);

  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donates"));
    if (donationItems) {
      setDonates(donationItems);
    } else {
      setNoFound("NO DATA");
    }
  }, []);

  console.log(donates);
  console.log(isShow);
  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          <div className="flex flex-wrap lg:grid grid-cols-2 gap-12">
            {isShow
              ? donates.map((contribution) => (
                  <DonationsCard
                    key={contribution.id}
                    contribution={contribution}
                  >
                    {" "}
                  </DonationsCard>
                ))
              : donates.slice(0, 4).map((contribution) => (
                  <DonationsCard
                    key={contribution.id}
                    contribution={contribution}
                  >
                    {" "}
                  </DonationsCard>
                ))}
          </div>
          {donates.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="5px bg-green-200 block mx-auto"
            >
              {isShow ? "See Less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donations;
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2

import React from "react";
import ContributionsCard from "./ContributionsCard";

const Contributions = ({ contributions }) => {
  console.log(contributions);
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {contributions?.map((contribution) => (
          <ContributionsCard
            key={contribution.id}
            contribution={contribution}
          ></ContributionsCard>
        ))}
      </div>
    </div>
  );
};

export default Contributions;

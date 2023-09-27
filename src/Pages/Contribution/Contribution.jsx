import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ContributionCard from "./ContributionCard";

const Contribution = () => {
  const [contribution, setContribution] = useState({});

  const { id } = useParams();

  const contributions = useLoaderData();

  useEffect(() => {
    const findContribution = contributions?.find(
      (contribution) => contribution.id === id
    );

    setContribution(findContribution);
  }, [id, contributions]);

  console.log(contribution);

  return (
    <div>
      <ContributionCard contribution={contribution}></ContributionCard>
    </div>
  );
};

export default Contribution;

Contribution;

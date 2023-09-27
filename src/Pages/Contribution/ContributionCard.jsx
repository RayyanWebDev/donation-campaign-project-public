import React from "react";
import swal from "sweetalert";

const ContributionCard = ({ contribution }) => {
  const {
    id,
    Picture,
    Title,
    Category,
    Color_for_category_bg,
    Color_for_card_bg,
    Color_for_text,
    Description,
    Price,
  } = contribution || {};

  const handleContribution = () => {
    const addedDonationsArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donates"));

    if (!donationItems) {
      addedDonationsArray.push(contribution);
      localStorage.setItem("donates", JSON.stringify(addedDonationsArray));
      swal("Thanks for your kind donation!");
    } else {
      const isExist = donationItems.find(
        (contribution) => contribution.id === id
      );

      if (!isExist) {
        addedDonationsArray.push(...donationItems, contribution);
        localStorage.setItem("donates", JSON.stringify(addedDonationsArray));
        swal("You have a great heart!");
      } else {
        swal("Already!");
      }
    }
  };

  return (
    <>
      <div className="relative">
        <img className="w-full" src={Picture} alt="" />
        <div className="absolute bottom-0 left-0 w-full h-24 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <button
            onClick={handleContribution}
            style={{ backgroundColor: Color_for_text }}
            className="text-white ml-7 border-10 border-red-900 btn  relative z-10"
          >
            Donate $290
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold">{Title}</h3>
        <p>{Description}</p>
      </div>
    </>
  );
};

export default ContributionCard;

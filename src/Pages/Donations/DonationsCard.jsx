import React from "react";

const DonationsCard = ({ contribution }) => {
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
  return (
    <div>
      <div className="card w-3/4 bg-base-100 shadow-xl grid grid-cols-2">
        <figure>
          <img className="h-56" src={Picture} alt="" />
        </figure>
        <div style={{ background: Color_for_card_bg }} className="card-body">
          <h2
            style={{
              background: Color_for_category_bg,
              color: Color_for_text,
            }}
            className="card-title w-24"
          >
            {Category}
          </h2>
          <p style={{ color: Color_for_text }}>{Title}</p>
          <p style={{ color: Color_for_text }}>{Price}</p>
          <button
            style={{ background: Color_for_text }}
            className="text-white w-17 h-10 rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationsCard;

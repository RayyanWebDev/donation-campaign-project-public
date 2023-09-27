import React from "react";
import { Link } from "react-router-dom";

const ContributionsCard = ({ contribution }) => {
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
    <div className="grid justify-center lg:grid">
      <Link to={`/contributions/${id}`}>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={Picture} alt="" />
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContributionsCard;

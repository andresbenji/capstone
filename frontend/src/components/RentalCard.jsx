import React from "react";

const RentalCard = ({ rental }) => {
  return (
    <div className="rental-card">
      <img src={rental.image} alt={rental.title} />
      <h2>{rental.title}</h2>
      <p>{rental.location}</p>
      <p>{rental.price}</p>
    </div>
  );
};

export default RentalCard;

import React from "react";

const RentalCard = ({ rental }) => {
  return (
    <div className="rental-card">
      <img src={rental.imgSrc} alt={rental.streetAddress} />
      <h2>{rental.streetAddress}</h2>
      <p>{rental.city}</p>
      <p> $ {rental.price.toLocaleString()}</p>
      <p>Bathrooms: {rental.bathrooms}</p>
      <p>Bedrooms: {rental.bedrooms}</p>
    </div>
  );
};

export default RentalCard;

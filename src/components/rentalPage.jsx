import React from "react";
import house1 from "./images/house1.webp";
import house2 from "../components/images/house2.webp";
import house3 from "../components/images/house3.webp";
import house4 from "../components/images/house4.webp";

const RentalsPage = () => {
  const rentalsData = [
    {
      id: 1,
      title: "1510 Catherine Simmons Ave 2",
      location: "1510 Catherine Simmons Ave 2, Charlotte, NC 28216",
      price: "$995/month",
      image: "house1.webp", // Replace with actual image URL
    },
    {
      id: 2,
      title: "1032 Karendale Ave",
      location: "1032 Karendale Ave, Charlotte, NC 28208",
      price: "$499/month",
      image: "", // Replace with actual image URL
    },

    {
      id: 3,
      title: "906 Harrill St",
      location: "906 Harrill St, Charlotte, NC 28205",
      price: "$1,095/month",
      image: "", // Replace with actual image URL
    },
    {
      id: 4,
      title: "4915 Osage Cir",
      location: "4915 Osage Cir, Charlotte, NC 28269",
      price: "$1,450/month",
      image: "", // Replace with actual image URL
    },

    {
      id: 5,
      title: "2634 Druid Hills Way, Unit 2",
      location: "2634 Druid Hills Way, Unit 2, Charlotte, NC 28206",
      price: "$920/month",
      image: "", // Replace with actual image URL
    },
    {
      id: 6,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "", // Replace with actual image URL
    },
  ];

  return (
    <div>
      <h1>Available Rentals in Charlotte, NC</h1>
      <div className="rentals-list">
        {rentalsData.map((rental) => (
          <div key={rental.id} className="rental-card">
            <img src={rental.image} alt={rental.title} />
            <h2>{rental.title}</h2>
            <p>{rental.location}</p>
            <p>{rental.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalsPage;

// import React from "react";
import React, { useState } from "react";
import RentalCard from "./RentalCard";
import house1 from "../components/images/house1.webp";
import house2 from "../components/images/house2.webp";
import house3 from "../components/images/house3.webp";
import house4 from "../components/images/house4.webp";
import house5 from "../components/images/house5.webp";
import house6 from "../components/images/house6.webp";

const RentalsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const rentalsData = [
    {
      id: 1,
      title: "1510 Catherine Simmons Ave 2",
      location: "1510 Catherine Simmons Ave 2, Charlotte, NC 28216",
      price: "$995/month",
      image: "", // Replace with actual image URL
    },
    {
      id: 2,
      title: "1032 Karendale Ave",
      location: "1032 Karendale Ave, Charlotte, NC 28208",
      price: "$499/month",
      image: "house2.webp", // Replace with actual image URL
    },

    {
      id: 3,
      title: "906 Harrill St",
      location: "906 Harrill St, Charlotte, NC 28205",
      price: "$1,095/month",
      image: "house3.webp", // Replace with actual image URL
    },
    {
      id: 4,
      title: "4915 Osage Cir",
      location: "4915 Osage Cir, Charlotte, NC 28269",
      price: "$1,450/month",
      image: "house4.webp", // Replace with actual image URL
    },

    {
      id: 5,
      title: "2634 Druid Hills Way, Unit 2",
      location: "2634 Druid Hills Way, Unit 2, Charlotte, NC 28206",
      price: "$920/month",
      image: "house5.webp", // Replace with actual image URL
    },
    {
      id: 6,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
    {
      id: 7,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
    {
      id: 8,
      title: "3100 Cosby Pl",
      location: "3100 Cosby Pl, Charlotte, NC 28205",
      price: "$1,350/month",
      image: "house6.webp", // Replace with actual image URL
    },
  ];

  const filteredRentals = rentalsData.filter((rental) => {
    if (filter === "all" || rental.type === filter) {
      return rental.title.toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  });

  return (
    <div className="rentals-page">
      <h1>Available Rentals in Charlotte, NC</h1>
      <div className="filters">
        <label htmlFor="filter">Filter by Type:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div className="rentals-list">
        {filteredRentals.map((rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default RentalsPage;

import React, { useState } from "react";

const RentalFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [homeType, setHomeType] = useState("any");

  const handlePriceChange = (event) => {
    const newValue = Number(event.target.value);
    setPriceRange([priceRange[0], newValue]);
  };

  const handleHomeTypeChange = (event) => {
    setHomeType(event.target.value);
  };

  return (
    <div className="filter-section">
      <div className="price-filter">
        <label htmlFor="price-range">Price Range:</label>
        <input
          type="range"
          id="price-range"
          min={0}
          max={5000}
          step={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
        <span>
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>

      <div className="home-type-filter">
        <label htmlFor="home-type">Home Type:</label>
        <select id="home-type" value={homeType} onChange={handleHomeTypeChange}>
          <option value="any">Any</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>
    </div>

    //   <div className="my-properties-container">
    //   <h1>My Properties</h1>
    //   <div className="property-list">
    //     {myProperties.map((property) => (
    //       <PropertyCard key={property.id} property={property} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default RentalFilter;

// import React, { useState } from "react";
// import RentalCard from "./RentalCard";
// const RentalsPage = () => {
//   const [filter, setFilter] = useState("all");
//   const [searchText, setSearchText] = useState("");

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   // const rentalsData = [
//   //   {
//   //     id: 1,
//   //     title: "1510 Catherine Simmons Ave 2",
//   //     location: "1510 Catherine Simmons Ave 2, Charlotte, NC 28216",
//   //     price: "$995/month",
//   //     image: "", // Replace with actual image URL
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "1032 Karendale Ave",
//   //     location: "1032 Karendale Ave, Charlotte, NC 28208",
//   //     price: "$499/month",
//   //     image: "house2.webp", // Replace with actual image URL
//   //   },

//   //   {
//   //     id: 3,
//   //     title: "906 Harrill St",
//   //     location: "906 Harrill St, Charlotte, NC 28205",
//   //     price: "$1,095/month",
//   //     image: "house3.webp", // Replace with actual image URL
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "4915 Osage Cir",
//   //     location: "4915 Osage Cir, Charlotte, NC 28269",
//   //     price: "$1,450/month",
//   //     image: "house4.webp", // Replace with actual image URL
//   //   },

//   //   {
//   //     id: 5,
//   //     title: "2634 Druid Hills Way, Unit 2",
//   //     location: "2634 Druid Hills Way, Unit 2, Charlotte, NC 28206",
//   //     price: "$920/month",
//   //     image: "house5.webp", // Replace with actual image URL
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "3100 Cosby Pl",
//   //     location: "3100 Cosby Pl, Charlotte, NC 28205",
//   //     price: "$1,350/month",
//   //     image: "house6.webp", // Replace with actual image URL
//   //   },
//   //   {
//   //     id: 7,
//   //     title: "3100 Cosby Pl",
//   //     location: "3100 Cosby Pl, Charlotte, NC 28205",
//   //     price: "$1,350/month",
//   //     image: "house6.webp", // Replace with actual image URL
//   //   },
//   //   {
//   //     id: 8,
//   //     title: "3100 Cosby Pl",
//   //     location: "3100 Cosby Pl, Charlotte, NC 28205",
//   //     price: "$1,350/month",
//   //     image: "house6.webp", // Replace with actual image URL
//   //   },
//   // ];

//   const filteredRentals = rentalsData.filter((rental) => {
//     if (filter === "all" || rental.type === filter) {
//       return rental.title.toLowerCase().includes(searchText.toLowerCase());
//     }
//     return false;
//   });

//   return (
//     <div className="rentals-page">
//       <h1>Available Rentals in Charlotte, NC</h1>
//       <div className="filters">
//         <label htmlFor="filter">Filter by Type:</label>
//         <select id="filter" value={filter} onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="apartment">Apartment</option>
//           <option value="house">House</option>
//           <option value="condo">Condo</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Search by Title"
//           value={searchText}
//           onChange={handleSearchChange}
//         />
//       </div>
//       <div className="rentals-list">
//         {filteredRentals.map((rental) => (
//           <rentalCard key={rental.id} rental={rental} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RentalsPage;

// import React, { useEffect, useState } from "react";

// const TestZillowApi = () => {
//   const [properties, setProperties] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);

//   const fetchZillowData = async () => {
//     const url =
//       "https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "23e106927emsh4f983bf11157d33p1c8f12jsn0e27e88bb61a",
//         "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json(); // Parse JSON response
//       setProperties(result.results);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchZillowData();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : properties.length > 0 ? (
//         properties.map((property) => (
//           <div key={property.zpid} className="property-card">
//             <img
//               src={property.imgSrc}
//               alt="Property"
//               className="property-image"
//             />
//             <div className="property-details">
//               <p>Address: {property.streetAddress}</p>
//               <p>
//                 City: {property.city}, {property.state} {property.zipcode}
//               </p>
//               <p>Bedrooms: {property.bedrooms}</p>
//               <p>Bathrooms: {property.bathrooms}</p>
//               <p>Price: ${property.price.toLocaleString()}</p>
//               <p>Home Type: {property.homeType}</p>
//               <p>Home Status: {property.homeStatus}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// };

// export default TestZillowApi;

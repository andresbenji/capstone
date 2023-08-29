// import React, { useEffect, useState } from 'react';

// const [properties, setProperties] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);

//   const fetchZillowData = async () => {
//     const url =
//       "https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "bd11308d44mshef28ddc19e63f67p1dd791jsn2d911670f217",
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



// export default fetchZillowData;
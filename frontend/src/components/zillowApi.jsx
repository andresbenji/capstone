import React, { useEffect, useState } from 'react';

const ZillowApi = () => {
  const [data, setData] = useState([]);
  // const apiKey = '9e96529f88msh2f67ba4cbbe47d9p143ba1jsnee86f8b633c8';
  // const apiUrl = 'https://zillow56.p.rapidapi.com/';

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-Api-Key': 'ce424b08dfmsh723f4c57800adb0p134ee8jsn0fa8554b8f0f'}
  };

//   useEffect(() => {
//     fetch(apiUrl, {
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//       },
//     })
//     .then(response => response.json()) // Convert response to JSON
//     .then(results => {
//       setData(results);
//       console.log(results); // Log the data
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, []);


useEffect((options) => {fetch('zillow56.p.rapidapi.com', options)
  .then(response => response.json())
  .then(response => {
    setData(response);
    console.log(response)})
  .catch(err => console.error(err));
},[]);

  return (
    <div>
      {data.map(item => (
        <div key={item.results.zpid} className="property-card">
           <img src={item.imgSrc} alt="Property" className="property-image" />
           <div className="property-details">
            <h2>Address: {item.streetAddress} {item.unit}</h2>
            <p>City: {item.city}, {item.state} {item.zipcode}</p>
            <p>Price: ${item.price.toLocaleString()}</p>
            <p>Lot Size: {item.lotSize}ft2</p>
            <p>Home Type: {item.homeType}</p>
            <p style={item.homeStatus === "Active" ? {color:"green"} : {color:"red"} }>Home Status: {item.homeStatus}</p>
          </div>
        </div>))}
    </div>
  );
};

export default ZillowApi;
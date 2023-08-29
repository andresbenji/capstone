import React, { useEffect, useState } from 'react';

const ZillowApi = () => {
  const [data, setData] = useState([]);
  const apiKey = '9e96529f88msh2f67ba4cbbe47d9p143ba1jsnee86f8b633c8';
  const apiUrl = 'https://zillow56.p.rapidapi.com/';

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    })
      .then(response => {
        response.json();
        console.log(response.json());
    })
      .then(resultData => {
        setData(resultData);
        console.log(resultData); // Log the data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.zpid} className="property-card">
           <img src={item.imgSrc} alt="Property" className="property-image" />
           <div className="property-details">
            <p>Address: {item.streetAddress} {item.unit}</p>
            <p>City: {item.city}, {item.state} {item.zipcode}</p>
            <p>Bedrooms: {item.bedrooms}</p>
            <p>Bathrooms: {item.bathrooms}</p>
            <p>Price: ${item.price.toLocaleString()}</p>
            <p>Home Type: {item.homeType}</p>
            <p>Home Status: {item.homeStatus}</p>
          </div>
        </div>))}
    </div>
  );
};

export default ZillowApi;
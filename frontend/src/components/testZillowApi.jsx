import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestZillowApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = '9e96529f88msh2f67ba4cbbe47d9p143ba1jsnee86f8b633c8';
  
    const options = {
      method: 'GET',
      url: 'https://zillow56.p.rapidapi.com/search',
      params: {
        location: 'charlotte, nc'
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      }
    };
    
    axios.request(options)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    
    </div>
  )
}

export default TestZillowApi;
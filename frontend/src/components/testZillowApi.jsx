import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestZillowApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = 'ccdd56a97emshe2a0dd7beb36da2p185c5cjsn657bc15662af';
  
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
      {/* Your code to display the data */}
    </div>
  )
}

export default TestZillowApi;
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

import axios from 'axios';
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

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

app.listen(port, () => console.log(`Server running on port ${port}`));
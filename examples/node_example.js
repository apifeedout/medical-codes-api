import fetch from "node-fetch";

const url = "https://api.apifeedgroup.com/codes?code_type=eq.DX10&limit=1";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY",  // replace with your key
    "X-RapidAPI-Host": "medical-codes-api1.p.rapidapi.com"
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log("Response:", json))
  .catch(err => console.error("Error:", err));

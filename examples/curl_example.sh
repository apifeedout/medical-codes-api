#!/bin/bash

curl -X GET "https://api.apifeedgroup.com/codes?code_type=eq.DX10&limit=1" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: medical-codes-api1.p.rapidapi.com"

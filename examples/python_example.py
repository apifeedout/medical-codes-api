import requests

url = "https://api.apifeedgroup.com/codes"
query = {"code_type": "eq.DX10", "limit": "1"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",   # replace with your key
    "X-RapidAPI-Host": "medical-codes-api1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=query)

print("Status:", response.status_code)
print("Response:", response.json())

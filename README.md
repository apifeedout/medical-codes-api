# Medical Codes API 
Medical Codes API consolidates ICD-9, ICD-10, HCPCS, DRG, APC, REV, and Surgical Procedure codes into one consistent model. Fast, reliable medical code lookups &amp; validation for EHR, billing &amp; legal-tech apps
Perfect for EHR/EMR systems, billing/RCM, and legal-tech (PIP & MDL).

Live on [RapidAPI](https://rapidapi.com/api-feed-group-api-feed-group-default/api/medical-codes-api1)  
Get your free API key [RapidAPI Developer Dashboard](https://rapidapi.com/developer/dashboard)
Quickstart in [Postman Workspace](https://www.postman.com/<your-username>/workspace/medical-codes-api/overview)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/<your-username>/workspace/medical-codes-api/overview)
---
## Authentication
Every request requires:
```http
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: medical-codes-api1.p.rapidapi.com
```
## Code Samples

Clone the repo and run examples directly:

```bash
git clone https://github.com/<your-username>/medical-codes-api.git
cd medical-codes-api/examples
```

### Python
```bash
pip install requests
python python_example.py
```

### Node.js
```bash
npm install node-fetch
node node_example.js
```

### cURL
```bash
./curl_example.sh
```

---

## Sample Code

### Python (`examples/python_example.py`)
```python
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
```

### Node.js (`examples/node_example.js`)
```javascript
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
```

### cURL (`examples/curl_example.sh`)
```bash
#!/bin/bash

curl -X GET "https://api.apifeedgroup.com/codes?code_type=eq.DX10&limit=1" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: medical-codes-api1.p.rapidapi.com"
```

---

## Example Response

```json
[
  {
    "id": 301481034,
    "code_type": "DX10",
    "code": "F11",
    "short_description": "Opioid Related Disorders",
    "long_description": "Opioid Related Disorders",
    "version": "0",
    "code_status": "0",
    "validity": "0",
    "effective_date": null,
    "term_date": null,
    "update_date": "2023-11-08",
    "code_nodot": "F11"
  }
]
```

---

## Use Cases

- **Healthcare IT**: validate diagnosis/procedure codes in real time  
- **Billing & RCM**: reduce claim errors, automate lookups  
- **Legal-Tech**: track medical codes in PIP/MDL litigation  

---

## SLA & Support

- 99.9% uptime target  
- Support: admin@apifeedgroup.com  
- Response within 1 business day  

---

## Git Setup (for contributors)

```bash
git add examples/ README.md
git commit -m "Add Python, Node.js, and cURL examples"
git push origin main
```

---

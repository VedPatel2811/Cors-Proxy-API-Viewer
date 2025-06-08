# CORS Proxy API Viewer

This is a simple project that helps you bypass CORS issues when fetching data from an external API using a cookie. It uses an Express.js backend to act as a proxy server and an HTML frontend to display the results in a styled table.

## 🚀 Features

- Bypasses CORS by sending requests from a Node.js backend
- Allows you to input any API URL and cookie string
- Displays the fetched JSON data in a clean HTML table

## 🛠 Tech Stack

- Node.js
- Express
- Axios
- HTML, CSS, JavaScript

## 📦 How to Use

1. **Install dependencies:**
```bash
   npm install express axios
```
2. **Run the server:**
```bash
   node Server.js
```
3. **Open the browser:**

Visit [http://localhost:5000](http://localhost:5000) and follow these steps:

1. **Enter the API URL** you want to fetch data from.
2. **Paste the cookie string** required for authentication.
3. Click **"Fetch Data"** to view the results in a table.

---

## 🧠 Notes

- This project sets `NODE_TLS_REJECT_UNAUTHORIZED=0` to allow self-signed HTTPS requests.  
  ⚠️ **Warning:** This should not be used in production as it disables certificate verification.

- This tool is useful for:
  - Testing APIs that **require cookies for authentication**
  - APIs that **lack proper CORS headers** and block requests from browsers


## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this software with proper attribution.  
See the full license text at [opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

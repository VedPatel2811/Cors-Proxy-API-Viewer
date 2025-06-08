process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static("public"));

app.post("/fetch-data", async (req, res) => {
  const { apiUrl, cookie } = req.body;

  try {
    const response = await axios.get(apiUrl, {
      headers: { Cookie: cookie },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

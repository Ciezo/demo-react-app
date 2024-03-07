const express = require("express");
const app = express();
const port = 3002;

// Root
app.get("/", (req, res) => {
  // Handle the root route (e.g., render an HTML page)
  res.send("Welcome to the mock server!");
  console.log("At http://localhost:3002/");
});

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});

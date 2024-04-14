import app from "./app";

// Start the server
const PORT: number = 3305;
app.listen(PORT, () => {
  console.log(`⚡️[server]: is running on http://localhost:${PORT}`);
});

import app from "./app";
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`⚡️[server]: is running on http://localhost:${port}`);
});

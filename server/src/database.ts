import mongoose, { ConnectOptions } from "mongoose";

mongoose
  .connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then(() => {
    console.log(`✅ Connected to MongoDB successfully!`);
  })
  .catch((error) => {
    console.log(`❌ Error connecting to MongoDB: ${error}`);
  });
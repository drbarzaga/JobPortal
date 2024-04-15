import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

// Import the database connection
import "./database";

// Create the Express App
const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.send("⚡️ Server is running!");
});

export default app;

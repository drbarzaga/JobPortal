import express, { Express, Request, Response } from "express";
import cors from "cors";

// Application instance
const app: Express = express();

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded body parsing

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

export default app;

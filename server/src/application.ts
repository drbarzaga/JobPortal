import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Routes from "./routes";
import Seeders from "./seeders";
import { errorMiddleware } from "./middlewares/error.middleware";
import "./helpers/auth-strategies";
class Application {
  public server;

  constructor() {
    this.server = express();

    this.environment();
    this.database();
    this.middlewares();
    this.routes();
    this.initDirectories();
  }

  private environment() {
    dotenv.config();
  }

  private middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(errorMiddleware);
  }

  private routes() {
    new Routes(this.server);
  }

  private initDirectories() {
    // Public directory
    if (!fs.existsSync(path.join(__dirname, "../public"))) {
      fs.mkdirSync(path.join(__dirname, "../public"));
    }

    // Resume directory
    if (!fs.existsSync(path.join(__dirname, "../public/resumes"))) {
      fs.mkdirSync(path.join(__dirname, "../public/resumes"));
    }

    // Uploads directory
    if (!fs.existsSync(path.join(__dirname, "../public/uploads"))) {
      fs.mkdirSync(path.join(__dirname, "../public/uploads"));
    }
  }

  private database() {
    const MONGO_URL: string = process.env.MONGO_URL || "";

    mongoose
      .connect(MONGO_URL, {} as any)
      .then(async () => {
        console.log(`✅[Server]: Database is connected`);
        await Seeders.run();
      })
      .catch((error) => {
        console.log(`❌[Server] Database connection error: ${error}`);
      });
  }

  public start() {
    const PORT: number = process.env.PORT
      ? parseInt(process.env.PORT, 10)
      : 5555;
    this.server
      .listen(PORT, () => {
        if (process.env.NODE_ENV === "development") {
          console.log(
            `⚡️[Server]: Server is running at http://localhost:${PORT}`
          );
        } else {
          console.log(`⚡️[Server]: Server is running`);
        }
      })
      .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.log(`❌ Error: address already in use`);
        } else {
          console.log(err);
        }
      });
  }
}

export default Application;

import express, { Express } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import musicRouter from "@/routes/musics-routes";
import { errorHandler } from "@/middlewares/error-handling-middleware";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(musicRouter);
app.use(errorHandler);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import handleError from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(handleError);

export default app;
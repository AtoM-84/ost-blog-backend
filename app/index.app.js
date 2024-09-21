import express from "express";
import router from "./routers/router.js";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(router);
export default app;

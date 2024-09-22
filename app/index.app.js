import express from "express";
import router from "./routers/router.js";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'https://ost-static-react-production.up.railway.app/blog',
    credentials: true,
  }));
app.use(router);
export default app;

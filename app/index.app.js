import express from "express";
import router from "./routers/router.js";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://ost-static-react.railway.internal',
    credentials: true,
  }));
app.use(router);
export default app;

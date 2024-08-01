import express from "express";
import router from "./routers/router.js";

import { connection } from "./db/database.js";

const app = express();

// const query = connection.from("post");
// const rows = await query.where({ id: 2 });
// console.log(rows);

app.use(router);
export default app;

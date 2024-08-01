import "dotenv/config";
import { createServer } from "node:http";
import app from "./app/index.app.js";

const PORT = process.env.PORT || 4000;
const server = createServer(app);
server.listen(PORT, () => {
    console.log(`🚀 HTTP Server launched at http://localhost:${PORT} 🚀`);
});

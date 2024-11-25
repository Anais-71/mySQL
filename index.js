import express from "express";
import appRouter from "./routes/index.js";
import { config } from "dotenv";
import { connectToDatabase } from "./db/index.js";

const app = express();

config ();

// === Middlewares ===
app.use(express.json());
app.use("/api/v1/products", appRouter)

const PORT = process.env.PORT || 5000;
connectToDatabase().then (() => {
app.listen(PORT, () => console.log("Server open at port: ", PORT));
}).catch(err => {
    console.log("Error occurd with MySQL connection. Error = ", err);
    process.exit(0);
})
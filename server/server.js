import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./router/userRouter/index.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});
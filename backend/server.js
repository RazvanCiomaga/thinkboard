import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

// connect to db then run the app
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
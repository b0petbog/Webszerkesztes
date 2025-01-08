import express from "express";
import cors from "cors";
import { initializeDB } from "./database.js";
import booksRouter from "./routes/books.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("A szerver fut a 3000-es porton"));
};

startServer();

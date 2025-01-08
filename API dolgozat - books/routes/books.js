import express from "express";
import { dbQuery, dbRun } from "../database.js";

const router = express.Router();

// /books - az összes könyvet visszaadja egy listában
router.get("/", async (req, res, next) => {
    try {
        const books = await dbQuery("SELECT * FROM books;");
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
});

// /books - egy új könyvet lehet rögzíteni
router.post("/", async (req, res, next) => {
    try {
        const newBook = await dbRun("INSERT INTO books (title, author, description, year) VALUES (?, ?, ?, ?);", [req.body.title, req.body.author, req.body.year]);
        res.status(201).json({ id: newBook.lastID, ...req.body });
    } catch (err) {
        next(err);
    }
});

// /books/id - egy könyv adatait lehet lekérdezni
router.get("/", async (req, res, next) => {
    try {
        const book = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
});

// /books/id - egy könyv adatait lehet módosítani
router.put("/id", async (req, res, next) => {
    try {
        const book = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        if (!book) return res.status(404).json({ message: "A könyv nem található!" });

        await dbRun("UPDATE books SET title = ?, author = ?, description = ?, year = ? WHERE id = ?;", [req.body.title, req.body.author, req.body.description, req.body.year, req.params.id]);
        res.status(200).json({ id: req.params.id, ...req.body });
    } catch (err) {
        next(err);
    }
});

// /books/id - egy könyvet lehet törölni az azonosítója alapján
router.delete("/id", async (req, res, next) => {
    try {
        const book = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        if (!book) return res.status(404).json({ message: "A könyv nem található!" });

        await dbRun("DELETE FROM books WHERE id = ?;", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;

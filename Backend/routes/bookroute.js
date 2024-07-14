import express from "express";
import { getBooks, searchBooks } from "../controller/book_controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/search", searchBooks);

export default router;

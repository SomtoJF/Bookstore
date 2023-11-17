const express = require("express");
const router = express.Router();
const Book = require("../models/books");

router
	.route("/")
	.get(async (req, res) => {
		try {
			const response = await Book.find();
			res.status(200).json({ count: response.length, data: response });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	})
	.post(async (req, res) => {
		const body = req.body;
		const book = new Book({
			title: body.title,
			author: body.author,
			publishYear: body.publishYear,
		});
		try {
			const response = await book.save();
			res.status(201).send(response);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	});

router
	.route("/:id")
	.get(getBook, (req, res) => {
		res.status(200).json(res.book);
	})
	.delete(getBook, async (req, res) => {
		try {
			const response = await Book.deleteOne(res.book);
			res.status(200).json(response);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	})
	.patch(getBook, async (req, res) => {
		if (req.body.title) res.book.title = req.body.title;
		if (req.body.author) res.book.author = req.body.author;
		if (req.body.publishYear) res.book.publishYear = req.body.publishYear;

		try {
			const response = await res.book.save();
			res.status(200).json(response);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	});

async function getBook(req, res, next) {
	let book;
	try {
		book = await Book.findById(req.params.id);
		if (book === null) {
			return res.status(404).json({ message: "book not found" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.book = book;
	next();
}

module.exports = router;

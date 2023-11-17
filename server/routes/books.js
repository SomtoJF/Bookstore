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

module.exports = router;

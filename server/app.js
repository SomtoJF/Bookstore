const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(express.json());

const mongoose = require("mongoose");

async function connectDB() {
	try {
		console.log("connecting...");
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("Connection established");
	} catch (err) {
		console.error(err);
	}
}

connectDB();

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(PORT, () => {
	console.log("listening on port " + PORT);
});

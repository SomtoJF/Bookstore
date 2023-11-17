const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

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

const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

app.listen(PORT, () => {
	console.log("listening on port " + PORT);
});

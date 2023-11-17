const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(express.json());

app.listen(PORT, () => {
	console.log("listening on port " + PORT);
});

import axios from "axios";
const BACKEND_URL = "http://localhost:8080/";

export default async function getBooks() {
	try {
		const response = await axios.get(BACKEND_URL + "books");
		const data = response.data;
		return data;
	} catch (err: any) {
		throw new Error(err);
	}
}

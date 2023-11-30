import axios from "axios";
import { CreateBookPayload } from "../../types/createBookPayload";

export default async function createBook(payload: CreateBookPayload) {
	try {
		const response = await axios.post(
			import.meta.env.VITE_DATABASE_URL + "books",
			payload
		);
		return response.data;
	} catch (err: any) {
		throw new Error(err);
	}
}

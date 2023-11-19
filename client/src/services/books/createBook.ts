import axios from "axios";
import { CreateBookPayload } from "../../types/createBookPayload";
import { BACKEND_URL } from "../../../config";

export default async function createBook(payload: CreateBookPayload) {
	try {
		const response = await axios.post(BACKEND_URL + "books", payload);
		return response.data;
	} catch (err: any) {
		throw new Error(err);
	}
}

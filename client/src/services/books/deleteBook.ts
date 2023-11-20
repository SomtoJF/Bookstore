import axios from "axios";
import { BACKEND_URL } from "../../../config";

export default async function deleteBook(id: string | undefined) {
	try {
		const response = await axios.delete(`${BACKEND_URL}books/${id}`);
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
}

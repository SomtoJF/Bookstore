import axios from "axios";
import { CreateBookPayload } from "../../types/createBookPayload";

export default async function updateBook(
	id: string | undefined,
	payload: CreateBookPayload
) {
	try {
		const response = await axios.patch(
			`${import.meta.env.VITE_DATABASE_URL}books/${id}`,
			payload
		);
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
}

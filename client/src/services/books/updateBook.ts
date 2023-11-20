import axios from "axios";
import { CreateBookPayload } from "../../types/createBookPayload";
import { BACKEND_URL } from "../../../config";

export default async function updateBook(
	id: string | undefined,
	payload: CreateBookPayload
) {
	try {
		const response = await axios.patch(`${BACKEND_URL}books/${id}`, payload);
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
}

import axios from "axios";
import { BACKEND_URL } from "../../../config";

export default async function getBook(id: string | undefined) {
	try {
		const response = await axios.get(BACKEND_URL + "books/" + id);
		const data = response.data;
		return data;
	} catch (err: any) {
		throw new Error(err);
	}
}

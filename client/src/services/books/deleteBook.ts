import axios from "axios";

export default async function deleteBook(id: string | undefined) {
	try {
		const response = await axios.delete(
			`${import.meta.env.VITE_DATABASE_URL}books/${id}`
		);
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
}

import axios from "axios";

export default async function getBook(id: string | undefined) {
	try {
		const response = await axios.get(
			import.meta.env.VITE_DATABASE_URL + "books/" + id
		);
		const data = response.data;
		return data;
	} catch (err: any) {
		throw new Error(err);
	}
}

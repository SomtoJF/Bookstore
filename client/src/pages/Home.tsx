import { useEffect, useState } from "react";
import Spinner from "../components/Spinner.tsx";
import getBooks from "../services/books/getBooks";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { Book } from "../types/book";
import HomeTable from "../components/home/HomeTable.tsx";

export default function Home() {
	const [books, setBooks] = useState<Book[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		getBooks()
			.then((item) => setBooks(item.data))
			.catch((err: any) => {
				throw new Error(err);
			});
		setLoading(false);
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-between items-center ">
				<h1 className="text-3xl my-8">Books List</h1>
				<Link to={"/books/create"}>
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>{" "}
			</div>
			{loading ? <Spinner /> : <HomeTable books={books} />}
		</div>
	);
}

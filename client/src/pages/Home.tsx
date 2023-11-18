import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import getBooks from "../services/books/getBooks";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { Book } from "../types/book";

export default function Home() {
	const [books, setBooks] = useState<Book[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		getBooks()
			.then((books) => console.log(books))
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
			{loading ? (
				<Spinner />
			) : (
				<table className="w-full border-separate border-spacing-2">
					<thead>
						<tr>
							<th className="border border-slate-600 rounded-md">No</th>
							<th className="border border-slate-600 rounded-md">Title</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Author
							</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Publish Year
							</th>
							<th className="border border-slate-600 rounded-md">Operations</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => (
							<tr key={book._id} className="h-8">
								<td className="border border-slate-700 rounded-md text-center">
									{index + 1}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

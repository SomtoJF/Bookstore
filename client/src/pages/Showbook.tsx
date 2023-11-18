import { useEffect, useState } from "react";
import { Book } from "../types/book";
import getBook from "../services/books/getBook";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Showbook() {
	const [book, setBook] = useState<Book>({} as Book);
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		getBook(id)
			.then((item) => setBook(item))
			.catch((err) => {
				throw new Error(err);
			});
		setLoading(false);
	});
	return (
		<div className="p-4">
			<h1 className="text-3xl my-4">Show Book</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
					<div className="my-4">
						<span className="text-xl mr-4 text-gray-500"> Title</span>
						<span>{book.title}</span>
					</div>
					<div className="my-4">
						<span className="text-xl mr-4 text-gray-500"> Author</span>
						<span>{book.author}</span>
					</div>
					<div className="my-4">
						<span className="text-xl mr-4 text-gray-500"> Publish Year</span>
						<span>{book.publishYear}</span>
					</div>
					<div className="my-4">
						<span className="text-xl mr-4 text-gray-500"> Create Time</span>
						<span>{new Date(book.createdAt).toString()}</span>
					</div>
					<div className="my-4">
						<span className="text-xl mr-4 text-gray-500"> Last updated at</span>
						<span>{new Date(book.updatedAt).toString()}</span>
					</div>
				</div>
			)}
		</div>
	);
}

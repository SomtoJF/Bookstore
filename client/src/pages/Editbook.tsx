import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateBook from "../services/books/updateBook";
import Spinner from "../components/Spinner";
import getBook from "../services/books/getBook";
import { useSnackbar } from "notistack";

export default function Editbook() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		setLoading(true);
		getBook(id)
			.then((book) => {
				setAuthor(book.author);
				setTitle(book.title);
				setPublishYear(book.publishYear);
			})
			.catch((error) => {
				alert("This book seems to not exist");
				navigate("/");
				throw new Error(error);
			});
		setLoading(false);
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await updateBook(id, {
				title: title,
				author: author,
				publishYear: publishYear,
			});
			setLoading(false);
			enqueueSnackbar("Book Updated Successfully", { variant: "success" });
			navigate("/");
		} catch (error: any) {
			enqueueSnackbar("An error occured", { variant: "error" });
			throw new Error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-4">
			<h1 className="text-3xl my-4">Edit Book</h1>
			{loading ? <Spinner /> : null}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<form
						action=""
						className="flex flex-col gap-2"
						onSubmit={handleSubmit}
					>
						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Title
						</label>
						<input
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							required
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>

						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Author
						</label>
						<input
							type="text"
							name="author"
							id="author"
							defaultValue={author}
							onChange={(e) => setAuthor(e.target.value)}
							required
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>

						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Publish Year
						</label>
						<input
							type="number"
							name="publishYear"
							id="publishYear"
							defaultValue={publishYear}
							onChange={(e) => setPublishYear(e.target.value)}
							required
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>
						<button type="submit" className="p-2 bg-sky-300 m-8">
							submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

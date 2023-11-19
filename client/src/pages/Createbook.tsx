import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import createBook from "../services/books/createBook";
import Spinner from "../components/Spinner";

export default function Createbook() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await createBook({
				title: title,
				author: author,
				publishYear: publishYear,
			});
			setLoading(false);
			navigate("/");
		} catch (error: any) {
			alert("Error creating book. Check your console");
			throw new Error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-4">
			<h1 className="text-3xl my-4">Create Book</h1>
			{loading ? <Spinner /> : null}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<form action="" className="flex flex-col gap-2">
						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Title
						</label>
						<input
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>

						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Author
						</label>
						<input
							type="text"
							name="author"
							id="author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>

						<label htmlFor="title" className="text-xl mr-4 text-gray-500">
							Publish Year
						</label>
						<input
							type="text"
							name="publishYear"
							id="publishYear"
							value={publishYear}
							onChange={(e) => setPublishYear(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>
						<button
							type="submit"
							onClick={handleSubmit}
							className="p-2 bg-sky-300 m-8"
						>
							submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteBook from "../services/books/deleteBook";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

export default function Deletebook() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();

	const handleDeleteBook = async () => {
		try {
			setLoading(true);
			await deleteBook(id);
			enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
			navigate("/");
		} catch (err: any) {
			enqueueSnackbar("An error occured", { variant: "error" });
			throw new Error(err);
		}
		setLoading(false);
	};
	return (
		<div p-4>
			<h1 className="text-3xl  my-4">Delete Book</h1>
			{loading ? <Spinner /> : ""}
			<div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
				<h3 className="text-2xl">Are you sure you want to delete this book?</h3>
				<button
					className="p-4 bg-red-600 text-white m-8 w-full"
					onClick={handleDeleteBook}
				>
					Yes, Delete it
				</button>
			</div>
		</div>
	);
}

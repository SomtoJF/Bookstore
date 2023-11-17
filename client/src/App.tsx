import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Createbook from "../pages/Createbook";
import Showbook from "../pages/Showbook";
import Editbook from "../pages/Editbook";
import Deletebook from "../pages/Deletebook";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books/create" element={<Createbook />} />
				<Route path="/books/details/:id" element={<Showbook />} />
				<Route path="/books/edit/:id" element={<Editbook />} />
				<Route path="/books/delete/:id" element={<Deletebook />} />
			</Routes>
		</BrowserRouter>
	);
}

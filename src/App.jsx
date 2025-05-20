import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MovieContent from "./components/movie/MovieContent";
import Sidebar from "./components/sidebar/Sidebar";
import { MovieContext } from "./contexts";

export default function App() {
	const [cartData, setCartData] = useState([]);
	return (
		<MovieContext.Provider value={{ cartData, setCartData }}>
			<Header />
			<main>
				<div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
					<Sidebar />
					<MovieContent />
				</div>
			</main>
			<Footer />
		</MovieContext.Provider>
	);
}

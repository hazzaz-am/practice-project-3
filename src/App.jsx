import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MovieContent from "./components/movie/MovieContent";
import Sidebar from "./components/sidebar/Sidebar";
import { MovieContext, ThemeContext } from "./contexts";
import { useReducer } from "react";
import { cartReducer, initialState } from "./reducers/cartReducer";

export default function App() {
	const [ state, dispatch ] = useReducer(cartReducer, initialState);
	const [darkMode, setDarkMode] = useState(true);
	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			<MovieContext.Provider value={{ state, dispatch }}>
				<div
					className={`h-full w-full ${
						darkMode ? "text-white bg-[#12141D]" : ""
					}`}
				>
					<Header />
					<main>
						<div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
							<Sidebar />
							<MovieContent />
						</div>
					</main>
					<Footer />
				</div>
			</MovieContext.Provider>
		</ThemeContext.Provider>
	);
}

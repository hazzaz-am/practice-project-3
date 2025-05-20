import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MovieContent from "./components/movie/MovieContent";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
	return (
		<>
			<Header />

			<main>
				<div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
					<Sidebar />
					<MovieContent />
				</div>
			</main>

			<Footer />
		</>
	);
}

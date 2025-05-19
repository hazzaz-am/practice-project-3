import { movies } from "../../data/data";
import MovieItem from "./MovieItem";

export default function MovieContent() {
	const renderMovies = movies.map((movie) => (
		<MovieItem key={movie.title} movie={movie} />
	));

	return (
		<div className="content">
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
				{renderMovies}
			</div>
		</div>
	);
}

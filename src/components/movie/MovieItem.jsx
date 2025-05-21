import tag from "../../assets/tag.svg";
import { useState } from "react";
import Modal from "../ui/Modal";
import Ratings from "../ui/Ratings";
import { getImageUrl } from "../../utils/getImageUrl";
import { useContext } from "react";
import { MovieContext, ThemeContext } from "../../contexts";

export default function MovieItem({ movie }) {
	const [showModal, setShowModal] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const { state, dispatch } = useContext(MovieContext);
	const { darkMode } = useContext(ThemeContext);

	function handleShowModal(movie) {
		setSelectedMovie(movie);
		setShowModal(true);
	}

	function handleCloseModal() {
		setShowModal(false);
		setSelectedMovie(null);
	}

	function handleAddToCart(e, movie) {
		e.stopPropagation();

		const existInCart = state.cartData.find((cart) => cart.id === movie.id);

		if (!existInCart) {
			dispatch({
				type: "ADD_TO_CART",
				payload: {
					...movie,
				},
			});
		} else {
			alert(`${movie.title} is already added in cart`);
		}
	}

	return (
		<>
			{showModal && (
				<Modal
					selectedMovie={selectedMovie}
					onCloseModal={handleCloseModal}
					onCartAdd={handleAddToCart}
				/>
			)}
			<figure
				className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col justify-between cursor-pointer"
				onClick={() => handleShowModal(movie)}
			>
				<img
					className="w-full object-cover"
					src={getImageUrl(movie.cover)}
					alt={movie.title}
				/>
				<figcaption className="pt-4">
					<h3 className={`text-xl mb-1 ${darkMode ? "" : "text-black"} `}>
						{movie.title}
					</h3>
					<p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
					<Ratings />
					<a
						className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
						href="#"
						onClick={(e) => handleAddToCart(e, movie)}
					>
						<img src={tag} alt="" />
						<span>${movie.price} | Add to Cart</span>
					</a>
				</figcaption>
			</figure>
		</>
	);
}

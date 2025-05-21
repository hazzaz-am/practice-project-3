import { getImageUrl } from "../utils/getImageUrl";
import deleteImg from "../assets//delete.svg";
import { useContext } from "react";
import { MovieContext, ThemeContext } from "../contexts";

export default function CartItem({ cartItem }) {
	const { dispatch } = useContext(MovieContext);
	const { darkMode } = useContext(ThemeContext);

	function handleRemoveFromCart(movie) {
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: movie,
		});
	}

	return (
		<div key={cartItem.id} className="grid grid-cols-[1fr_auto] gap-4">
			<div className="flex items-center gap-4">
				<img
					className="rounded overflow-hidden"
					src={getImageUrl(cartItem.cover)}
					alt=""
					width={"50px"}
					height={"50px"}
				/>
				<div>
					<h3
						className={`text-base md:text-xl font-bold ${
							darkMode ? "text-white" : "text-black"
						}`}
					>
						{cartItem?.title}
					</h3>
					<p className="max-md:text-xs text-[#575A6E]">{cartItem.genre}</p>
					<span className={`max-md:text-xs ${darkMode ? "" : "text-black"}`}>
						${cartItem.price}
					</span>
				</div>
			</div>
			<div className="flex justify-between gap-4 items-center">
				<button
					onClick={() => handleRemoveFromCart(cartItem)}
					className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white cursor-pointer"
				>
					<img className="w-5 h-5" src={deleteImg} alt="" />
					<span className="max-md:hidden">Remove</span>
				</button>
			</div>
		</div>
	);
}

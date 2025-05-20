import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import moon from "../../assets/icons/moon.svg";
import cart from "../../assets/shopping-cart.svg";
import { useState } from "react";
import Modal from "../ui/Modal";
import Cart from "../Cart";
import { useContext } from "react";
import { MovieContext } from "../../contexts";

export default function Header() {
	const [showCart, setShowCart] = useState(false);
	const { cartData } = useContext(MovieContext);

	function handleShowCart() {
		setShowCart(true);
		console.log(cartData);
	}

	function handleCloseCart() {
		setShowCart(false);
	}

	return (
		<>
			{showCart && <Cart onCloseCart={handleCloseCart} />}
			<header>
				<nav className="mx-auto container flex items-center justify-between space-x-10 py-6">
					<a href="index.html">
						<img src={logo} width="139" height="26" alt="" />
					</a>

					<ul className="flex items-center space-x-5">
						<li>
							<a
								href="Ring"
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							>
								<img src={ring} width="24" height="24" alt="" />
							</a>
						</li>
						<li>
							<a
								href="Moon"
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							>
								<img src={moon} width="24" height="24" alt="" />
							</a>
						</li>
						<li>
							<a
								href="#"
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								onClick={handleShowCart}
							>
								<img src={cart} width="24" height="24" alt="" />
								{cartData.length > 0 && (
									<span className="rounded-full absolute top-[-12px] left-[24px] bg-[#12cf6f] text-white text-center p-[2px] w-[25px] h-[25px]">
										{cartData.length}
									</span>
								)}
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

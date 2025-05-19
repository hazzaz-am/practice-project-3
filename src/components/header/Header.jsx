import logo from "../../assets/logo.svg";
import { navMenus } from "../../data/data";
import NavItem from "./NavItem";

export default function Header() {
	const renderHeaderItems = navMenus.map((item) => (
		<NavItem key={item.name} item={item} />
	));

	return (
		<header>
			<nav className="mx-auto container flex items-center justify-between space-x-10 py-6">
				<a href="index.html">
					<img src={logo} width="139" height="26" alt="" />
				</a>

				<ul className="flex items-center space-x-5">{renderHeaderItems}</ul>
			</nav>
		</header>
	);
}

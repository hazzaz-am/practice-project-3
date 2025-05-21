import { useContext } from "react";
import { ThemeContext } from "../../contexts";

export default function SidebarItem({ item }) {
	const { darkMode } = useContext(ThemeContext);
	return (
		<li>
			<a
				className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${
					darkMode ? "" : "text-black"
				} ${item.isActive ? "bg-primary" : ""}`}
				href="#"
			>
				<img src={item.icon} width="24" height="24" alt="" />
				<span>{item.label}</span>
			</a>
		</li>
	);
}

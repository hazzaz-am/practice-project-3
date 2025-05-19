import { sidebarItems } from "../../data/data";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
	const renderedMenuItems = sidebarItems.map((item) => (
		<SidebarItem key={item.label} item={item} />
	));

	return (
		<aside>
			<ul className="space-y-2">{renderedMenuItems}</ul>
		</aside>
	);
}

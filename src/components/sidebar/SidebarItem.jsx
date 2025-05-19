export default function SidebarItem({ item }) {
	return (
		<li>
			<a
				className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black ${
					item.isActive ? "bg-primary" : ""
				}`}
				href="#"
			>
				<img src={item.icon} width="24" height="24" alt="" />
				<span>{item.label}</span>
			</a>
		</li>
	);
}

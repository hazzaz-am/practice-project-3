export default function NavItem({ item }) {
	return (
		<li>
			<a
				href={item.href}
				className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
			>
				<img src={item.image} width="24" height="24" alt="" />
			</a>
		</li>
	);
}

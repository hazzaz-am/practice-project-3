import trending from "../assets/icons/trending.svg";
import newRelease from "../assets/icons/newRelease.svg";
import commingSoon from "../assets/icons/commingSoon.svg";
import favourite from "../assets/icons/favourite.svg";
import watchLater from "../assets/icons/watchLater.svg";

export const sidebarItems = [
	{
		icon: trending,
		label: "Trending",
		isActive: true,
	},
	{
		icon: newRelease,
		label: "New Releases",
	},
	{
		icon: commingSoon,
		label: "Coming Soon",
	},
	{
		icon: favourite,
		label: "Favourites",
	},
	{
		icon: watchLater,
		label: "Watch Later",
	},
];

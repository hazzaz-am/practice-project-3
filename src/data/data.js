import trending from "../assets/icons/trending.svg";
import newRelease from "../assets/icons/newRelease.svg";
import commingSoon from "../assets/icons/commingSoon.svg";
import favourite from "../assets/icons/favourite.svg";
import watchLater from "../assets/icons/watchLater.svg";

import ring from "./../assets/ring.svg";
import moon from "./../assets/icons/moon.svg";
import cart from "./../assets/shopping-cart.svg";

import ironMan from "../assets/movie-covers/iron-man.png";
// import avatar from "../assets/movie-covers/avatar.png";
// import oneInHo from "../assets/movie-covers/once-in-ho.jpg";
// import painAndGain from "../assets/movie-covers/pain-and-gain.jpg";
// import parasite from "../assets/movie-covers/parasite.jpg";

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

export const navMenus = [
	{ name: "Ring", href: "#", image: ring },
	{ name: "Moon", href: "#", image: moon },
	{ name: "Cart", href: "#", image: cart },
];

export const movies = [
	{
		title: "Iron Man",
		genre: "Action/Adventure/Sci-fi",
		image: ironMan,
		rating: 5,
		price: 100,
	},
	{
		title: "Inception",
		genre: "Action/Sci-fi/Thriller",
		image: ironMan,
		rating: 5,
		price: 120,
	},
	{
		title: "Interstellar",
		genre: "Sci-fi/Drama/Adventure",
		image: ironMan,
		rating: 5,
		price: 130,
	},
	{
		title: "The Dark Knight",
		genre: "Action/Crime/Drama",
		image: ironMan,
		rating: 5,
		price: 90,
	},
	{
		title: "Avatar",
		genre: "Action/Adventure/Fantasy",
		image: ironMan,
		rating: 4,
		price: 110,
	},
	{
		title: "The Matrix",
		genre: "Action/Sci-fi",
		image: ironMan,
		rating: 5,
		price: 85,
	},
	{
		title: "Doctor Strange",
		genre: "Action/Adventure/Fantasy",
		image: ironMan,
		rating: 4,
		price: 95,
	},
	{
		title: "Guardians of the Galaxy",
		genre: "Action/Adventure/Comedy",
		image: ironMan,
		rating: 5,
		price: 105,
	},
	{
		title: "Black Panther",
		genre: "Action/Adventure/Sci-fi",
		image: ironMan,
		rating: 4,
		price: 100,
	},
	{
		title: "Spider-Man: No Way Home",
		genre: "Action/Adventure/Fantasy",
		image: ironMan,
		rating: 5,
		price: 115,
	},
];

import star from "../../assets/star.svg";


export default function Ratings() {
	return (
		<div className="flex items-center space-x-1 mb-5">
			<img src={star} width="14" height="14" alt="" />
			<img src={star} width="14" height="14" alt="" />
			<img src={star} width="14" height="14" alt="" />
			<img src={star} width="14" height="14" alt="" />
			<img src={star} width="14" height="14" alt="" />
		</div>
	);
}

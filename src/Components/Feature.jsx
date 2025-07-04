const Feature = ({ svgIcon, title, description }) => {
	return (
		<li className="w-1/2 max-w-90">
			<div className="mb-4">
				<img src={svgIcon} alt={title} className="inline-block" />
			</div>

			<h3 className="font-bold text-xl mb-2">{title}</h3>

			<p>{description}</p>
		</li>
	);
};

export default Feature;

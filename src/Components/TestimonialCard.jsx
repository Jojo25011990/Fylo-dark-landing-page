const TestimonialCard = ({ description, avatar, author, position }) => {
	return (
		<li className="relative w-full max-w-[360px] bg-[#202A3C] rounded-md px-6 pb-6 pt-10">
			<div className="relative -top-16 -left-8">
				<img src="./images/bg-quotes.png" alt="Green quotes" />
			</div>
			<blockquote>
				<p className="text-sm mb-6">{description}</p>
				<footer className="w-full max-w-[200px] grid grid-cols-[56px_1fr]  grid-rows-2 gap-x-2 uppercase items-center">
					<img
						src={avatar}
						alt={position}
						className="h-14 rounded-full row-span-2"
					/>
					<h4 className="text-[10px] font-bold col-end-3 self-end">
						{author}
					</h4>
					<small className="text-[8px] col-end-3 self-start">
						{position}
					</small>
				</footer>
			</blockquote>
		</li>
	);
};

export default TestimonialCard;

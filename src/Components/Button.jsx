const Button = ({ text, type }) => {
	return (
		<button
			type={type}
			className="w-full max-w-2xs h-14 relative z-10 m-auto leading-14 font-bold text-center cursor-pointer duration-200 transition-opacity shadow-main-button rounded-full"
		>
			{text}
		</button>
	);
};

export default Button;

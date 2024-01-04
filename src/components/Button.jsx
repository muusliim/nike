const Button = ({ label, iconUrl }) => {
	return (
		<button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red/100 rounded-full text-white transition-all duration-300 hover:bg-red-600">
			{label}
			<img
				src={iconUrl}
				alt="iconButton"
				className="ml-2 rounded-full w-5 h-5"
			/>
		</button>
	);
};

export default Button;

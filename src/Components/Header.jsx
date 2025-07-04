import Logo from "./Logo";

const Header = () => {
	return (
		<header className="w-full flex justify-center px-10 pt-20 pb-20">
			<nav className="container-1200px flex justify-between items-center gap-10">
				<Logo />

				<ul className="w-full max-w-72 flex justify-between items-center gap-5">
					<li>
						<a href="#" className="relative py-2">
							Features
						</a>
					</li>
					<li>
						<a href="#" className="relative py-2">
							Team
						</a>
					</li>
					<li>
						<a href="#" className="relative py-2">
							Sign In
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

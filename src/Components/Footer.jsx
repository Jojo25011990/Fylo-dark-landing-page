import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center bg-[#0B1524] min-h-[441px] px-10 pb-14 pt-40">
			<div className="container-1200px flex flex-col gap-10 footer-container-media-1170px">
				<Logo />

				<div className="flex justify-between gap-5">
					{/* description */}
					<p className="w-full max-w-96 flex gap-5">
						<span className="w-10 h-10 pt-1.5">
							<img
								src="./images/icon-location.svg"
								alt="Location icon svg, white color"
							/>
						</span>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Veritatis, voluptatem iusto! Quasi similique.
					</p>

					<nav className="w-full max-w-3xl flex justify-end gap-15">
						{/* Contact details */}
						<ul>
							<li>
								<i className="fa-solid fa-phone-volume"></i>
								<a href="tel:+421900123456" className="ml-5">
									+421 900 123 456
								</a>
							</li>
							<li>
								<i className="fa-solid fa-envelope"></i>
								<a href="mailto:info@fylo.com" className="ml-5">
									info@fylo.com
								</a>
							</li>
						</ul>

						{/* Company links */}
						<ul>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Jobs</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>

						{/* Legal / Support */}
						<ul>
							<li>
								<a href="#">Contact Us</a>
							</li>
							<li>
								<a href="#">Terms</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
						</ul>

						{/* Social Media */}
						<ul className="flex gap-4">
							<li>
								<a
									href="#"
									className="footer-social-media-links"
								>
									<i className="fa-brands fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

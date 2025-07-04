import { useState } from "react";
import Button from "./Button";
import Feature from "./Feature";
import TestimonialCard from "./TestimonialCard";

const Main = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const trimEmailValue = email.trim().toLowerCase();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const isValidEmail = emailRegex.test(trimEmailValue);

		const errorDelayTime = 2000;

		if (!isValidEmail) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, errorDelayTime);
		} else {
			setError(false);
		}
	};

	return (
		<main className="w-full">
			{/* Hero Section */}
			<section className="pb-40">
				<div className="w-full max-w-3xl">
					<div className="mb-9">
						<img
							src="./images/illustration-intro.png"
							alt="Hero Illustration"
						/>
					</div>

					<div className="flex flex-col gap-8 text-center hero-section-media-600px">
						<h1 className="font-bold text-[40px]">
							All your files in one secure location, accessible
							anywhere
						</h1>
						<p className=" text-xl">
							Fylo stores all your most important files in one
							secure location. Access them wherever you need,
							share and collaborate with friends family, and
							co-workers
						</p>

						<Button type={"button"} text={"Get Started"} />
					</div>
				</div>
			</section>
			{/* End of Hero Section */}

			{/* Features Section */}
			<section className="feature-section-media-925px">
				<ul className="w-full max-w-4xl flex justify-between items-center flex-wrap gap-20 text-center">
					<Feature
						svgIcon={"./images/icon-access-anywhere.svg"}
						title={"Access your files, anywhere"}
						description={
							"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
						}
					/>
					<Feature
						svgIcon={"./images/icon-security.svg"}
						title={"Security you can trust"}
						description={
							"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
						}
					/>
					<Feature
						svgIcon={"./images/icon-collaboration.svg"}
						title={"Real-time collaboration"}
						description={
							"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
						}
					/>
					<Feature
						svgIcon={"./images/icon-any-file.svg"}
						title={"Store any type of file"}
						description={
							"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
						}
					/>
				</ul>
			</section>
			{/* End of Features Section */}

			{/* How Works Section */}
			<section className="pt-36">
				<div className="container-1200px flex justify-between items-center gap-5 how-work-section-media-1100px">
					<div>
						<img
							src="./images/illustration-stay-productive.png"
							alt="Illustration stay productive png image"
						/>
					</div>

					<div className="w-full max-w-[500px]">
						<h2 className="font-bold text-[40px] mb-6 max-w-[450px]">
							Stay productive, wherever you are
						</h2>

						<p className="mb-4">
							Never let location be an issue when accessing your
							files. Fylo has you covered for all of your file
							storage needs.
						</p>
						<p className="mb-6">
							Securely share files and folders with friends,
							family and colleagues for live collaboration. No
							email attachments required.
						</p>

						<a href="#" className="productive-link">
							See how Fylo works
							<i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
						</a>
					</div>
				</div>
			</section>
			{/* End of How Works Section */}

			{/* Testimonals Section */}
			<section className="pt-40">
				<div className="container-1200px">
					{/* <div className="relative top-2 -left-1.5 -z-10">
						<img src="./images/bg-quotes.png" alt="Green quotes" />
					</div>  
                    
                    Original Version - One Quotes.
                    
                    */}

					<ul className="w-full flex justify-between gap-6 testimonial-section-media-1000px testimonial-section-media-925px">
						<TestimonialCard
							description={
								"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
							}
							avatar={"./images/profile-1.jpg"}
							author={"Satish Patel"}
							position={"Founder & CEO, Huddle"}
						/>
						<TestimonialCard
							description={
								"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
							}
							avatar={"./images/profile-2.jpg"}
							author={"Bruce McKenzie"}
							position={"Founder & CEO, Huddle"}
						/>
						<TestimonialCard
							description={
								"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
							}
							avatar={"./images/profile-3.jpg"}
							author={"Iva Boyd"}
							position={"Founder & CEO, Huddle"}
						/>
					</ul>
				</div>
			</section>
			{/* End of Testimonals Section */}

			{/* Early Access Section */}
			<section className="pt-20">
				<div className="relative top-20 w-full max-w-4xl flex flex-col justify-center items-center gap-8 bg-early-access shadow-[5px_5px_8px_rgba(0,0,0,0.25)] rounded-lg px-30 py-10 text-center early-access-section-media-925px early-access-section-media-769px early-access-section-media-600px">
					<h2 className="font-bold text-[32px]">
						Get early access today
					</h2>
					<p className="text-sm">
						It only takes a minute to sign up and our free starter
						tier is extremely generous. If you have any questions,
						our support team would be happy to help you.
					</p>

					<form
						className="w-full relative flex justify-between gap-5"
						autoComplete="off"
						noValidate
						onSubmit={handleSubmit}
					>
						<label htmlFor="input-email" className="hidden">
							Email Address
						</label>
						<input
							type="email"
							id="input-email"
							value={email}
							placeholder="email@example.com"
							className="w-full h-14 max-w-[400px] bg-white rounded-full outline-none pl-10 placeholder:text-neutral-400 text-neutral-950"
							onChange={handleChange}
						/>

						{error && (
							<small className="w-full absolute -bottom-5 left-0 pl-10 text-red-400 text-left">
								Error, please check your email
							</small>
						)}

						<Button type={"submit"} text={"Get Started For Free"} />
					</form>
				</div>
			</section>
			{/* End of Early Access Section */}
		</main>
	);
};

export default Main;

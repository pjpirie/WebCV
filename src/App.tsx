import EmailIcon from "../assets/icons/Icon-3.svg";
import LinkIcon from "../assets/icons/Icon-2.svg";
import PhoneIcon from "../assets/icons/Icon-1.svg";
import PinIcon from "../assets/icons/Icon.svg";
import InstagramIcon from "../assets/icons/IG.png";
import TwitterIcon from "../assets/icons/TW.png";
import GithubIcon from "../assets/icons/Git.png";
import LinkedinIcon from "../assets/icons/Link.png";
import EnglishIcon from "../assets/icons/UK.png";
import XPCLogoIcon from "../assets/icons/XPC.png";
import "./global.css";
import ExperienceCard from "./comp/ExperienceCard.comp";
import BioElement from "./comp/BioElement.comp";

const Home = () => {
	return (
		<div className="flex flex-col justify-end w-full h-auto pt-10 bg-gray-900 ">
			<div className="flex flex-col h-full sm:flex-row md:container md:mx-auto">
				<aside className="w-full p-10 bg-gray-800 divide-y divide-gray-600 rounded-tl-lg sm:w-fit">
					<section className="flex flex-col pb-6">
						<h1 className="text-3xl font-bold text-gray-50">Paul Pirie</h1>
						<h2 className="mb-4 text-2xl font-semibold text-gray-400">
							Full-Stack Web Developer
						</h2>
						<h3 className="text-gray-500 text-1xl">
							Multi-Award Winning Web Developer
						</h3>
					</section>
					<section className="flex flex-col py-6">
						<ul className="flex flex-col">
							<BioElement
								icon={EmailIcon}
								iconAlt="Email Icon"
								iconOutlined
								keyName="Email"
								value="pauljohnpirie@yahoo.co.uk"
							/>
							<BioElement
								icon={LinkIcon}
								iconAlt="Website Icon"
								iconOutlined
								keyName="Website"
								value="https://paulpirie.com"
							/>
							<BioElement
								icon={PhoneIcon}
								iconAlt="Phone Icon"
								iconOutlined
								keyName="Phone"
								value="(+44) 757 593 9905"
							/>
							<BioElement
								icon={PinIcon}
								iconAlt="Address Icon"
								iconOutlined
								keyName="Address"
								value="Greater Glasgow, Scotland"
							/>
						</ul>
					</section>
					<section className="flex flex-col py-6">
						<h4 className="mb-4 text-gray-500">Socials</h4>
						<ul>
							<BioElement
								icon={InstagramIcon}
								iconAlt="Instagram Icon"
								keyName="Instagram"
								value="@paulpiriewebdesign"
							/>

							<BioElement
								icon={TwitterIcon}
								iconAlt="Twitter Icon"
								keyName="Linkedin"
								value="@pjpirie"
							/>

							<BioElement
								icon={GithubIcon}
								iconAlt="Github Icon"
								keyName="Github"
								value="@pjpirie"
							/>

							<BioElement
								icon={LinkedinIcon}
								iconAlt="Linkedin Icon"
								keyName="Linkedin"
								value="paul-pirie-37789715b"
							/>
						</ul>
					</section>
					<section className="flex flex-col justify-center py-6">
						<h4 className="mb-4 text-gray-500">Languages</h4>
						<ul>
							<BioElement
								icon={EnglishIcon}
								iconAlt="British Flag Icon"
								isFlag
								keyName="English"
								value="Native"
							/>
						</ul>
					</section>
				</aside>
				<main className="flex flex-col w-full p-10 bg-gray-700 rounded-tr-lg">
					<section className="mb-4">
						<div className="flex flex-row w-full">
							<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">
								•
							</span>
							<h1 className="ml-10 text-3xl font-semibold text-gray-50">
								Experience
							</h1>
						</div>
						<ExperienceCard
							logo={XPCLogoIcon}
							name="XPC International"
							position="Lead Web Developer"
							startdate="Jan 2021"
							enddate="Jan 2022"
							type="Contract"
						>
							<div className="lg:w-3/5">
								<p className="text-gray-300">
									In this role I worked in a tight-knit multidiciplinary team,
									taking our client’s concept to a fully operational and
									marketable EdTech product.
								</p>
								<ul className="my-2">
									<li className="my-1 text-gray-300">
										• Work directly with the project manager to create a plan
										for design and development sprints.
									</li>
									<li className="my-1 text-gray-300">
										• Manage a small team of developers to implement key
										features
									</li>
									<li className="my-1 text-gray-300">
										• Design, develop, and manage backend system.
									</li>
									<li className="my-1 text-gray-300">
										• Communicate technical knowledge to client’s and other
										non-expert team members
									</li>
								</ul>
							</div>
						</ExperienceCard>

						<ExperienceCard
							logo={XPCLogoIcon}
							name="XPC International"
							position="Lead Web Developer"
							startdate="Jan 2021"
							enddate="Jan 2022"
							type="Contract"
						>
							<div className="lg:w-3/5">
								<p className="text-gray-300">
									In this role I worked in a tight-knit multidiciplinary team,
									taking our client’s concept to a fully operational and
									marketable EdTech product.
								</p>
								<ul className="my-2">
									<li className="my-1 text-gray-300">
										• Work directly with the project manager to create a plan
										for design and development sprints.
									</li>
									<li className="my-1 text-gray-300">
										• Manage a small team of developers to implement key
										features
									</li>
									<li className="my-1 text-gray-300">
										• Design, develop, and manage backend system.
									</li>
									<li className="my-1 text-gray-300">
										• Communicate technical knowledge to client’s and other
										non-expert team members
									</li>
								</ul>
							</div>
						</ExperienceCard>

						<ExperienceCard
							logo={XPCLogoIcon}
							name="XPC International"
							position="Lead Web Developer"
							startdate="Jan 2021"
							enddate="Jan 2022"
							type="Contract"
						>
							<div className="lg:w-3/5">
								<p className="text-gray-300">
									In this role I worked in a tight-knit multidiciplinary team,
									taking our client’s concept to a fully operational and
									marketable EdTech product.
								</p>
								<ul className="my-2">
									<li className="my-1 text-gray-300">
										• Work directly with the project manager to create a plan
										for design and development sprints.
									</li>
									<li className="my-1 text-gray-300">
										• Manage a small team of developers to implement key
										features
									</li>
									<li className="my-1 text-gray-300">
										• Design, develop, and manage backend system.
									</li>
									<li className="my-1 text-gray-300">
										• Communicate technical knowledge to client’s and other
										non-expert team members
									</li>
								</ul>
							</div>
						</ExperienceCard>
					</section>
					<section className="mb-4">
						<div className="flex flex-row w-full">
							<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">
								•
							</span>
							<h1 className="ml-10 text-3xl font-semibold text-gray-50">
								Latest Projects
							</h1>
						</div>
						<div className="p-4 pl-8" />
					</section>
					<section className="mb-4">
						<div className="flex flex-row w-full">
							<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">
								•
							</span>
							<h1 className="ml-10 text-3xl font-semibold text-gray-50">
								Education
							</h1>
						</div>
						<div className="p-4 pl-8" />
					</section>
					<section className="mb-4">
						<div className="flex flex-row w-full">
							<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">
								•
							</span>
							<h1 className="ml-10 text-3xl font-semibold text-gray-50">
								Skills
							</h1>
						</div>
						<div className="p-4 pl-8" />
					</section>
					<section className="mb-4">
						<div className="flex flex-row w-full">
							<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">
								•
							</span>
							<h1 className="ml-10 text-3xl font-semibold text-gray-50">
								Awards
							</h1>
						</div>
						<div className="p-4 pl-8" />
					</section>
				</main>
			</div>
		</div>
	);
};

export default Home;

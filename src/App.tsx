import "./global.css";
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
import ExperienceCard from "./comp/ExperienceCard.comp";
import BioElement from "./comp/BioElement.comp";
import RSDPThumbnail from "../assets/thumbnails/RSDP_X2.png";
import GithubThumbnail from "../assets/thumbnails/github_X2.png";
import ProjectCard from "./comp/ProjectCard.comp";

const Home = () => {
	return (
		<div className="flex flex-col justify-end w-full h-auto sm:pt-10 bg-bg ">
			<div className="flex flex-col h-full sm:flex-row md:container md:mx-auto ">
				<aside className="flex flex-col justify-between pb-4 rounded-tl-lg bg-aside">
					<div className="w-full h-full p-8 pb-0 divide-y divide-divider sm:w-fit">
						<section className="flex flex-col pb-6">
							<h1 className="text-3xl font-bold text-text_heading">
								Paul Pirie
							</h1>
							<h2 className="mb-4 text-2xl font-semibold text-text_heading">
								Full-Stack Web Developer
							</h2>
							<h3 className="text-text text-1xl">
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
									url="mailto:pauljohnpirie@yahoo.co.uk"
								/>
								<BioElement
									icon={LinkIcon}
									iconAlt="Website Icon"
									iconOutlined
									keyName="Website"
									value="https://paulpirie.com"
									url="https://paulpirie.com"
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
									url="https://www.google.co.uk/maps/place/Glasgow+City,+Glasgow/@55.8555367,-4.3024978,12z/data=!3m1!4b1!4m5!3m4!1s0x488846af031eafdf:0x30c681a0642b310!8m2!3d55.8641622!4d-4.2513729"
								/>
							</ul>
						</section>
						<section className="flex flex-col py-6">
							<h4 className="mb-4 text-text">Socials</h4>
							<ul>
								<BioElement
									icon={InstagramIcon}
									iconAlt="Instagram Icon"
									keyName="Instagram"
									value="@paulpiriewebdesign"
									url="https://www.instagram.com/paulpiriewebdesign/"
								/>

								<BioElement
									icon={TwitterIcon}
									iconAlt="Twitter Icon"
									keyName="Linkedin"
									value="@pjpirie"
									url="https://twitter.com/pjpirie"
								/>

								<BioElement
									icon={GithubIcon}
									iconAlt="Github Icon"
									keyName="Github"
									value="@pjpirie"
									url="https://github.com/pjpirie"
								/>

								<BioElement
									icon={LinkedinIcon}
									iconAlt="Linkedin Icon"
									keyName="Linkedin"
									value="paul-pirie-37789715b"
									url="https://www.linkedin.com/in/paul-pirie-37789715b/"
								/>
							</ul>
						</section>
						<section className="flex flex-col justify-center py-6">
							<h4 className="mb-4 text-text">Languages</h4>
							<ul>
								<BioElement
									icon={EnglishIcon}
									iconAlt="British Flag Icon"
									isFlag
									keyName="English"
									value="Native"
									url="https://en.wikipedia.org/wiki/English_language"
								/>
							</ul>
						</section>
					</div>
					<div className="hidden w-full sm:inline-block h-fit ">
						<p className="font-semibold text-center text-1xl text-text">
							© Paul Pirie {new Date().getFullYear()}
						</p>
					</div>
				</aside>
				<main className="flex flex-col justify-between w-full p-8 rounded-none sm:rounded-tr-lg bg-main">
					<div className="flex flex-col">
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full shadow-lg text-text bg-shadow">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
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
									<p className="text-text">
										In this role I worked in a tight-knit multidiciplinary team,
										taking our client’s concept to a fully operational and
										marketable EdTech product.
									</p>
									<ul className="my-2">
										<li className="my-1 text-text">
											• Work directly with the project manager to create a plan
											for design and development sprints.
										</li>
										<li className="my-1 text-text">
											• Manage a small team of developers to implement key
											features
										</li>
										<li className="my-1 text-text">
											• Design, develop, and manage backend system.
										</li>
										<li className="my-1 text-text">
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
									<p className="text-text">
										In this role I worked in a tight-knit multidiciplinary team,
										taking our client’s concept to a fully operational and
										marketable EdTech product.
									</p>
									<ul className="my-2">
										<li className="my-1 text-text">
											• Work directly with the project manager to create a plan
											for design and development sprints.
										</li>
										<li className="my-1 text-text">
											• Manage a small team of developers to implement key
											features
										</li>
										<li className="my-1 text-text">
											• Design, develop, and manage backend system.
										</li>
										<li className="my-1 text-text">
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
									<p className="text-text">
										In this role I worked in a tight-knit multidiciplinary team,
										taking our client’s concept to a fully operational and
										marketable EdTech product.
									</p>
									<ul className="my-2">
										<li className="my-1 text-text">
											• Work directly with the project manager to create a plan
											for design and development sprints.
										</li>
										<li className="my-1 text-text">
											• Manage a small team of developers to implement key
											features
										</li>
										<li className="my-1 text-text">
											• Design, develop, and manage backend system.
										</li>
										<li className="my-1 text-text">
											• Communicate technical knowledge to client’s and other
											non-expert team members
										</li>
									</ul>
								</div>
							</ExperienceCard>
						</section>
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full bg-shadow text-text">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Latest Projects
								</h1>
							</div>
							<ul className="flex flex-col flex-wrap w-full pt-4 pl-16 mt-2 mb-4 lg:flex-row">
								<ProjectCard
									thumbnail={RSDPThumbnail}
									title="Recruitment Skills Development Scotland"
									description="Everything you need to know to improve your performance at recruitment events."
									linkIcon={LinkIcon}
									url="https://xpcinternational.com"
								/>

								<ProjectCard
									thumbnail={GithubThumbnail}
									title="Wordsearch Generator"
									description="Collaborating with an author of children's puzzle books to develop an automated system for generating word searches for an upcoming puzzle book."
									linkIcon={LinkIcon}
									url="https://tinyurl.com/gh-wordsearch"
								/>
							</ul>
						</section>
						<section className="mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full text-text bg-shadow ">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Education
								</h1>
								<p className="pl-4 text-text">WIP</p>
							</div>
							<div className="p-4 pl-8" />
						</section>
						<section className="mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-text bg-shadow rounded-ful">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Skills
								</h1>
								<p className="pl-4 text-text">WIP</p>
							</div>
							<div className="p-4 pl-8" />
						</section>
						<section className="mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full text-text bg-shadow">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Awards
								</h1>
								<p className="pl-4 text-text">WIP</p>
							</div>
							<div className="p-4 pl-8" />
						</section>
					</div>
					<div className="inline-block w-full sm:hidden h-fit ">
						<p className="font-semibold text-center text-1xl text-text">
							© Paul Pirie {new Date().getFullYear()}
						</p>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;

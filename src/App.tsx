import "./global.css";
import EmailIcon from "../assets/icons/EmailIcon.png";
import LinkIcon from "../assets/icons/LinkIcon.png";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import PinIcon from "../assets/icons/PinIcon.png";
import InstagramIcon from "../assets/icons/IG.png";
import TwitterIcon from "../assets/icons/TW.png";
import GithubIcon from "../assets/icons/Git.png";
import LinkedinIcon from "../assets/icons/Link.png";
import EnglishIcon from "../assets/icons/UK.png";
import XPCLogo from "../assets/thumbnails/RSDP_Logo_X4.png";
import UltroniqLogo from "../assets/thumbnails/Ultroniq_X4.png";
import WorldskillsLogo from "../assets/thumbnails/Worldskills_X4.png";
import ExperienceCard from "./comp/ExperienceCard.comp";
import BioElement from "./comp/BioElement.comp";
import RSDPThumbnail from "../assets/thumbnails/RSDP_X2.png";
import GithubThumbnail from "../assets/thumbnails/github_X2.png";
import ProjectCard from "./comp/ProjectCard.comp";
import EducationCard from "./comp/EducationCard.comp";
import ENULogo from "../assets/thumbnails/ENU_X4.png";
import COGCLogo from "../assets/thumbnails/COGC_X4.png";
import AwardCard from "./comp/AwardCard.comp";
import ComputershareLogo from "../assets/thumbnails/Computershare_X4.png";
import SkillCard from "./comp/SkillCard.comp";
import DevelopmentIcon from "../assets/icons/DevelopmentIcon.png";
import DesignIcon from "../assets/icons/DesignIcon.png";
import ReactBadge from "../assets/icons/ReactBadge.png";
import TailwindBadge from "../assets/icons/TailwindBadge.png";
import TypescriptBadge from "../assets/icons/TypescriptBadge.png";
import Tooltip from "./comp/Tooltip.comp";

const Home = () => {
	return (
		<div className="flex flex-col justify-end w-full h-auto sm:pt-10 bg-bg ">
			{/* <div className="flex flex-col h-full mx-0 md:mx-4 lg:mx-8 xl:mx-32 sm:flex-row "> */}
			<div className="container flex flex-col h-full mx-auto sm:flex-row ">
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
									keyName="Twitter"
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
					<div className="flex-col hidden w-full sm:flex h-fit ">
						<p className="text-center text-md text-text">Built using:</p>
						<div className="flex items-center justify-center w-full mt-1 mb-4">
							<div className="relative group">
								<Tooltip value="ReactJS" />
								<img
									src={ReactBadge}
									alt="ReactJS"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
							<div className="relative flex justify-center mx-4 w-fit group">
								<Tooltip value="TailwindCSS" />
								<img
									src={TailwindBadge}
									alt="Tailwind CSS"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
							<div className="relative flex justify-center w-fit group">
								<Tooltip value="Typescript" />
								<img
									src={TypescriptBadge}
									alt="Typescript"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
						</div>
						<p className="font-semibold text-center text-1xl text-text">
							© Paul Pirie {new Date().getFullYear()}
						</p>
					</div>
				</aside>
				<main className="flex flex-col justify-between w-full p-8 rounded-none sm:rounded-tr-lg bg-main">
					<div className="flex flex-col">
						{/* Experience */}
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
								logo={XPCLogo}
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
								logo={UltroniqLogo}
								name="Ultroniq"
								position="Lead Web Developer"
								startdate="Oct 2019"
								enddate="Jan 2022"
								type="Part-time"
							>
								<div className="lg:w-3/5">
									<p className="text-text">
										In this role I worked directly with various clients across
										different sectors, designing and developing full web
										products.
									</p>
									<ul className="my-2">
										<li className="my-1 text-text">
											• Meet with clients to form requirements specificaions.
										</li>
										<li className="my-1 text-text">
											• Communicate requirements to team members.
										</li>
										<li className="my-1 text-text">
											• Plan, Design, Develop, Test, and Deploy products.
										</li>
										<li className="my-1 text-text">
											• Manage a small team of developers.
										</li>
									</ul>
								</div>
							</ExperienceCard>

							<ExperienceCard
								logo={WorldskillsLogo}
								name="WorldSkills UK"
								position="Alumni Trainer"
								startdate="Nov 2019"
								enddate="Present"
								type="Contract"
							>
								<div className="lg:w-3/5">
									<p className="text-text">
										In this role I supported the training of candidates for the
										WorldSkills regional qualifiers.
									</p>
									<ul className="my-2">
										<li className="my-1 text-text">
											• Support training of candidates to compete at national
											competition level.
										</li>
										<li className="my-1 text-text">
											• Attend virtual training sessions.
										</li>
										<li className="my-1 text-text">
											• Communicate technical knowledge.
										</li>
									</ul>
								</div>
							</ExperienceCard>
						</section>
						{/* Projects */}
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full bg-shadow text-text">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Latest Projects
								</h1>
							</div>
							<ul className="flex flex-col flex-wrap w-full pt-4 pl-16 mt-2 mb-4 xxs:pl-0 lg:flex-row">
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
						{/* Education */}
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full text-text bg-shadow ">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Education
								</h1>
							</div>
							<ul className="flex flex-col w-full pt-4 pl-16 mt-2 mb-4 xxs:pl-0 flex-nowrap lg:flex-row">
								<EducationCard
									instituteLogo={ENULogo}
									instituteName="Edinburgh Napier University"
									courseTitle="BSc (Hons) Web Design and Development"
									startDate="Sep 2020"
									endDate="Jun 2022"
									grade="Expected: First"
								/>
								<EducationCard
									instituteLogo={COGCLogo}
									instituteName="City of Glasgow College"
									courseTitle="HND Web Design and Development"
									startDate="Aug 2019"
									endDate="Jun 2020"
									grade="A"
								/>
								<EducationCard
									instituteLogo={COGCLogo}
									instituteName="City of Glasgow College"
									courseTitle="HNC Web Design and Development"
									startDate="Aug 2018"
									endDate="Jun 2019"
									grade="A"
								/>
							</ul>
						</section>
						{/* Skills */}
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-text bg-shadow rounded-ful">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Skills
								</h1>
							</div>
							<div className="flex flex-col w-full pt-4 pl-16 mt-2 mb-4 xxs:pl-0">
								<SkillCard
									skillCategory="Development"
									skillIcon={DevelopmentIcon}
									iconBG="bg-linkBG"
								>
									<li className="flex flex-col items-center justify-center h-auto p-4 mt-4 mr-1 rounded-lg xl:px-8 last:mr-0 bg-aside lg:rounded-none lg:mt-0 first:rounded-l-md last:rounded-r-md">
										<h3 className="">ReactJS</h3>
									</li>
									<ul className="flex flex-col items-center h-auto p-4 mt-4 mr-1 rounded-lg xl:px-8 lg:items-start lg:rounded-none last:mr-0 bg-aside lg:mt-0 first:rounded-l-md last:rounded-r-md">
										<li className="">
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>TailwindUI
											</h3>
										</li>
										<li>
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>TailwindCSS
											</h3>
										</li>
										<li>
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>Emotion
											</h3>
										</li>
									</ul>
									<ul className="flex flex-row items-center justify-center w-full h-auto p-4 py-4 mt-4 mr-1 divide-x-2 rounded-lg xl:px-8 divide-divider last:mr-0 bg-aside lg:mt-0 lg:rounded-none">
										<li className="flex items-center h-full px-4">
											<h3 className="w-fit">
												Type
												<br />
												Script
											</h3>
										</li>
										<li className="flex items-center h-full px-4">
											<h3 className="w-fit">
												MERN
												<br />
												Stack
											</h3>
										</li>
									</ul>
									<ul className="flex flex-row items-center justify-center w-full h-auto p-4 py-4 mt-4 mr-1 divide-x-2 xl:px-8 divide-divider last:mr-0 bg-aside lg:mt-0 lg:rounded-r-xl">
										<li className="flex items-center h-full px-4">
											<h3 className="w-fit">Git</h3>
										</li>
										<ul className="flex flex-col items-center justify-center w-full h-auto px-2 mt-4 mr-1 divide-y-2 divide-divider last:mr-0 bg-aside lg:mt-0 ">
											<li className="flex items-center justify-center w-full h-full py-2 pb-4">
												<h3 className="w-fit">Node</h3>
											</li>
											<li className="flex items-center justify-center w-full h-full py-2 pt-4">
												<h3 className="w-fit">JS</h3>
											</li>
										</ul>
									</ul>
								</SkillCard>
								<SkillCard
									skillCategory="Design"
									skillIcon={DesignIcon}
									iconBG="bg-bluedot"
								>
									<ul className="flex flex-row items-center justify-center w-full h-auto p-4 py-4 mt-4 mr-1 divide-x-2 rounded-lg lg:rounded-none xl:px-8 lg:w-fit lg:rounded-l-xl divide-divider last:mr-0 bg-aside lg:mt-0 ">
										<li className="flex items-center h-full px-4">
											<h3 className="w-fit">
												Web
												<br />
												Design
											</h3>
										</li>
										<li className="flex items-center h-full px-4">
											<h3 className="w-fit">
												Mobile
												<br />
												Design
											</h3>
										</li>
									</ul>
									<li className="flex flex-col items-center justify-center h-auto p-4 mt-4 mr-1 rounded-lg xl:px-8 last:mr-0 bg-aside lg:rounded-none lg:mt-0 first:rounded-l-md last:rounded-r-md">
										<h3 className="">
											User
											<br /> Experience
										</h3>
									</li>
									<ul className="flex flex-col items-center justify-center w-full h-auto p-4 mt-4 mr-1 rounded-lg rounded-r lg:rounded-none xl:px-8 lg:items-start lg:w-fit last:mr-0 bg-aside lg:mt-0 first:rounded-l-md last:rounded-r-md">
										<li className="">
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>Wireframing
											</h3>
										</li>
										<li>
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>Prototyping
											</h3>
										</li>
										<li>
											<h3 className="w-auto py-1">
												<span className="mr-1">•</span>Testing
											</h3>
										</li>
									</ul>
									<li className="flex flex-col items-center justify-center h-auto p-4 mt-4 mr-1 rounded-lg xl:px-8 last:mr-0 bg-aside lg:rounded-none lg:mt-0 first:rounded-l-md last:rounded-r-md">
										<h3 className="">
											Design
											<br /> System
										</h3>
									</li>
								</SkillCard>
							</div>
						</section>
						{/* Awards */}
						<section className="w-full mb-4">
							<div className="flex flex-row w-full">
								<span className="w-8 h-8 my-auto text-5xl leading-6 text-center rounded-full text-text bg-shadow">
									•
								</span>
								<h1 className="ml-10 text-3xl font-semibold text-text_heading">
									Awards
								</h1>
							</div>
							<ul className="flex flex-col w-full pt-4 pl-16 mt-2 mb-4 xxs:pl-0 flex-nowrap lg:flex-row">
								<AwardCard
									instituteLogo={WorldskillsLogo}
									instituteName="WorldSkills UK"
									awardTitle="Highly Commended - WorkSkills UK Web Design"
									awardDate="Nov 2019"
								/>
								<AwardCard
									instituteLogo={ComputershareLogo}
									instituteName="Computershare"
									awardTitle="First Place Winner - ComputerShare Group Project "
									awardDate="May 2021"
								/>
							</ul>
						</section>
					</div>
					<div className="inline-block w-full sm:hidden h-fit ">
						<p className="text-center text-md text-text">Built using:</p>
						<div className="flex items-center justify-center w-full mt-1 mb-4">
							<div className="relative group">
								<Tooltip value="ReactJS" />
								<img
									src={ReactBadge}
									alt="ReactJS"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
							<div className="relative flex justify-center mx-4 w-fit group">
								<Tooltip value="TailwindCSS" />
								<img
									src={TailwindBadge}
									alt="Tailwind CSS"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
							<div className="relative flex justify-center w-fit group">
								<Tooltip value="Typescript" />
								<img
									src={TypescriptBadge}
									alt="Typescript"
									className="w-10 h-10 rounded-lg "
								/>
							</div>
						</div>
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

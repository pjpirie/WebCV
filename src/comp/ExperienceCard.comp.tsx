import React from "react";

interface ExperienceProps {
	logo: any;
	name: string;
	position: string;
	startdate: string;
	enddate: string;
	type: string;
	children: any;
}

const ExperienceCard: any = (props: ExperienceProps) => {
	const { logo, name, position, startdate, enddate, type, children } = props;
	return (
		<div className="p-4 pl-16 xxs:p-4">
			<ul className="flex">
				<li className="flex flex-col w-full lg:flex-row">
					<span className="hidden mr-8 text-3xl leading-6 text-text lg:inline-block">
						•
					</span>
					<div className="flex flex-col lg:w-2/5">
						<h5 className="text-text text-1x">
							{startdate} - {enddate} 🕑 {type}
						</h5>
						<div className="flex items-center my-2">
							<img
								src={logo}
								alt="XPC International Logo"
								className="w-12 h-12 rounded-md"
							/>
							<div className="flex flex-col ml-4 ">
								<h4 className="font-semibold text-text text-md">{position}</h4>
								<h2 className="text-xl font-bold text-text_heading">{name}</h2>
							</div>
						</div>
					</div>
					{children}
				</li>
			</ul>
		</div>
	);
};

export default ExperienceCard;

import React from "react";

interface ProjectProps {
	skillIcon: any;
	iconBG: string;
	skillCategory: string;
	children: JSX.Element[];
}

const SkillCard: any = (props: ProjectProps) => {
	const { skillIcon, iconBG, skillCategory, children } = props;
	return (
		<div className="flex flex-col items-center w-full h-auto p-4 mt-4 xl:justify-between xl:flex-row">
			<div className="flex flex-col items-center justify-center w-full lg:w-24">
				<div
					className={`flex flex-col items-center justify-center w-10 h-10 p-0 rounded-full ${iconBG}`}
				>
					<img
						src={skillIcon}
						alt={skillCategory}
						className="w-5 text-center"
					/>
				</div>
				<h2 className="mt-2 text-xl text-text_heading">{skillCategory}</h2>
			</div>
			<div className="flex flex-col w-full mt-2 text-left lg:flex-row lg:w-fit text-text_heading">
				{children}
			</div>
		</div>
	);
};

export default SkillCard;

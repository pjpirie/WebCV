import React from "react";

interface ProjectProps {
	instituteLogo: any;
	instituteName: string;
	courseTitle: string;
	startDate: string;
	endDate: string;
	grade: string;
}

const EducationCard: any = (props: ProjectProps) => {
	const {
		instituteLogo,
		instituteName,
		courseTitle,
		startDate,
		endDate,
		grade,
	} = props;
	return (
		<div className="flex flex-col w-full h-auto p-4 mt-4 mr-2 overflow-hidden rounded-lg last:mr-0 bg-aside lg:rounded-none lg:mt-0 lg:w-1/3 first:rounded-l-md last:rounded-r-md">
			<div className="flex flex-row items-center justify-between w-full h-auto rounded-full">
				<img
					src={instituteLogo}
					alt={`${instituteName} Logo`}
					className="mr-4 w-14 h-14"
				/>
				<h2 className="text-right break-words text-md text-text_heading">
					{instituteName}
				</h2>
			</div>
			<div className="flex flex-col items-start justify-between h-full mt-4">
				<h1 className="text-xl text-text_heading">{courseTitle}</h1>
				<div className="flex flex-row flex-wrap justify-between w-full mt-2">
					<h4 className="text-sm text-text">
						{startDate} - {endDate}
					</h4>
					<h4 className="text-sm text-text">{grade}</h4>
				</div>
			</div>
		</div>
	);
};

export default EducationCard;

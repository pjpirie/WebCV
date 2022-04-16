import React from "react";

interface ProjectProps {
	thumbnail: any;
	title: string;
	description: string;
	linkIcon: any;
	url: string;
}

const ProjectCard: any = (props: ProjectProps) => {
	const { thumbnail, title, description, linkIcon, url } = props;
	return (
		<div className="flex flex-col flex-1 w-full h-auto mt-4 overflow-hidden bg-gray-800 rounded-lg lg:rounded-none lg:mt-0 lg:w-1/2 lg:first:mr-2 lg:last:ml-2 first:rounded-l-md last:rounded-r-md">
			<div className="w-full h-auto">
				<div className="flex-1 w-full h-full rounded-full">
					<img
						src={thumbnail}
						alt={`${title} Thumbnail`}
						className="w-full h-full"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-between w-full h-full">
				<div className="w-full p-4">
					<div className="flex items-center w-full">
						<h2 className="text-xl font-bold text-gray-300 lg:text-2xl h-fill">
							{title}
						</h2>
					</div>
					<h3 className="mt-4 font-semibold text-gray-500 text-md lg:text-lg h-fill">
						{description}
					</h3>
				</div>
				<div className="flex items-center w-full p-4">
					<div className="flex items-center justify-center w-10 h-10 p-0 mr-4 bg-indigo-900 rounded-full">
						<img src={linkIcon} alt="Link Icon" className="h-5" />
					</div>
					<a
						className="font-semibold text-indigo-200 underline "
						href={url}
						target="_blank"
						rel="noreferrer"
					>
						{url}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

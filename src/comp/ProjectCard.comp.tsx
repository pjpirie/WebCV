import React, { useState, useEffect } from "react";

interface ProjectProps {
	thumbnail: any;
	title: string;
	description: string;
	linkIcon: any;
	url: string;
}

const getURL = (
	url: string,
	width: number,
	setURL: React.Dispatch<React.SetStateAction<string>>,
) => {
	if (width < 340) {
		setURL(`${url.substring(0, 15)}...`);
		return;
	}
	if (width < 400) {
		setURL(`${url.substring(0, 20)}...`);
		return;
	}
	if (width < 640) {
		setURL(url);
		return;
	}
	if (width < 768) {
		setURL(`${url.substring(0, 20)}...`);
		return;
	}
	if (width < 1024) {
		setURL(url);
		return;
	}
	if (width < 1280) {
		setURL(`${url.substring(0, 20)}...`);
		return;
	}
	setURL(url);
};

const ProjectCard: any = (props: ProjectProps) => {
	const { thumbnail, title, description, linkIcon, url } = props;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [dynamicUrl, setDynamicUrl] = useState("");

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
			getURL(url, window.innerWidth, setDynamicUrl);
		});
		return () => {
			window.removeEventListener("resize", () => {
				setWindowWidth(window.innerWidth);
				getURL(url, windowWidth, setDynamicUrl);
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col flex-1 w-full h-auto mt-4 overflow-hidden rounded-lg bg-aside lg:rounded-none lg:mt-0 lg:w-1/2 lg:first:mr-2 lg:last:ml-2 first:rounded-l-md last:rounded-r-md">
			<a
				href={url}
				target="_blank"
				rel="nofollow noreferrer"
				className="w-full h-auto cursor-pointer"
			>
				<div className="flex-1 w-full h-full rounded-full">
					<img
						src={thumbnail}
						alt={`${title} Thumbnail`}
						className="w-full h-full"
					/>
				</div>
			</a>
			<div className="flex flex-col justify-between w-full h-full">
				<div className="w-full p-4">
					<div className="flex items-center w-full">
						<h2 className="text-xl font-bold text-text_heading lg:text-2xl h-fill">
							{title}
						</h2>
					</div>
					<h3 className="mt-4 font-semibold text-text text-md lg:text-lg h-fill">
						{description}
					</h3>
				</div>
				<div className="flex items-center w-full p-4">
					<div className="flex items-center justify-center p-2 mr-4 rounded-full bg-linkBG">
						<img src={linkIcon} alt="Link Icon" className="max-w-8 min-w-8" />
					</div>
					<a
						className="text-lg font-semibold underline cursor-pointer text-link"
						href={url}
						target="_blank"
						rel="noreferrer"
					>
						{dynamicUrl}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

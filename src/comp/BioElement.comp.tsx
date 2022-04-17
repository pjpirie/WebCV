import React from "react";

interface BioProps {
	icon: any;
	iconAlt: string;
	iconOutlined?: boolean;
	isFlag?: boolean;
	keyName: string;
	value: string;
	url: string;
}

const defaultProps = {
	iconOutlined: false,
	isFlag: false,
};

const getIcon = (
	iconOutlined: boolean,
	isFlag: boolean,
	icon: any,
	iconAlt: string,
) => {
	if (iconOutlined) {
		return (
			<div className="items-center justify-center hidden p-2 mr-4 rounded-full bg-icon_bg xs:flex md:flex">
				<img src={icon} alt={iconAlt} className="max-w-8 min-w-8" />
			</div>
		);
	}
	if (isFlag) {
		return (
			<div className="w-auto h-8 mr-4">
				<img src={icon} alt={iconAlt} className="h-full rounded-lg" />
			</div>
		);
	}
	return (
		<div className="hidden mr-4 rounded-full md:flex xs:flex ">
			<img src={icon} alt={iconAlt} className="w-8" />
		</div>
	);
};

const getText = (isFlag: boolean, keyName: string, value: string) => {
	if (isFlag) {
		return (
			<>
				<h4 className="text-text_heading">{keyName}</h4>
				<h4 className="text-text">{value}</h4>
			</>
		);
	}
	return (
		<>
			<h4 className="text-text">{keyName}</h4>
			<h4 className="text-text_heading">{value}</h4>
		</>
	);
};

const BioElement: any = (props: BioProps) => {
	const {
		icon,
		iconAlt,
		keyName,
		value,
		iconOutlined = false,
		isFlag = false,
		url,
	} = props;
	return (
		<li className="flex flex-row items-center justify-start mb-2">
			<a
				href={url}
				target="_blank"
				rel="nofollow noreferrer"
				className="flex flex-row items-center justify-start cursor-pointer"
			>
				{getIcon(iconOutlined, isFlag, icon, iconAlt)}
				<div>{getText(isFlag, keyName, value)}</div>
			</a>
		</li>
	);
};

BioElement.defaultProps = defaultProps;
export default BioElement;

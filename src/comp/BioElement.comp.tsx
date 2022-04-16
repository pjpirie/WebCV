import React from "react";

interface BioProps {
	icon: any;
	iconAlt: string;
	iconOutlined?: boolean;
	isFlag?: boolean;
	keyName: string;
	value: string;
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
			<div className="items-center justify-center hidden w-8 h-8 p-0 mr-4 bg-indigo-900 rounded-full xs:flex md:flex">
				<img src={icon} alt={iconAlt} className="w-auto h-4" />
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
				<h4 className="text-gray-300">{keyName}</h4>
				<h4 className="text-gray-500">{value}</h4>
			</>
		);
	}
	return (
		<>
			<h4 className="text-gray-500">{keyName}</h4>
			<h4 className="text-gray-300">{value}</h4>
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
	} = props;
	return (
		<li className="flex flex-row items-center justify-start mb-2">
			{getIcon(iconOutlined, isFlag, icon, iconAlt)}
			<div>{getText(isFlag, keyName, value)}</div>
		</li>
	);
};

BioElement.defaultProps = defaultProps;
export default BioElement;

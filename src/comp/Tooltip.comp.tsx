interface ProjectProps {
	value: string;
}
const Tooltip = (props: ProjectProps) => {
	const { value } = props;
	// const {
	// 	offsetTop: top,
	// 	offsetLeft: left,
	// 	offsetWidth: width,
	// 	offsetHeight: height,
	// } = target.current;
	return (
		<div className="absolute left-0 z-50 flex p-2 transition-transform origin-bottom-left scale-0 translate-x-8 rounded shadow-md max-w-none whitespace-nowrap bg-main -top-6 group-hover:scale-100">
			<h1 className="inline-block text-sm font-semibold w-fit text-text_heading">
				{value}
			</h1>
		</div>
	);
};

export default Tooltip;

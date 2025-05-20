import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
	<Svg
		fill="none"
		stroke={props.color ? props.color : '#212121'}
		strokeWidth={1.5}
		className="size-6"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m4.5 12.75 6 6 9-13.5"
		/>
	</Svg>
);
export default CheckIcon;

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CancelIcon = (props: SvgProps) => (
	<Svg
		fill="none"
		stroke="#212121"
		strokeWidth={1.5}
		className="size-6"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18 18 6M6 6l12 12"
		/>
	</Svg>
);
export default CancelIcon;

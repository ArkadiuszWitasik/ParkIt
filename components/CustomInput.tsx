import {
	View,
	Text,
	TextInput,
	InputModeOptions,
	TextInputProps,
	Pressable,
} from 'react-native';
import React, { useState } from 'react';
import EyeIcon from '@/assets/Icons/EyeIcon';
import EyeSlashIcon from '@/assets/Icons/EyeSlashIcon';

type ExtraInputProps = {
	label: string;
	inputMode?: InputModeOptions;
	textInputStyles?: string;
	placeholder?: string;
	isPassword?: boolean;
	isError?: boolean;
};

type CustomInputProps = TextInputProps & ExtraInputProps;

const CustomInput = (props: CustomInputProps) => {
	const [inputBorder, setInputBorder] = useState<string>(
		'border-b-[3px] border-white'
	);

	const [hidePassword, setHidePassword] = useState<boolean>(true);

	const handleChangePasswordVisibility = () => {
		setHidePassword(!hidePassword);
	};

	const errorBorder = 'border-b-[3px] border-red-500';

	const customOnFocus = () => {
		props?.onFocus;
		setInputBorder('border-b-[3px] border-AppPrimaryColor');
	};

	const customOnBlur = () => {
		props?.onBlur;
		setInputBorder('border-b-[3px] border-SecoundLayer');
	};

	return (
		<View className="w-full flex flex-col gap-1">
			<Text className="text-[12px] font-MontserratRegular">{props.label}</Text>
			<TextInput
				className={`${props.textInputStyles} ${
					props.isError ? errorBorder : inputBorder
				} px-3 placeholder:color-GrayFontColor font-MontserratRegular pt-[3px]`}
				placeholder={props.placeholder}
				inputMode={props.inputMode}
				onBlur={customOnBlur}
				onFocus={customOnFocus}
				textContentType={props.textContentType}
				secureTextEntry={props.isPassword && hidePassword}
				value={props.value}
				onChange={props.onChange}
			/>
			{props.isPassword && (
				<Pressable
					className="absolute right-[10px] top-[31px] z-1"
					onPress={handleChangePasswordVisibility}
				>
					{hidePassword ? (
						<EyeSlashIcon
							style={{
								width: 24,
								height: 24,
							}}
						/>
					) : (
						<EyeIcon
							style={{
								width: 24,
								height: 24,
							}}
						/>
					)}
				</Pressable>
			)}
		</View>
	);
};

export default CustomInput;

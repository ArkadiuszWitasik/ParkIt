import { Stack } from 'expo-router';
import '../global.css';
import CustomHeader from '@/components/CustomHeader';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="sign-up" options={{ headerShown: false }} />
			<Stack.Screen
				name="(tabs)"
				options={{ header: () => <CustomHeader /> }}
			/>
		</Stack>
	);
}

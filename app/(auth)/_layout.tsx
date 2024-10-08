import BackButton from '@components/Buttons/BackButton';
import AppLogo from '@components/common/AppLogo';
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
  useSegments,
} from 'expo-router';

export default function AuthLayout() {
  const segments = useSegments();
  //console.log(segments);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: true,
          headerLeft: () => <BackButton />,
          headerTitle: () => <AppLogo width={108} height={33} />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: true,
          headerLeft: () => <BackButton />,
          headerTitle: () => <AppLogo width={108} height={33} />,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}

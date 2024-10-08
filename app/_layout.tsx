import useLoadFonts from '@hooks/useLoadFonts';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const loaded = useLoadFonts();

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(home)">
      <Stack.Screen name="(home)" />
    </Stack>
  );
}

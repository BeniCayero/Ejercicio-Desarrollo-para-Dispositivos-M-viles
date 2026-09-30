import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#102A43' }, headerTintColor: '#FFFFFF' }}>
      <Stack.Screen name="index" options={{ title: 'SIGMA' }} />
    </Stack>
  );
}

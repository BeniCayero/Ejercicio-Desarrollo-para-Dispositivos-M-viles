import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#102A43' }, headerTintColor: '#FFFFFF' }}>
      <Stack.Screen name="index" options={{ title: 'SIGMA' }} />
      <Stack.Screen name="equipos" options={{ title: 'Equipos' }} />
      <Stack.Screen name="equipos/[id]" options={{ title: 'Detalle de equipo' }} />
      <Stack.Screen name="tareas" options={{ title: 'Tareas' }} />
      <Stack.Screen name="nueva-tarea" options={{ title: 'Nueva tarea' }} />
    </Stack>
  );
}

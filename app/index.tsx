import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SIGMA</Text>
      <Text style={styles.title}>Sistema Inteligente de Gestión de Mantenimiento</Text>
      <Text style={styles.description}>
        Elegí una opción del menú para navegar por la aplicación.
      </Text>

      <View style={styles.menu}>
        <Link href="/equipos" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Equipos</Text>
          </Pressable>
        </Link>
        <Link href="/tareas" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Tareas</Text>
          </Pressable>
        </Link>
        <Link href="/nueva-tarea" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Nueva tarea</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F5F8FA' },
  logo: { fontSize: 18, fontWeight: '800', color: '#1877B9', letterSpacing: 2 },
  title: { fontSize: 28, fontWeight: '700', color: '#102A43', marginTop: 8 },
  description: { fontSize: 16, lineHeight: 24, color: '#52606D', marginTop: 16, marginBottom: 28 },
  menu: { gap: 12 },
  button: { backgroundColor: '#1877B9', padding: 16, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});

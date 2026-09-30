import { StyleSheet, Text, View } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SIGMA</Text>
      <Text style={styles.title}>Sistema Inteligente de Gestión de Mantenimiento</Text>
      <Text style={styles.description}>
        En esta práctica se navega entre las pantallas de la aplicación con Expo Router.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F5F8FA' },
  logo: { fontSize: 18, fontWeight: '800', color: '#1877B9', letterSpacing: 2 },
  title: { fontSize: 28, fontWeight: '700', color: '#102A43', marginTop: 8 },
  description: { fontSize: 16, lineHeight: 24, color: '#52606D', marginTop: 16, marginBottom: 28 },
});

import { StyleSheet, Text, View } from 'react-native';

export default function NuevaTareaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva orden de trabajo</Text>
      <Text style={styles.text}>
        En esta pantalla se va a cargar una nueva tarea de mantenimiento para un equipo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#FFFFFF' },
  title: { fontSize: 26, fontWeight: '700', color: '#102A43' },
  text: { fontSize: 16, lineHeight: 24, color: '#52606D', marginTop: 12 },
});

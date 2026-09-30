import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { getEquipmentById } from '../../data/equipment';

export default function EquipoDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = getEquipmentById(id);

  if (!item) {
    return <View style={styles.container}><Text>Equipo no encontrado.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.id}>{item.id.toUpperCase()}</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.label}>Código</Text>
      <Text style={styles.value}>{item.code}</Text>
      <Text style={styles.label}>Ubicación</Text>
      <Text style={styles.value}>{item.location}</Text>
      <Text style={styles.label}>Estado</Text>
      <Text style={styles.value}>{item.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#FFFFFF' },
  id: { color: '#1877B9', fontWeight: '800', fontSize: 16 },
  title: { color: '#102A43', fontSize: 28, fontWeight: '700', marginTop: 6, marginBottom: 28 },
  label: { color: '#52606D', fontSize: 14, fontWeight: '700', marginTop: 16 },
  value: { color: '#102A43', fontSize: 17, marginTop: 4, lineHeight: 24 },
});

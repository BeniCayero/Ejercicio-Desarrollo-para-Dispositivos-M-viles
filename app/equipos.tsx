import { FlatList, StyleSheet, Text, View } from 'react-native';
import { equipment } from '../data/equipment';

export default function EquiposScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipos registrados</Text>
      <Text style={styles.subtitle}>Activos a cargo del área de mantenimiento.</Text>
      <FlatList
        data={equipment}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>{item.location} · {item.status}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F8FA' },
  title: { fontSize: 26, fontWeight: '700', color: '#102A43' },
  subtitle: { color: '#52606D', marginTop: 6, marginBottom: 16, fontSize: 16 },
  list: { gap: 12, paddingBottom: 24 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#D9E2EC' },
  code: { color: '#1877B9', fontWeight: '800', fontSize: 13 },
  name: { color: '#102A43', fontSize: 18, fontWeight: '700', marginTop: 4 },
  detail: { color: '#52606D', marginTop: 5 },
});

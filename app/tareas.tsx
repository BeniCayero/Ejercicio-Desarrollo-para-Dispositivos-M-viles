import { FlatList, StyleSheet, Text, View } from 'react-native';
import { tasks } from '../data/tasks';

export default function TareasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas pendientes</Text>
      <Text style={styles.subtitle}>Órdenes de trabajo asignadas a los equipos.</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.id}>{item.id}</Text>
              <Text style={styles.priority}>{item.priority}</Text>
            </View>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.asset}>{item.asset}</Text>
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
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  id: { color: '#1877B9', fontWeight: '800' },
  priority: { color: '#C63B3B', fontWeight: '700', fontSize: 13 },
  taskTitle: { color: '#102A43', fontSize: 18, fontWeight: '700', marginTop: 8 },
  asset: { color: '#52606D', marginTop: 5 },
});

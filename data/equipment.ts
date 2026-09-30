import { Equipment } from '../types/equipment';

export const equipment: Equipment[] = [
  { id: 'eq-1', name: 'Bomba centrífuga 01', code: 'BOM-001', location: 'Sala de máquinas', status: 'Operativo' },
  { id: 'eq-2', name: 'Compresor A2', code: 'COM-002', location: 'Taller', status: 'En mantenimiento' },
  { id: 'eq-3', name: 'Tablero eléctrico Norte', code: 'TAB-003', location: 'Depósito', status: 'Operativo' },
];

export function getEquipmentById(id?: string) {
  return equipment.find((item) => item.id === id);
}

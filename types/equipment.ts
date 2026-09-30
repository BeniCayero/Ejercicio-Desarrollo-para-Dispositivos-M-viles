export type Equipment = {
  id: string;
  name: string;
  code: string;
  location: string;
  status: 'Operativo' | 'En mantenimiento' | 'Fuera de servicio';
};

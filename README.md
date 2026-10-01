# SIGMA - Navegación con Expo Router

Este proyecto corresponde a la **Actividad de la Clase 5 de Desarrollo para Dispositivos Móviles (CTC 2026)**.

SIGMA significa **Sistema Inteligente de Gestión de Mantenimiento**. La idea de esta actividad fue practicar la navegación entre distintas pantallas utilizando **React Native, Expo, TypeScript y Expo Router**.

En esta versión se creó una pantalla principal desde donde se puede acceder al listado de equipos, al listado de tareas y a una pantalla para cargar una nueva tarea. También se agregó una ruta dinámica para poder entrar al detalle de cada equipo.

El proyecto está preparado para trabajar con **Expo SDK 57** y se puede probar utilizando **Expo Go**.

## Navegación de la aplicación

La aplicación comienza en la pantalla de inicio, ubicada en `app/index.tsx`. Desde ahí aparecen tres opciones principales:

- **Equipos**
- **Tareas**
- **Nueva tarea**

Cada botón utiliza `Link` de Expo Router para navegar hacia su pantalla correspondiente.

En la pantalla de **Equipos** se muestra un listado mediante `FlatList`. Al tocar uno de los equipos se abre su detalle utilizando una ruta dinámica como:

```text
/equipos/eq-1
```

La pantalla `app/equipos/[id].tsx` obtiene ese `id` mediante `useLocalSearchParams` y busca la información correspondiente al equipo para mostrar sus datos.

La pantalla de **Tareas** funciona de forma similar, mostrando las órdenes de trabajo cargadas en los datos simulados.

Por último, **Nueva tarea** contiene la pantalla preparada para realizar la carga de una nueva orden.

Todas las pantallas forman parte del `Stack` definido en `app/_layout.tsx`, por lo que también se utiliza el encabezado de navegación y el botón para volver a la pantalla anterior.

## Estructura del proyecto

```text
sigma-navegacion/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── equipos.tsx
│   ├── equipos/
│   │   └── [id].tsx
│   ├── tareas.tsx
│   └── nueva-tarea.tsx
├── data/
│   ├── equipment.ts
│   └── tasks.ts
├── types/
│   ├── equipment.ts
│   └── task.ts
├── capturas/
├── global.css
├── metro.config.js
├── postcss.config.mjs
├── nativewind-env.d.ts
├── app.json
├── package.json
└── tsconfig.json
```

Separé los datos y los tipos de las pantallas para mantener el proyecto un poco más ordenado.

En `data/` se encuentran los equipos y tareas simulados, mientras que en `types/` están definidos los tipos de TypeScript utilizados por esos datos.

## Cómo ejecutar el proyecto

Primero hay que tener instalado **Node.js** y contar con **Expo Go** en el celular o con un emulador Android.

Dentro de la carpeta del proyecto se ejecutan los siguientes comandos:

```bash
npm install
npx expo start --clear
```

Después se puede escanear el código QR utilizando Expo Go.

En caso de utilizar un emulador Android, también se puede presionar:

```text
a
```

desde la terminal para abrir la aplicación.

## Expo Router

Para agregar Expo Router al proyecto se instalaron las dependencias necesarias:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

También se modificó el `package.json` para utilizar:

```json
"main": "expo-router/entry"
```

y se agregó la configuración correspondiente de Expo Router dentro de `app.json`.

La idea principal de Expo Router es que los archivos que se encuentran dentro de la carpeta `app/` representan las rutas de la aplicación.

Por ejemplo:

```text
app/index.tsx          → /
app/equipos.tsx        → /equipos
app/tareas.tsx         → /tareas
app/nueva-tarea.tsx    → /nueva-tarea
app/equipos/[id].tsx   → /equipos/:id
```

## NativeWind

También se instaló y configuró **NativeWind v5** para Expo SDK 57.

```bash
npm install --save-exact nativewind@5.0.0-rc.0 react-native-css@3.1.0-rc.0

npx expo install react-native-reanimated react-native-worklets react-native-safe-area-context expo-system-ui

npm install --save-dev --save-exact tailwindcss@4.1.12 @tailwindcss/postcss@4.1.12 postcss lightningcss@1.30.1
```

La configuración queda preparada mediante los archivos:

```text
global.css
postcss.config.mjs
metro.config.js
nativewind-env.d.ts
```

De todas formas, para esta actividad las pantallas usan solamente `StyleSheet` de React Native.

## Conceptos trabajados

En este ejercicio se practicaron principalmente:

- navegación utilizando **Expo Router**
- uso de `Stack`
- uso de `Link`
- `Link` junto con `asChild` y `Pressable`
- creación de rutas dinámicas con `[id].tsx`
- lectura de parámetros con `useLocalSearchParams`
- uso de `FlatList`
- separación de datos y tipos
- tipos de TypeScript (`type`)
- estilos utilizando `StyleSheet`

## Capturas

| Inicio | Equipos | Detalle de equipo |
|:---:|:---:|:---:|
| <img src="capturas/01-inicio.png" width="220" alt="Inicio" /> | <img src="capturas/02-equipos.png" width="220" alt="Equipos" /> | <img src="capturas/03-detalle-equipo.png" width="220" alt="Detalle de equipo" /> |

| Tareas | Nueva tarea |
|:---:|:---:|
| <img src="capturas/04-tareas.png" width="220" alt="Tareas" /> | <img src="capturas/05-nueva-tarea.png" width="220" alt="Nueva tarea" /> |

Las capturas muestran un recorrido básico por la aplicación:

**Inicio → Equipos → Detalle de un equipo → volver → Tareas → volver → Nueva tarea**

## Resultado

Al finalizar la actividad quedó funcionando la navegación principal de SIGMA.

Desde el menú se puede acceder correctamente a cada pantalla y, dentro del listado de equipos, seleccionar un equipo para abrir su información mediante una ruta dinámica.

El botón de volver del encabezado también permite regresar normalmente a la pantalla anterior.
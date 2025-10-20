# 🎬 Proyecto: Catálogo de Películas y Series — Reparto para 3 Personas

## 👥 Reparto de tareas

| Persona | Rol principal | Módulos | Archivos clave |
|----------|----------------|----------|----------------|
| 🧩 **Persona 1: Estructura y formulario** | Front-end base y alta de películas/series | HTML + formulario + renderizado de tarjetas + integración básica con JS | `index.html`, `formulario.js`, `peliculas.js` |
| 🔍 **Persona 2: Filtros, búsqueda y ordenación** | Lógica de filtrado, búsqueda y ordenación de valoraciones | JS de búsqueda, filtros por género/director, botón de “mejor valoradas”, contador | `filtros.js`, `peliculas.js` |
| 💾 **Persona 3: Estilos, edición, eliminación y almacenamiento** | Estilos CSS + edición/eliminación + persistencia localStorage + documentación | `styles.css`, `storage.js`, `README.md` |

---

## 🧩 Persona 1: Estructura y Formulario

### 🔧 Funcionalidades
- Crear la estructura HTML semántica de la app.
- Crear el formulario para añadir películas/series.
- Mostrar las películas/series en tarjetas.
- Validar que todos los campos estén completos antes de añadir.
- Mostrar las estrellas según la valoración.

### 🧾 Issues (8)
1. Crear estructura base en `index.html`
2. Crear formulario con campos: título, director, año, género y valoración (estrellas)
3. Implementar evento "Añadir al catálogo" en `formulario.js`
4. Validar datos del formulario
5. Crear función `mostrarPeliculas()` en `peliculas.js`
6. Generar tarjetas visuales con los datos
7. Mostrar estrellas según valoración (⭐)
8. Actualizar vista al añadir nueva película

### 🌿 Rama de trabajo
`feature/formulario-visualizacion`

---

## 🔍 Persona 2: Filtros, Búsqueda y Ordenación

### 🔧 Funcionalidades
- Implementar la búsqueda en tiempo real por título.
- Filtro por género mediante `<select>`.
- Filtro por director mediante `<input>`.
- Botón “Ver mejor valoradas”.
- Mostrar contador de elementos del catálogo.
- Botón “Limpiar filtros”.

### 🧾 Issues (7)
1. Implementar búsqueda en tiempo real (`filtros.js`)
2. Crear filtro por género (dropdown)
3. Crear filtro por director
4. Añadir botón “Ver mejor valoradas” (ordenar descendente por valoración)
5. Implementar contador total de películas visibles
6. Botón para limpiar filtros
7. Integrar todos los filtros con `mostrarPeliculas()`

### 🌿 Rama de trabajo
`feature/filtros-busqueda-orden`

---

## 💾 Persona 3: CSS, Edición, Eliminación y LocalStorage

### 🔧 Funcionalidades
- Crear estilos CSS modernos y responsive (móvil, tablet, escritorio).
- Implementar botones de “Editar” y “Eliminar” en cada tarjeta.
- Implementar persistencia con localStorage (guardar, cargar).
- Crear documentación `README.md` del proyecto.

### 🧾 Issues (9)
1. Crear estilos base (`styles.css`)
2. Diseñar tarjetas con flexbox o grid
3. Hacer la interfaz responsive
4. Añadir efectos visuales (hover, clicks, feedback)
5. Implementar botón “Eliminar” con confirmación
6. Implementar edición de película (reutilizando formulario)
7. Guardar catálogo automáticamente en `localStorage` (`storage.js`)
8. Cargar catálogo automáticamente al iniciar
9. Redactar y dar formato al `README.md`

### 🌿 Rama de trabajo
`feature/css-storage-edicion`

---

## 🔁 Flujo de trabajo en GitHub

1. **Cada persona** crea su rama desde `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/formulario-visualizacion
2. 
   

   

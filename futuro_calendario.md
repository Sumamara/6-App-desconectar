# 📅 Futuro: Calendario de Seguimiento, Hábitos y Medición de Bienestar

Este documento describe la especificación funcional y técnica para implementar una vista de **Calendario de Progreso** que permita al usuario visualizar con claridad cuánto ha mejorado y qué tanto le han ayudado sus rutinas de desconexión a lo largo del tiempo.

---

## 1. Visión y Propósito

Cuando un usuario completa sesiones diarias de desconexión, la constancia es el factor clave para consolidar hábitos neurobiológicos de autorregulación.
El **Calendario de Seguimiento** permite:
1. **Ver la constancia y racha activa:** Días consecutivos desconectando del trabajo y las pantallas.
2. **Visualizar el impacto emocional real:** Comparar el nivel de estrés/tensión inicial (Check-in 1-10) contra el estado de paz y alivio final (Check-out 1-10).
3. **Analizar qué rutinas o etapas funcionan mejor:** Detectar si ciertas combinaciones (ej. Caminata + Respiración Resonante vs. Yoga Nidra) producen mayores saltos de bienestar.

---

## 2. Estructura de Datos en `localStorage`

Cada vez que el usuario finaliza una rutina con el medidor activo, se añade un registro al historial:

```json
[
  {
    "id": "ses_1730000000000",
    "timestamp": "2026-10-15T18:45:00.000Z",
    "dateStr": "2026-10-15",
    "routineName": "Pausa Cuello",
    "durationMinutes": 15,
    "stagesCompleted": ["estirar", "respirar"],
    "scoreBefore": 3,
    "scoreAfter": 8,
    "improvement": 5
  }
]
```

Clave de almacenamiento sugerida: `zen_history_sessions`.

---

## 3. Elementos de la Interfaz del Calendario

### A. Resumen Superior de Métricas Clave (KPIs)
* 🔥 **Racha actual:** Ej. *7 días consecutivos*.
* ⏱️ **Tiempo total desconectado este mes:** Ej. *4 horas 20 min*.
* 📈 **Mejora promedio por sesión:** Ej. *+3.8 puntos de calma*.
* 🧘 **Sesión más frecuente:** Ej. *Micro-Pausa (2 min)*.

### B. Vista de Calendario Mensual (Heatmap Zen)
* Cada día del mes se representa en una cuadrícula (Lunes a Domingo).
* **Estados visuales del día:**
  * **Sin sesión:** Punto gris sutil.
  * **Sesión completada:** Círculo con borde índigo.
  * **Gran mejora (+4 a +6 puntos):** Círculo con brillo esmeralda/índigo (`box-shadow: 0 0 12px rgba(99, 102, 241, 0.4)`).
* Al tocar un día específico, se despliega una ficha emergente con las prácticas realizadas ese día y el cambio de estado (ej: *Antes: 3/10 ──▶ Después: 8/10*).

### C. Gráfica de Evolución Emocional
* Un gráfico lineal minimalista semanal o mensual (usando SVG nativo sin librerías pesadas) mostrando:
  * Línea roja/naranja tenue: Nivel al llegar (Antes).
  * Línea verde/índigo brillante: Nivel al salir (Después).
  * La separación entre ambas líneas representa visualmente el **"Alivio generado por la app"**.

---

## 4. Estrategia de Implementación Técnica

1. **Sin dependencias externas:** Implementar el renderizado del calendario con HTML/CSS puro y JavaScript Vanilla para mantener la app ligera y veloz.
2. **Acceso desde la interfaz:**
   - Agregar un botón discreto con icono de calendario `📅` o gráfica en el encabezado de la app o dentro del modal de configuración.
3. **Exportación / Respaldo:**
   - Botón para exportar el historial en formato JSON o CSV simple si el usuario desea guardar sus notas o métricas de salud mental.

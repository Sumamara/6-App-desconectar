# 🧠 Futuro: Etapa 5 • Entrenamiento de Mindfulness (7 Pasos)

Este documento especifica el diseño funcional, técnico y neurocientífico para incorporar una **5ª Etapa Opcional** en la aplicación **Desconectar**: un **Entrenamiento Progresivo de Mindfulness de 7 Pasos**, que el usuario puede activar o desactivar libremente desde los ajustes (⚙️).

---

## 1. Visión y Propósito

Actualmente, **Desconectar** se basa en un flujo diario de 4 etapas somáticas y cognitivas:
1. 🤸 **Estirar** (descarga muscular)
2. 🫁 **Respirar** (freno parasimpático)
3. ✍️ **Escribir** (cierre cognitivo y journaling)
4. 🧘 **Meditar** (ondas alfa/theta y descanso)

### ¿Por qué sumar una 5ª Etapa de "Entrenamiento Mindfulness"?
Muchos usuarios no solo buscan una desconexión rápida al final de la jornada, sino **entrenar activamente su capacidad de atención, metacognición y resiliencia emocional**.

A diferencia de la etapa 4 (que suele ser relajación pasiva o Yoga Nidra para soltar), esta 5ª etapa ofrece un **entrenamiento estructurado de 7 niveles progresivos** para desarrollar presencia mental de forma guiada día a día.

---

## 2. Activación / Desactivación desde el Engrane (⚙️)

Para mantener la app minimalista y no abrumar a quienes prefieren el flujo tradicional de 4 pasos, esta etapa es **100% configurable**:

### En el Modal de Ajustes (`⚙️ Gestionar Rutinas / Preferencias`):
* Se añade un interruptor switch:
  * **Título:** 🧠 Etapa 5: Entrenamiento Mindfulness
  * **Descripción:** Habilita un programa estructurado de 7 pasos para entrenar la atención plena y reducir la rumiación.
  * **Interruptor:** `[ Activado / Desactivado ]` (desactivado por defecto o configurable en primera apertura).

### Comportamiento en la Interfaz Principal:
* **Si está Desactivada:**
  * La app muestra la insignia tradicional: `4 Etapas`.
  * La lista contiene únicamente las etapas 1 a 4.
* **Si está Activada:**
  * La insignia cambia automáticamente a `5 Etapas`.
  * Se inserta la tarjeta **`🧠 5. Mindfulness`** con su propio acordeón, tiempo acumulado, biblioteca (⚙️) y selector de prácticas.

---

## 3. El Programa de Mindfulness en 7 Pasos

El entrenamiento se divide en **7 pasos neurocientíficos progresivos**, desde lo más tangible (cuerpo y respiración) hasta lo más sutil (desidentificación del pensamiento y compasión):

| Paso | Nombre del Paso | Foco Neurobiológico | Duración Sugerida | Formato |
| :---: | :--- | :--- | :---: | :---: |
| **1** | **El Ancla en la Respiración** | Estabilización de la atención ejecutiva en sensaciones táctiles (fosas nasales / abdomen). | 3 a 5 min | Audio guiado / Temporizador |
| **2** | **Conciencia y Escaneo Corporal** | Interocepción e ínsula anterior: notar tensiones físicas sin reaccionar ni juzgar. | 5 a 7 min | Audio guiado |
| **3** | **Apertura Sensorial y Sonidos** | Red de prominencia: ampliar la escucha del entorno sin etiquetar como "ruido molesto". | 5 min | Audio inmersivo / Guía |
| **4** | **Observación de Pensamientos (Defusión)** | Desactivación de la Red Neuronal por Defecto (DMN): ver pensamientos como hojas que flotan en un río. | 7 min | Meditación guiada |
| **5** | **Espacio de Aceptación Emocional** | Amígdala y corteza prefrontal: sostener sensaciones incómodas con curiosidad en lugar de evitación. | 7 a 8 min | Meditación guiada |
| **6** | **Bondad Amorosa y Autocompasión** | Activación del sistema de calma y apego seguro (oxitocina): disolver la autocrítica laboral. | 8 a 10 min | Audio guiado |
| **7** | **Presencia en la Vida Cotidiana** | Integración ejecutiva: transferir el estado de presencia al caminar, comunicarse y cerrar el día. | 5 a 10 min | Consigna guiada |

---

## 4. Dinámica de Uso y Progresión

Se contemplan dos formas de interactuar con el entrenamiento:

### A. Modo Progresivo (Paso a Paso Día a Día)
* La aplicación guarda el progreso del usuario (`mindfulness_current_step: 3`).
* Al seleccionar la etapa, la app sugiere automáticamente el paso que le corresponde:
  > *"Hoy te toca: Paso 3 • Apertura Sensorial y Sonidos"*
* Al completar la práctica, se marca el paso como completado y se desbloquea/recomienda el siguiente para el día posterior.
* Al terminar el Paso 7, se felicita al usuario y se le permite reiniciar el ciclo o elegir libremente cualquier práctica.

### B. Modo Selección Libre (Biblioteca de Etapa)
* El usuario puede desplegar el acordeón y elegir manualmente cualquiera de los 7 pasos si desea repetir su favorito (por ejemplo, repetir el Paso 4 de *Observación de Pensamientos* tras un día de alta carga mental).

---

## 5. Estructura de Datos en `localStorage`

```json
{
  "zen_settings": {
    "enable_stage_mindfulness": true,
    "mindfulness_training_level": 3,
    "mindfulness_history": [
      { "step": 1, "completedAt": "2026-10-10" },
      { "step": 2, "completedAt": "2026-10-11" },
      { "step": 3, "completedAt": "2026-10-12" }
    ]
  }
}
```

---

## 6. Integración con la UI Existente

1. **Preset de Entrenamiento Mindfulness:**
   * En la cuadrícula superior de recomendaciones ya existe una tarjeta reservada:
     * `⭐ Entrenamiento mindfulness • Toca para cargar`
   * Al hacer clic en este preset, automáticamente se activará la etapa 5 con el paso actual del usuario.

2. **Reproductor y Contador de Etapas:**
   * Si la etapa 5 está activa en la sesión del día, el reproductor mostrará dinámicamente:
     `Etapa X de 5` (en lugar de `Etapa X de 4`).

3. **Compatibilidad con Videos y Audios Propios (Cloudflare R2 / MP3):**
   * Cada uno de los 7 pasos puede vincularse a un audio o video MP4 propio de alta calidad con voz suave, libre de anuncios y sin distracciones.

---

## 7. Fases de Implementación Sugeridas

1. **Fase 1 (Ajustes & Switch UI):**
   * Añadir el toggle en el modal de gestión de rutinas (`check-enable-stage-mindfulness`).
   * Renderizar condicionalmente la tarjeta `card-stage-mindfulness` en `index.html`.
2. **Fase 2 (Catálogo de 7 Prácticas):**
   * Registrar en `FULL_CATALOG` los 7 items asociados a `stage: 'mindfulness'` con sus duraciones y consignas.
3. **Fase 3 (Lógica de Progresión y Recordatorio):**
   * Guardar el paso actual completado y mostrar una pequeña medalla o barra de progreso (ej. `Paso 3/7`).

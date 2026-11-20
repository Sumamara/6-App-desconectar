// ==========================================================================
// DESCONECTAR • LÓGICA DE RUTINA EN 4 ETAPAS (MOBILE FIRST)
// ==========================================================================

// 1. AVISO DE PROTOCOLO LOCAL (file:///)
if (window.location.protocol === 'file:') {
  const banner = document.getElementById('protocol-banner');
  if (banner) banner.style.display = 'block';
}

// 2. CATÁLOGO BASE ORGANIZADO EN LAS 4 ETAPAS
// 2. CATÁLOGO BASE ORGANIZADO EN LAS 4 ETAPAS (CON DURACIONES REALES AUDITADAS)
const defaultCatalog = [
  // ETAPA 1: ESTIRAR
  {
    id: 'est-micro',
    stage: 'estirar',
    type: 'timer',
    icon: 'ESTIRAR',
    title: "Levantarse y estirar brazos arriba (30 seg)",
    duration: 0.5,
    instructions: "Ponte de pie, despega la mirada de la pantalla y estira los brazos arriba. Abre el pecho, inhala profundo y suelta suavemente manos y piernas."
  },
  {
    id: 'est-walk',
    stage: 'estirar',
    type: 'timer',
    icon: 'MOVILIDAD',
    title: "Caminata suave de movilidad",
    duration: 5,
    instructions: "Ponte de pie y camina a paso relajado por la habitación o la oficina. Mueve los brazos libremente, gira los hombros en círculos y afloja el cuello."
  },
  {
    id: 'est-5min',
    stage: 'estirar',
    type: 'video',
    title: "Estiramiento 5 min · Relaja tu cuerpo y alivia tensiones",
    duration: 5,
    ytId: "DwRR59ektIs"
  },
  {
    id: 'est-1',
    stage: 'estirar',
    type: 'video',
    title: "Estiramiento de cuello y hombros",
    duration: 10,
    ytId: "s-7lyvblFNI"
  },
  {
    id: 'est-neck-10',
    stage: 'estirar',
    type: 'video',
    title: "Estiramiento de cuello (13 min)",
    duration: 13,
    ytId: "JFYCz-OIyJI"
  },
  {
    id: 'est-guided',
    stage: 'estirar',
    type: 'stretch-routine',
    icon: 'ESTIRAR',
    title: "Estiramiento guiado en etapas (15s · 5 min)",
    duration: 5,
    instructions: "Rutina guiada con locución por voz, tono de cambio y temporizador de 15 segundos por movimiento (5 min en 2 rondas de 10 posturas)."
  },
  {
    id: 'est-quick',
    stage: 'estirar',
    type: 'timer',
    icon: 'MOVILIDAD',
    title: "Movilidad y estiramiento suave (7 min)",
    duration: 7,
    instructions: "De pie o sentado con la espalda recta, realiza giros suaves de cuello, hombros y tronco. Abre el pecho e inhala profundo."
  },
  {
    id: 'est-2',
    stage: 'estirar',
    type: 'video',
    title: "Movilidad suave de espalda y columna",
    duration: 11,
    ytId: "4pKly2JojMw"
  },
  {
    id: 'est-3',
    stage: 'estirar',
    type: 'video',
    title: "Pausa activa de postura en escritorio",
    duration: 10,
    ytId: "s-7lyvblFNI"
  },

  // ETAPA 2: RESPIRAR
  {
    id: 'resp-resonante',
    stage: 'respirar',
    type: 'timer',
    icon: 'COHERENCIA',
    title: "Respiración diafragmática resonante",
    duration: 5,
    instructions: "Vas a respirar con el contador hasta 5 y luego, cuando se quite el contador, vas a seguir tú contando hasta 5 donde se sienta bien."
  },
  {
    id: 'resp-double',
    stage: 'respirar',
    type: 'timer',
    icon: 'RESPIRAR',
    title: "Opción doble inhalación",
    duration: 2,
    instructions: "Respirar profundo todo lo que puedas y con los pulmones llenos inhalar una vez más y exhalar por la boca."
  },
  {
    id: 'resp-ocean',
    stage: 'respirar',
    type: 'timer',
    icon: 'RESPIRAR',
    title: "Opción del mar",
    duration: 2,
    instructions: "Vas a respirar profundo todo lo que puedas y vas a exhalar haciendo un sonido con la garganta, hacerlo hasta que te sientas muy relajada al menos 2 minutos."
  },
  {
    id: 'resp-micro',
    stage: 'respirar',
    type: 'timer',
    icon: 'RESPIRAR',
    title: "Doble inhalación exprés (30 seg)",
    duration: 0.5,
    instructions: "Haz dos inhalaciones seguidas por la nariz: una profunda y larga, y enseguida una segunda inhalación corta para expandir los pulmones. Suelta el aire por la boca en una exhalación lenta y completa."
  },
  {
    id: 'resp-478-timer',
    stage: 'respirar',
    type: 'timer',
    icon: 'RESPIRAR',
    title: "Respiración 4-7-8 guiada (3 ciclos)",
    duration: 1,
    instructions: "Inhala suave por la nariz (4 segundos), sostén el aire (7 segundos) y exhala lento por la boca vaciando el pecho (8 segundos)."
  },
  {
    id: 'resp-resonante-vid',
    stage: 'respirar',
    type: 'video',
    title: "Coherencia cardíaca guiada con campanas",
    duration: 5,
    ytId: "Zsp00w0R3As"
  },
  {
    id: 'resp-1',
    stage: 'respirar',
    type: 'video',
    title: "Respiración 4-7-8 para calmar el sistema nervioso",
    duration: 5,
    ytId: "inpok4MKVLM"
  },
  {
    id: 'resp-2',
    stage: 'respirar',
    type: 'video',
    title: "Respiración cuadrada (Box Breathing)",
    duration: 4,
    ytId: "inpok4MKVLM"
  },
  {
    id: 'resp-3',
    stage: 'respirar',
    type: 'video',
    title: "Respiración diafragmática relajante",
    duration: 6,
    ytId: "vB6OxxhSzCA"
  },

  // ETAPA 3: ESCRIBIR
  {
    id: 'esc-4pasos',
    stage: 'escribir',
    type: 'writing',
    title: "Bloc de notas: Descarga mental (4 pasos)",
    duration: 5,
    promptTitle: "Descarga mental en 4 pasos",
    promptDesc: "Responde estas 4 preguntas con calma para soltar pendientes y salir del modo supervivencia.",
    promptSteps: [
      {
        q: "1. ¿Qué tienes en mente?",
        note: "No podemos relajarnos si la amígdala está activa; si nuestro sistema de supervivencia debe decir algo, escúchalo primero."
      },
      {
        q: "2. ¿Qué quedó pendiente del trabajo?",
        note: "Sal mentalmente del trabajo. Todo está escrito aquí; ya no necesitas tenerlo en mente."
      },
      {
        q: "3. ¿Qué le dirías a una amiga que pasa por lo mismo?",
        note: "Trátate de manera compasiva, no seas tan duro contigo mismo. Así salimos del modo supervivencia."
      },
      {
        q: "4. ¿Te sientes mejor o peor que al inicio?",
        note: "Si te sientes peor, cambia el método. Esto debe ser neutral o relajante."
      }
    ]
  },
  {
    id: 'esc-2',
    stage: 'escribir',
    type: 'writing',
    title: "Bloc de notas: Registro de gratitud (3 cosas)",
    duration: 3,
    promptTitle: "3 cosas que agradeces hoy",
    promptDesc: "Identifica y escribe 3 momentos, personas o detalles concretos por los que sientes gratitud hoy."
  },
  {
    id: 'esc-1',
    stage: 'escribir',
    type: 'writing',
    title: "Bloc de notas: Descarga mental (Brain Dump)",
    duration: 5,
    promptTitle: "Descarga mental",
    promptDesc: "Escribe todo lo que ronda en tu cabeza sin filtros. Vacía pendientes y preocupaciones para cerrar la jornada."
  },
  {
    id: 'esc-3',
    stage: 'escribir',
    type: 'writing',
    title: "Bloc de notas: Qué elijo soltar hoy",
    duration: 5,
    promptTitle: "Soltar lo que no está bajo mi control",
    promptDesc: "¿Qué situación o expectativa queda fuera de tu control hoy? Escríbela aquí para darle cierre."
  },
  {
    id: 'esc-4',
    stage: 'escribir',
    type: 'video',
    title: "Video: Journaling interactivo para cerrar el día",
    duration: 11,
    ytId: "JNbbebvlShI"
  },
  {
    id: 'esc-5',
    stage: 'escribir',
    type: 'video',
    title: "Video: Journaling guiado · Reflexión personal",
    duration: 19,
    ytId: "7YkmU8q7384"
  },

  // ETAPA 4: MEDITAR
  {
    id: 'med-5min',
    stage: 'meditar',
    type: 'video',
    title: "Meditación · Opción 5 minutos",
    duration: 5,
    ytId: "4xHqAfT1qTY"
  },
  {
    id: 'med-10min',
    stage: 'meditar',
    type: 'video',
    title: "Meditación · Opción 10 minutos",
    duration: 10,
    ytId: "v-pq2RQ7o1s"
  },
  {
    id: 'med-walk',
    stage: 'meditar',
    type: 'timer',
    icon: 'MEDITAR',
    title: "Meditación caminando (Kinhin)",
    duration: 5,
    instructions: "Camina a paso pausado y consciente. Nota el contacto de cada pie con el suelo; inhala en 3 pasos y exhala en 3 pasos."
  },
  {
    id: 'med-tension',
    stage: 'meditar',
    type: 'video',
    title: "Meditación para soltar tensiones",
    duration: 7,
    ytId: "KxRpK9ZGq4Y"
  },
  {
    id: 'med-nidra',
    stage: 'meditar',
    type: 'video',
    title: "Yoga Nidra: Calmar el sistema nervioso",
    duration: 18,
    ytId: "dCaf8NDr1wQ"
  },
  {
    id: 'med-1',
    stage: 'meditar',
    type: 'video',
    title: "Meditación mindfulness: Calma y atención",
    duration: 6,
    ytId: "vB6OxxhSzCA"
  },
  {
    id: 'med-2',
    stage: 'meditar',
    type: 'video',
    title: "Descanso profundo sin sueño (NSDR)",
    duration: 22,
    ytId: "n-NIuBD59bk"
  },
  {
    id: 'med-3',
    stage: 'meditar',
    type: 'video',
    title: "Sonidos de lluvia y naturaleza",
    duration: 5,
    ytId: "2OEL4P1Rz04"
  }
];

const STAGE_ORDER = ['estirar', 'respirar', 'escribir', 'meditar'];

// Prácticas desactivadas por defecto (se pueden activar desde Ajustes -> Personalizar <Etapa>)
const DEFAULT_HIDDEN_ITEM_IDS = [
  // Estirar (solo activas: levantarse, caminata, estiramiento 5 min y estiramientos de cuello)
  'est-guided', 'est-quick', 'est-2', 'est-3',
  // Respirar (activas: doble inhalación 30 seg, diafragmática resonante y doble inhalación; opción del mar desactivada)
  'resp-ocean', 'resp-478-timer', 'resp-resonante-vid', 'resp-1', 'resp-2', 'resp-3',
  // Escribir (solo activas: descarga mental 4 pasos y gratitud)
  'esc-1', 'esc-3', 'esc-4', 'esc-5',
  // Meditar (solo activas: opción 5 min y opción 10 min)
  'med-walk', 'med-tension', 'med-nidra', 'med-1', 'med-2', 'med-3'
];

// Cargar catálogo personalizado y lista de elementos ocultos (claves aisladas para prueba-original)
let customItems = JSON.parse(localStorage.getItem('zen_custom_stage_items') || '[]');
let fullCatalog = [...defaultCatalog, ...customItems];

const storedHiddenRaw = localStorage.getItem('zen_po_hidden_item_ids');
let hiddenItemIds = new Set(
  storedHiddenRaw !== null ? JSON.parse(storedHiddenRaw) : DEFAULT_HIDDEN_ITEM_IDS
);

// Cargar orden personalizado de las prácticas si fue modificado
const savedItemsOrder = JSON.parse(localStorage.getItem('zen_po_items_order') || 'null');
if (savedItemsOrder && Array.isArray(savedItemsOrder)) {
  const orderMap = new Map();
  savedItemsOrder.forEach((id, idx) => orderMap.set(id, idx));
  fullCatalog.sort((a, b) => {
    const orderA = orderMap.has(a.id) ? orderMap.get(a.id) : 9999;
    const orderB = orderMap.has(b.id) ? orderMap.get(b.id) : 9999;
    return orderA - orderB;
  });
}

// Definición de fábrica de los 5 presets con nombre
const PRESET_ORDER = ['micro', 'walk', 'neck', 'quick_disconnect', 'complete'];

const FACTORY_DEFAULT_PRESETS = {
  micro: {
    name: 'Micro-pausa',
    desc: 'Brazos arriba · Doble inhalación',
    stages: ['estirar', 'respirar'],
    options: ['est-micro', 'resp-micro']
  },
  walk: {
    name: 'Pausa activa',
    desc: 'Estiramiento 5 min',
    stages: ['estirar'],
    options: ['est-5min']
  },
  neck: {
    name: 'Tensión en cuello',
    desc: 'Alivio cervical guiado',
    stages: ['estirar'],
    options: ['est-neck-10']
  },
  quick_disconnect: {
    name: 'Desconexión rápida',
    desc: 'Estirar 5m y descarga en 4 pasos',
    stages: ['estirar', 'escribir'],
    options: ['est-5min', 'esc-4pasos']
  },
  complete: {
    name: 'Desconexión total',
    desc: 'Las 4 etapas completas',
    stages: ['estirar', 'respirar', 'escribir', 'meditar'],
    options: ['est-5min', 'resp-resonante', 'esc-4pasos', 'med-10min']
  }
};

function loadNamedPresets() {
  let overrides = {};
  try {
    overrides = JSON.parse(localStorage.getItem('zen_po_preset_overrides') || '{}') || {};
  } catch (e) {
    overrides = {};
  }
  const merged = {};
  PRESET_ORDER.forEach(key => {
    const base = FACTORY_DEFAULT_PRESETS[key];
    const ov = overrides[key];
    merged[key] = ov ? {
      name: ov.name || base.name,
      desc: ov.desc !== undefined ? ov.desc : base.desc,
      stages: Array.isArray(ov.stages) ? [...ov.stages] : [...base.stages],
      options: Array.isArray(ov.options) ? [...ov.options] : [...base.options]
    } : {
      name: base.name,
      desc: base.desc,
      stages: [...base.stages],
      options: [...base.options]
    };
  });
  return merged;
}

let DEFAULT_PRESETS = loadNamedPresets();

function getPresetTotalMin(preset) {
  if (!preset || !Array.isArray(preset.options)) return 0;
  return preset.options.reduce((sum, id) => {
    const item = fullCatalog.find(i => i.id === id);
    return sum + (item ? item.duration : 0);
  }, 0);
}

function formatPresetDuration(totalMin) {
  if (totalMin > 0 && totalMin < 1) return `${Math.round(totalMin * 60)} seg`;
  return `${Math.round(totalMin * 10) / 10} min`;
}

function syncNamedPresetCards() {
  PRESET_ORDER.forEach(key => {
    const card = document.getElementById(`preset-${key}`);
    const preset = DEFAULT_PRESETS[key];
    if (!card || !preset) return;
    const nameEl = card.querySelector('.preset-name');
    const descEl = card.querySelector('.preset-desc');
    const timeEl = card.querySelector('.preset-time');
    if (nameEl) nameEl.innerText = preset.name;
    if (descEl) descEl.innerText = preset.desc;
    if (timeEl) timeEl.innerText = formatPresetDuration(getPresetTotalMin(preset));
  });
}

// Estado de selección inicial (siempre inicia vacío, sin nada marcado)
let activeStages = new Set();
let selectedOptionIds = new Set();

// Estado del reproductor
let currentQueue = [];
let currentStepIdx = 0;
let ytPlayer = null;
let ytReady = false;
let progressTimer = null;
let transitionTimeout = null;

// Estado del Bloc Zen
let writingTimer = null;
let writingSecondsLeft = 0;
let writingTotalSeconds = 0;
let isWritingPaused = false;

// Estado del Temporizador Zen (Caminar / Levantarse / Kinhin)
let activityTimer = null;
let activitySecondsLeft = 0;
let activityTotalSeconds = 0;
let isActivityPaused = false;

// ==========================================================================
// ESTADO DE LA RUTINA DE ESTIRAMIENTO EN ETAPAS (15s • TOTAL 5 MIN • VOZ GUIADA)
// ==========================================================================
const STRETCH_POSTURE_DURATION = 15; // 15 segundos por movimiento
const STRETCH_TOTAL_ROUNDS = 2; // 2 rondas de 10 posturas = 20 etapas = 300 segundos = 5:00 min

const STRETCH_POSTURES = [
  {
    id: 'hombros-atras',
    title: 'Hombros hacia atrás',
    voiceText: 'Hombros hacia atrás',
    desc: 'Ruede los hombros en círculos lentos y amplios hacia atrás. Abra el pecho e inhale profundo.',
    icon: '01',
    tip: 'Inhale al subir los hombros y exhale al bajarlos para liberar el trapecio.'
  },
  {
    id: 'hombros-adelante',
    title: 'Hombros hacia adelante',
    voiceText: 'Hombros hacia adelante',
    desc: 'Gire suavemente los hombros en círculos hacia adelante, soltando la tensión de la espalda alta.',
    icon: '02',
    tip: 'Note cómo se expande y afloja la zona entre los omóplatos.'
  },
  {
    id: 'cuello-medialuna',
    title: 'Cuello: media luna atrás y adelante',
    voiceText: 'Cuello, media luna atrás y adelante',
    desc: 'Baje la barbilla y ruede suavemente de hombro a hombro en semicírculo adelante, y luego atrás.',
    icon: '03',
    tip: 'Movimiento fluido y controlado. No fuerce la extensión cervical.'
  },
  {
    id: 'diciendo-no',
    title: 'Cuello: diciendo que no',
    voiceText: 'Cuello, diciendo que no',
    desc: 'Gire lentamente la cabeza de izquierda a derecha, mirando sobre cada hombro.',
    icon: '04',
    tip: 'Mantenga la espalda erguida y suelte la tensión de la mandíbula.'
  },
  {
    id: 'diciendo-si',
    title: 'Cuello: diciendo que sí',
    voiceText: 'Cuello, diciendo que sí',
    desc: 'Asienta suavemente con la cabeza arriba y abajo, llevando la mirada con calma al techo y al pecho.',
    icon: '05',
    tip: 'Alargue el cuello sin comprimir la nuca.'
  },
  {
    id: 'brazo-un-lado',
    title: 'Brazo hacia un lado',
    voiceText: 'Brazo hacia un lado',
    desc: 'Cruce un brazo sobre el pecho y sosténgalo con la otra mano a la altura del antebrazo.',
    icon: '06',
    tip: 'Mantenga el hombro abajo y lejos de la oreja mientras respira.'
  },
  {
    id: 'brazo-otro-lado',
    title: 'Brazo hacia el otro lado',
    voiceText: 'Brazo hacia el otro lado',
    desc: 'Cambie de brazo: cruce el otro sobre el pecho y estire con respiración profunda.',
    icon: '07',
    tip: 'Equilibre ambos hombros y la musculatura escapular.'
  },
  {
    id: 'tocarse-pies',
    title: 'Tocarse los pies',
    voiceText: 'Tocarse los pies',
    desc: 'Incline el tronco hacia abajo buscando los pies o tobillos con rodillas ligeramente flexionadas.',
    icon: '08',
    tip: 'Descomprima la zona lumbar y estire isquiotibiales sin tirones.'
  },
  {
    id: 'hacerse-atras',
    title: 'Hacerse hacia atrás',
    voiceText: 'Hacerse hacia atrás',
    desc: 'Apoye las manos en la cintura o espalda baja y arquee suavemente el torso hacia atrás.',
    icon: '09',
    tip: 'Abra el pecho y contrarreste las horas frente al escritorio.'
  },
  {
    id: 'subir-pantorrillas',
    title: 'Subir pantorrillas',
    voiceText: 'Subir pantorrillas',
    desc: 'Apóyese en las puntas de los pies, eleve los talones y baje de forma controlada.',
    icon: '10',
    tip: 'Activa la bomba muscular de los gemelos y el retorno venoso.'
  }
];

let stretchTimer = null;
let currentStretchStageIdx = 0; // 0 a 19 (2 rondas de 10 posturas)
let stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION; // 15s
let stretchTotalSeconds = STRETCH_POSTURE_DURATION * STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS; // 300s (5 min)
let stretchTotalSecondsLeft = stretchTotalSeconds;
let isStretchPaused = false;
let isStretchVoiceEnabled = localStorage.getItem('zen_stretch_voice') !== 'false';
let isStretchChimeEnabled = localStorage.getItem('zen_stretch_chime') !== 'false';

// Estado de la biblioteca abierta
let currentLibraryStage = null;

// ==========================================================================
// RENDERIZADO Y CONTROL DE LAS ETAPAS
// ==========================================================================

// Toast informativo flotante para el botón (i) de cada categoría
function showStageInfoToast(text, title) {
  let toast = document.getElementById('stage-info-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'stage-info-toast';
    toast.className = 'stage-info-toast';
    document.body.appendChild(toast);
    toast.addEventListener('click', () => {
      toast.classList.remove('visible');
    });
  }

  toast.innerHTML = `
    <div class="stage-info-toast-header">
      <span class="stage-info-toast-title">${title}</span>
      <button type="button" class="stage-info-toast-close" aria-label="Cerrar">Cerrar</button>
    </div>
    <div class="stage-info-toast-body">${text}</div>
  `;

  const closeBtn = toast.querySelector('.stage-info-toast-close');
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      toast.classList.remove('visible');
    };
  }

  toast.classList.remove('visible');
  void toast.offsetWidth;
  toast.classList.add('visible');

  clearTimeout(window._stageInfoToastTimer);
  window._stageInfoToastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 6000);
}

let expandedStageAccordions = new Set();

function toggleStageMoreOptions(stageKey, event) {
  if (event) {
    event.stopPropagation();
  }
  if (expandedStageAccordions.has(stageKey)) {
    expandedStageAccordions.delete(stageKey);
  } else {
    expandedStageAccordions.add(stageKey);
  }
  renderAllStages();
}

function toggleStageChevronClick(stageKey, event) {
  if (event) {
    event.stopPropagation();
  }
  if (!activeStages.has(stageKey)) {
    activeStages.add(stageKey);
    expandedStageAccordions.add(stageKey);
    renderAllStages();
  } else {
    const stageItems = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected) {
      activeStages.delete(stageKey);
      expandedStageAccordions.delete(stageKey);
      renderAllStages();
    } else {
      toggleStageMoreOptions(stageKey, event);
    }
  }
}

function renderOptionItemHtml(item, isSelected, stageKey) {
  let iconTag = 'VIDEO';
  if (item.type === 'writing') iconTag = 'BLOC';
  if (item.type === 'timer') iconTag = 'TEMPORIZADOR';
  if (item.type === 'stretch-routine') iconTag = 'GUIADO · 15S';

  const durLabel = (item.duration > 0 && item.duration < 1) ? `${Math.round(item.duration * 60)} seg` : `${item.duration} min`;

  return `
    <div class="option-item ${isSelected ? 'selected' : ''}" onclick="toggleOption('${item.id}', '${stageKey}')">
      <input type="checkbox" class="option-checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleOption('${item.id}', '${stageKey}')">
      <div class="option-content">
        <div class="option-title">${escapeHtml(item.title)}</div>
        <div class="option-meta">
          <span>${durLabel}</span>
          <span>·</span>
          <span class="option-tag">${iconTag}</span>
        </div>
      </div>
    </div>
  `;
}

function renderAllStages() {
  STAGE_ORDER.forEach(stageKey => {
    const listEl = document.getElementById(`options-${stageKey}`);
    const cardEl = document.getElementById(`card-stage-${stageKey}`);
    const checkboxEl = document.getElementById(`check-stage-${stageKey}`);
    const badgeEl = document.getElementById(`badge-${stageKey}`);
    const chevronBtn = document.getElementById(`chevron-btn-${stageKey}`);

    if (!listEl || !cardEl) return;

    const isActive = activeStages.has(stageKey);
    if (checkboxEl) checkboxEl.checked = isActive;
    cardEl.classList.toggle('active', isActive);

    // Solo mostrar las prácticas que NO estén ocultas en la biblioteca
    const stageItems = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
    const selectedInStage = stageItems.filter(i => selectedOptionIds.has(i.id));
    const unselectedInStage = stageItems.filter(i => !selectedOptionIds.has(i.id));
    const stageMin = selectedInStage.reduce((sum, i) => sum + i.duration, 0);

    const isExpanded = expandedStageAccordions.has(stageKey);
    cardEl.classList.toggle('accordion-open', isExpanded && isActive);

    if (chevronBtn) {
      if (!isActive) {
        chevronBtn.style.visibility = 'visible';
        chevronBtn.style.opacity = '0.6';
        chevronBtn.title = 'Ver opciones';
        chevronBtn.setAttribute('aria-expanded', 'false');
      } else if (unselectedInStage.length > 0) {
        chevronBtn.style.visibility = 'visible';
        chevronBtn.style.opacity = '1';
        chevronBtn.title = isExpanded ? 'Contraer opciones adicionales' : `Ver +${unselectedInStage.length} opciones disponibles`;
        chevronBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      } else {
        chevronBtn.style.visibility = 'hidden';
      }
    }

    if (badgeEl) {
      const timeStr = (stageMin > 0 && stageMin < 1) ? `${Math.round(stageMin * 60)} seg` : `${Math.round(stageMin * 10) / 10} min`;
      badgeEl.innerText = timeStr;
    }

    if (stageItems.length === 0) {
      listEl.innerHTML = `
        <div class="empty-stage-msg">
          No hay prácticas visibles en esta etapa. Abra la biblioteca de etapa para activar o añadir prácticas.
        </div>
      `;
    } else if (selectedInStage.length > 0 && unselectedInStage.length > 0) {
      // Las seleccionadas se muestran directamente y las no seleccionadas se repliegan en el acordeón
      listEl.innerHTML = `
        <div class="stage-selected-options">
          ${selectedInStage.map(item => renderOptionItemHtml(item, true, stageKey)).join('')}
        </div>

        <div class="stage-accordion-content ${isExpanded ? 'open' : ''}" id="accordion-${stageKey}">
          <div class="stage-accordion-header-hint">Otras opciones disponibles</div>
          ${unselectedInStage.map(item => renderOptionItemHtml(item, false, stageKey)).join('')}
          <button type="button" class="stage-accordion-close-btn" onclick="toggleStageMoreOptions('${stageKey}', event)" title="Contraer opciones" aria-label="Contraer opciones">
            Contraer
          </button>
        </div>
      `;
    } else {
      // Si ninguna está seleccionada (o todas lo están), mostrar directamente
      listEl.innerHTML = stageItems.map(item => {
        const isSelected = selectedOptionIds.has(item.id);
        return renderOptionItemHtml(item, isSelected, stageKey);
      }).join('');
    }
  });

  updateTotalSummary();
  renderCustomPresets();
}

function toggleStage(stageKey, event) {
  if (!activeStages.has(stageKey)) {
    activeStages.add(stageKey);
    expandedStageAccordions.add(stageKey);
    renderAllStages();
  } else {
    const stageItems = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected) {
      activeStages.delete(stageKey);
      expandedStageAccordions.delete(stageKey);
      renderAllStages();
    } else {
      toggleStageMoreOptions(stageKey, event);
    }
  }
}

function onStageCheckboxClick(stageKey) {
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const cb = document.getElementById(`check-stage-${stageKey}`);
  if (!cb) return;
  const isChecked = cb.checked;
  if (isChecked) {
    activeStages.add(stageKey);
    const stageItems = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected && stageItems.length > 0) {
      selectedOptionIds.add(stageItems[0].id);
      expandedStageAccordions.add(stageKey); // Mostrar todas las opciones si no tenía nada seleccionado
    } else if (!hasAnySelected) {
      expandedStageAccordions.add(stageKey);
    } else {
      expandedStageAccordions.delete(stageKey);
    }
  } else {
    activeStages.delete(stageKey);
    expandedStageAccordions.delete(stageKey);
  }
  renderAllStages();
}

function toggleOption(itemId, stageKey) {
  activeCustomRoutineId = null;
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  if (selectedOptionIds.has(itemId)) {
    selectedOptionIds.delete(itemId);
  } else {
    selectedOptionIds.add(itemId);
    activeStages.add(stageKey);
  }
  renderAllStages();
}

// ==========================================================================
// PRESETS / RECOMENDACIONES RÁPIDAS
// ==========================================================================

let activeCustomRoutineId = null;

function applyPreset(presetKey, forceApply = false) {
  const targetCard = document.getElementById(`preset-${presetKey}`);
  const wasActive = targetCard && targetCard.classList.contains('active');

  activeCustomRoutineId = null;
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  expandedStageAccordions.clear();
  activeStages.clear();
  selectedOptionIds.clear();

  if (wasActive && !forceApply) {
    renderAllStages();
    return;
  }

  if (targetCard) targetCard.classList.add('active');

  const preset = DEFAULT_PRESETS[presetKey];
  if (preset) {
    preset.stages.forEach(s => activeStages.add(s));
    preset.options.forEach(opt => {
      // Si estaba oculta, reactivarla
      hiddenItemIds.delete(opt);
      selectedOptionIds.add(opt);
    });
    localStorage.setItem('zen_po_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));
  }

  renderAllStages();
}

// ==========================================================================
// GESTIÓN DE RUTINAS PERSONALIZADAS DEL USUARIO (MÚLTIPLES)
// ==========================================================================

function getCustomRoutinesList() {
  let list = [];
  const raw = localStorage.getItem('zen_custom_routines_list');
  if (raw) {
    try {
      list = JSON.parse(raw);
    } catch (e) {
      list = [];
    }
  }
  return Array.isArray(list) ? list : [];
}

function saveCustomRoutinesList(list) {
  localStorage.setItem('zen_custom_routines_list', JSON.stringify(list));
}

function renderCustomPresets() {
  syncNamedPresetCards();
  const container = document.getElementById('custom-presets-container');
  if (!container) return;

  const routines = getCustomRoutinesList();
  if (routines.length === 0) {
    container.innerHTML = '';
    return;
  }

  const total = routines.length;

  container.innerHTML = routines.map((r, idx) => {
    // Si es la única o si es la última en una lista impar (para que no quede a la mitad vacía)
    const isFullWidth = (total === 1) || (total % 2 !== 0 && idx === total - 1);
    const activeCls = (activeCustomRoutineId === r.id) ? ' active' : '';

    if (isFullWidth) {
      return `
        <button type="button" class="preset-card preset-custom-card custom-single${activeCls}" onclick="applyCustomRoutine('${r.id}')" id="preset-${r.id}">
          <div class="preset-custom-main">
            <div class="preset-index">GUARDADA</div>
            <div class="preset-name">${escapeHtml(r.name)}</div>
            <div class="preset-desc">${r.count} prácticas · Cargar selección</div>
          </div>
          <span class="preset-badge-tag">${r.totalMin} MIN</span>
        </button>
      `;
    } else {
      return `
        <button type="button" class="preset-card preset-custom-card custom-grid${activeCls}" onclick="applyCustomRoutine('${r.id}')" id="preset-${r.id}">
          <div class="preset-top">
            <span class="preset-index">GUARDADA</span>
            <span class="preset-time">${r.totalMin} MIN</span>
          </div>
          <div class="preset-name">${escapeHtml(r.name)}</div>
          <div class="preset-desc">${r.count} prácticas · Cargar</div>
        </button>
      `;
    }
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

function applyCustomRoutine(routineId, forceApply = false) {
  const routines = getCustomRoutinesList();
  const routine = routines.find(r => r.id === routineId);
  if (!routine) return;

  const wasActive = activeCustomRoutineId === routineId;

  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  expandedStageAccordions.clear();
  activeStages.clear();
  selectedOptionIds.clear();

  if (wasActive && !forceApply) {
    activeCustomRoutineId = null;
    renderAllStages();
    return;
  }

  activeCustomRoutineId = routineId;
  const targetCard = document.getElementById(`preset-${routineId}`);
  if (targetCard) targetCard.classList.add('active');

  const rStages = routine.activeStages || routine.stages || [];
  const rOptions = routine.selectedOptionIds || routine.options || [];

  rStages.forEach(s => activeStages.add(s));
  rOptions.forEach(id => {
    hiddenItemIds.delete(id);
    selectedOptionIds.add(id);
  });
  localStorage.setItem('zen_po_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

  renderAllStages();

  const cardAfter = document.getElementById(`preset-${routineId}`);
  if (cardAfter) cardAfter.classList.add('active');
}

// --------------------------------------------------------------------------
// COMPROBACIÓN DE SI LA SELECCIÓN ACTUAL ES UNA RUTINA NUEVA (NO EXISTE)
// --------------------------------------------------------------------------

function checkIfSelectionIsNewRoutine() {
  buildQueue();
  if (currentQueue.length === 0) return false;

  const currentOptionIds = new Set(currentQueue.map(i => i.id));
  const setsEqual = (setA, arrB) => {
    if (!arrB || setA.size !== arrB.length) return false;
    for (const item of arrB) {
      if (!setA.has(item)) return false;
    }
    return true;
  };

  // 1. Comparar con los presets estándar
  for (const key of Object.keys(DEFAULT_PRESETS)) {
    if (setsEqual(currentOptionIds, DEFAULT_PRESETS[key].options)) {
      return false;
    }
  }

  // 2. Comparar con las rutinas ya guardadas por el usuario
  const customRoutines = getCustomRoutinesList();
  for (const routine of customRoutines) {
    if (setsEqual(currentOptionIds, routine.selectedOptionIds || [])) {
      return false;
    }
  }

  return true; // Es una selección nueva y personalizada
}

// Acción del botón diskette 💾 en la barra inferior
async function onSaveStickyClick() {
  buildQueue();
  if (currentQueue.length === 0) {
    showZenToast('Selecciona al menos una práctica antes de guardar.', 'warning');
    return;
  }

  const activeStageKeys = Array.from(new Set(currentQueue.map(i => i.stage)));
  const currentOptionIdsList = currentQueue.map(i => i.id);
  const totalMin = currentQueue.reduce((sum, i) => sum + i.duration, 0);
  const defaultName = `Mi Rutina (${totalMin} min)`;

  const routineName = await showZenPrompt({
    title: 'Guardar rutina',
    subtitle: `Esta combinación tiene ${currentQueue.length} prácticas (${totalMin} min). Escribe un nombre para guardarla:`,
    defaultValue: defaultName,
    placeholder: 'Ej. Pausa de la Tarde',
    confirmText: 'Guardar Rutina'
  });

  if (!routineName) return; // Cancelado

  const cleanName = routineName.trim() || defaultName;
  const newRoutine = {
    id: 'routine_' + Date.now(),
    name: cleanName,
    activeStages: activeStageKeys,
    selectedOptionIds: currentOptionIdsList,
    totalMin: totalMin,
    count: currentQueue.length,
    createdAt: new Date().toISOString()
  };

  const routines = getCustomRoutinesList();
  routines.push(newRoutine);
  saveCustomRoutinesList(routines);

  renderCustomPresets();
  updateTotalSummary(); // Ocultará el diskette automáticamente ya que ahora coincide con una rutina guardada

  // Marcar como activa
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`preset-${newRoutine.id}`);
  if (card) card.classList.add('active');

  showZenToast(`Rutina "${cleanName}" guardada en sus recomendaciones.`, 'success');
}

// --------------------------------------------------------------------------
// SISTEMA DE MEDICIÓN DE MEJORA (ANTES Y DESPUÉS)
// --------------------------------------------------------------------------

let moodScoreBefore = null;
let moodScoreAfter = null;
let moodMeasureResolver = null;

function isMeasureImprovementEnabled() {
  const saved = localStorage.getItem('zen_po_measure_improvement');
  return saved === null ? true : saved === 'true';
}

function toggleMeasureImprovement(enabled) {
  localStorage.setItem('zen_po_measure_improvement', enabled ? 'true' : 'false');
}

function onMoodSliderChange(val) {
  const num = parseInt(val, 10);
  const bubble = document.getElementById('vas-thumb-bubble');
  if (bubble) {
    bubble.innerText = num;
    bubble.style.left = `calc(${num}% + ${12 - num * 0.24}px)`;
  }
}

function setMoodSliderVal(val) {
  const slider = document.getElementById('mood-slider-input');
  if (slider) {
    slider.value = val;
    onMoodSliderChange(val);
  }
}

function confirmMoodSlider() {
  const slider = document.getElementById('mood-slider-input');
  const score = slider ? parseInt(slider.value, 10) : 50;
  selectMoodScore(score);
}

function requestMoodRating(isAfter = false) {
  return new Promise((resolve) => {
    moodMeasureResolver = resolve;
    const modal = document.getElementById('mood-measure-modal');
    const titleEl = document.getElementById('mood-modal-title');
    const confirmBtn = document.getElementById('mood-slider-confirm-btn');
    const slider = document.getElementById('mood-slider-input');

    const defaultScore = 50;

    if (titleEl) {
      titleEl.innerText = '¿Qué tan estresado/a se siente en este momento?';
    }

    if (confirmBtn) {
      confirmBtn.innerText = !isAfter ? 'Comenzar rutina →' : 'Ver resultado →';
    }

    if (slider) {
      slider.value = defaultScore;
      onMoodSliderChange(defaultScore);
    }

    if (modal) modal.classList.add('active');
  });
}

function selectMoodScore(score) {
  const modal = document.getElementById('mood-measure-modal');
  if (modal) modal.classList.remove('active');

  if (moodMeasureResolver) {
    moodMeasureResolver(score);
    moodMeasureResolver = null;
  }
}

function closeMoodModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('mood-measure-modal');
  if (modal) modal.classList.remove('active');

  if (moodMeasureResolver) {
    moodMeasureResolver(null);
    moodMeasureResolver = null;
  }
}

// --------------------------------------------------------------------------
// MODAL DE CONFIGURACIÓN Y ELIMINACIÓN DE RUTINAS
// --------------------------------------------------------------------------

function openManageRoutinesModal() {
  const modal = document.getElementById('manage-routines-modal');
  const body = document.getElementById('manage-routines-body');
  if (!modal || !body) return;

  const measureCheck = document.getElementById('check-measure-improvement');
  if (measureCheck) {
    measureCheck.checked = isMeasureImprovementEnabled();
  }

  const pwaBtn = document.getElementById('btn-pwa-install');
  if (pwaBtn) {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      pwaBtn.innerText = 'Instalada';
      pwaBtn.disabled = true;
    } else {
      pwaBtn.innerText = 'Instalar';
      pwaBtn.disabled = false;
    }
  }

  renderCustomRoutinesManager();

  modal.classList.add('active');
  switchSettingsTab('general');
  renderPresetEditorList();
}

let expandedPresetEditorKey = null;
let expandedCustomRoutineId = null;

function toggleCustomRoutineEditor(routineId) {
  expandedCustomRoutineId = (expandedCustomRoutineId === routineId) ? null : routineId;
  renderCustomRoutinesManager();
}

function renderCustomRoutinesManager() {
  const body = document.getElementById('manage-routines-body');
  if (!body) return;

  const routines = getCustomRoutinesList();
  const stageNames = {
    estirar: 'Estirar',
    respirar: 'Respirar',
    escribir: 'Escribir',
    meditar: 'Meditar'
  };

  if (routines.length === 0) {
    body.innerHTML = `
      <div class="empty-routines-state">
        <strong>Sin rutinas personalizadas</strong>
        <p>
          Seleccione sus prácticas en la pantalla principal y pulse "Guardar" en la barra inferior para crear una rutina propia.
        </p>
      </div>
    `;
    return;
  }

  body.innerHTML = routines.map(r => {
    const isOpen = expandedCustomRoutineId === r.id;
    const routineOptions = Array.isArray(r.options) ? r.options : [];
    let editorHtml = '';

    if (isOpen) {
      const stagesHtml = STAGE_ORDER.map(stageKey => {
        const items = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
        if (items.length === 0) return '';
        return `
          <div class="preset-edit-stage-group">
            <div class="preset-edit-stage-label">${stageNames[stageKey]}</div>
            ${items.map(item => {
          const checked = routineOptions.includes(item.id) ? 'checked' : '';
          const dur = formatPresetDuration(item.duration);
          return `
                <label class="preset-edit-check-row">
                  <input type="checkbox" class="option-checkbox custom-edit-checkbox" data-routine-id="${r.id}" value="${item.id}" ${checked}>
                  <span class="preset-edit-check-title">${escapeHtml(item.title)}</span>
                  <span class="preset-edit-check-dur">${dur}</span>
                </label>
              `;
        }).join('')}
          </div>
        `;
      }).join('');

      editorHtml = `
        <div class="preset-edit-form">
          <div class="preset-edit-fields">
            <label class="preset-edit-field-label">Nombre
              <input type="text" id="custom-edit-name-${r.id}" class="zen-dialog-input" value="${escapeHtml(r.name)}">
            </label>
          </div>
          <div class="preset-edit-stages-wrap">${stagesHtml}</div>
          <div class="preset-edit-actions">
            <button type="button" class="btn-outline-sm" onclick="useCurrentSelectionForCustomRoutine('${r.id}')">Usar selección actual</button>
            <button type="button" class="btn btn-sm" onclick="saveCustomRoutineEdits('${r.id}')">Guardar</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="preset-edit-card ${isOpen ? 'open' : ''}" id="manage-row-${r.id}" style="margin-bottom: 8px;">
        <div class="preset-edit-header" onclick="toggleCustomRoutineEditor('${r.id}')">
          <div class="manage-routine-details">
            <div class="manage-routine-title">${escapeHtml(r.name)}</div>
            <div class="manage-routine-meta">${r.totalMin} MIN · ${r.count} PRÁCTICA${r.count === 1 ? '' : 'S'}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button type="button" class="btn-outline-sm" onclick="event.stopPropagation(); toggleCustomRoutineEditor('${r.id}')">
              ${isOpen ? 'Cerrar' : 'Editar'}
            </button>
            <button type="button" class="btn-delete-routine" onclick="event.stopPropagation(); deleteCustomRoutine('${r.id}')" title="Eliminar esta rutina">
              Borrar
            </button>
          </div>
        </div>
        ${editorHtml}
      </div>
    `;
  }).join('');
}

function useCurrentSelectionForCustomRoutine(routineId) {
  const checkboxes = document.querySelectorAll(`.custom-edit-checkbox[data-routine-id="${routineId}"]`);
  checkboxes.forEach(cb => {
    cb.checked = selectedOptionIds.has(cb.value);
  });
  showZenToast('Selección actual cargada. Pulsa Guardar para confirmar.', 'info');
}

function saveCustomRoutineEdits(routineId) {
  const nameInput = document.getElementById(`custom-edit-name-${routineId}`);
  const checkboxes = document.querySelectorAll(`.custom-edit-checkbox[data-routine-id="${routineId}"]:checked`);
  const chosenIds = Array.from(checkboxes).map(cb => cb.value);

  if (chosenIds.length === 0) {
    showZenToast('Selecciona al menos una práctica para esta rutina.', 'warning');
    return;
  }

  const chosenStages = Array.from(new Set(
    chosenIds.map(id => {
      const item = fullCatalog.find(i => i.id === id);
      return item ? item.stage : null;
    }).filter(Boolean)
  ));

  const totalMin = Math.round(
    chosenIds.reduce((sum, id) => {
      const item = fullCatalog.find(i => i.id === id);
      return sum + (item ? item.duration : 0);
    }, 0) * 10
  ) / 10;

  let routines = getCustomRoutinesList();
  routines = routines.map(r => {
    if (r.id !== routineId) return r;
    const newName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : r.name;
    return {
      ...r,
      name: newName,
      stages: chosenStages,
      options: chosenIds,
      activeStages: chosenStages,
      selectedOptionIds: chosenIds,
      count: chosenIds.length,
      totalMin
    };
  });
  saveCustomRoutinesList(routines);

  const card = document.getElementById(`preset-${routineId}`);
  const wasActive = (activeCustomRoutineId === routineId) || (card && card.classList.contains('active'));

  expandedCustomRoutineId = null;
  renderCustomRoutinesManager();
  renderCustomPresets();
  if (wasActive) applyCustomRoutine(routineId, true);
  updateTotalSummary();

  showZenToast('Rutina personalizada actualizada.', 'success');
}

function switchSettingsTab(tab) {
  const generalPanel = document.getElementById('settings-panel-general');
  const routinesPanel = document.getElementById('settings-panel-routines');
  const generalTab = document.getElementById('settings-tab-general');
  const routinesTab = document.getElementById('settings-tab-routines');
  const backBtn = document.getElementById('settings-back-btn');

  const isRoutines = tab === 'routines';
  if (generalPanel) generalPanel.style.display = isRoutines ? 'none' : 'block';
  if (routinesPanel) routinesPanel.style.display = isRoutines ? 'block' : 'none';
  if (backBtn) backBtn.style.display = isRoutines ? 'inline-flex' : 'none';
  if (generalTab) {
    generalTab.classList.toggle('active', !isRoutines);
    generalTab.setAttribute('aria-selected', !isRoutines ? 'true' : 'false');
  }
  if (routinesTab) {
    routinesTab.classList.toggle('active', isRoutines);
    routinesTab.setAttribute('aria-selected', isRoutines ? 'true' : 'false');
  }

  if (isRoutines) {
    renderPresetEditorList();
  }
}

function backToSettingsFromLibrary() {
  closeStageLibraryModal();
  openManageRoutinesModal();
}

function togglePresetEditor(presetKey) {
  expandedPresetEditorKey = (expandedPresetEditorKey === presetKey) ? null : presetKey;
  renderPresetEditorList();
}

function renderPresetEditorList() {
  const container = document.getElementById('preset-editor-list');
  if (!container) return;

  const stageNames = {
    estirar: 'Estirar',
    respirar: 'Respirar',
    escribir: 'Escribir',
    meditar: 'Meditar'
  };

  container.innerHTML = PRESET_ORDER.map(key => {
    const preset = DEFAULT_PRESETS[key];
    const totalMinStr = formatPresetDuration(getPresetTotalMin(preset));
    const count = preset.options.length;
    const isOpen = expandedPresetEditorKey === key;

    let editorHtml = '';
    if (isOpen) {
      const stagesHtml = STAGE_ORDER.map(stageKey => {
        const items = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
        if (items.length === 0) return '';
        return `
          <div class="preset-edit-stage-group">
            <div class="preset-edit-stage-label">${stageNames[stageKey]}</div>
            ${items.map(item => {
          const checked = preset.options.includes(item.id) ? 'checked' : '';
          const dur = formatPresetDuration(item.duration);
          return `
                <label class="preset-edit-check-row">
                  <input type="checkbox" class="option-checkbox preset-edit-checkbox" data-preset-key="${key}" value="${item.id}" ${checked}>
                  <span class="preset-edit-check-title">${escapeHtml(item.title)}</span>
                  <span class="preset-edit-check-dur">${dur}</span>
                </label>
              `;
        }).join('')}
          </div>
        `;
      }).join('');

      editorHtml = `
        <div class="preset-edit-form">
          <div class="preset-edit-fields">
            <label class="preset-edit-field-label">Nombre
              <input type="text" id="preset-edit-name-${key}" class="zen-dialog-input" value="${escapeHtml(preset.name)}">
            </label>
            <label class="preset-edit-field-label">Descripción corta
              <input type="text" id="preset-edit-desc-${key}" class="zen-dialog-input" value="${escapeHtml(preset.desc)}">
            </label>
          </div>
          <div class="preset-edit-stages-wrap">${stagesHtml}</div>
          <div class="preset-edit-actions">
            <button type="button" class="btn-outline-sm" onclick="useCurrentSelectionForPreset('${key}')">Usar selección actual</button>
            <button type="button" class="btn-outline-sm" onclick="resetSingleNamedPreset('${key}')">Por defecto</button>
            <button type="button" class="btn btn-sm" onclick="saveNamedPresetEdits('${key}')">Guardar</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="preset-edit-card ${isOpen ? 'open' : ''}">
        <div class="preset-edit-header" onclick="togglePresetEditor('${key}')">
          <div class="preset-edit-summary">
            <div class="manage-routine-title">${escapeHtml(preset.name)}</div>
            <div class="manage-routine-meta">${totalMinStr} · ${count} práctica${count === 1 ? '' : 's'}</div>
          </div>
          <button type="button" class="btn-outline-sm" onclick="event.stopPropagation(); togglePresetEditor('${key}')">
            ${isOpen ? 'Cerrar' : 'Editar'}
          </button>
        </div>
        ${editorHtml}
      </div>
    `;
  }).join('');
}

function useCurrentSelectionForPreset(presetKey) {
  const checkboxes = document.querySelectorAll(`.preset-edit-checkbox[data-preset-key="${presetKey}"]`);
  checkboxes.forEach(cb => {
    cb.checked = selectedOptionIds.has(cb.value);
  });
  showZenToast('Selección actual cargada. Pulsa Guardar para confirmar.', 'info');
}

function saveNamedPresetEdits(presetKey) {
  const nameInput = document.getElementById(`preset-edit-name-${presetKey}`);
  const descInput = document.getElementById(`preset-edit-desc-${presetKey}`);
  const checkboxes = document.querySelectorAll(`.preset-edit-checkbox[data-preset-key="${presetKey}"]:checked`);
  const chosenIds = Array.from(checkboxes).map(cb => cb.value);

  if (chosenIds.length === 0) {
    showZenToast('Selecciona al menos una práctica para esta rutina.', 'warning');
    return;
  }

  const chosenStages = Array.from(new Set(
    chosenIds.map(id => {
      const item = fullCatalog.find(i => i.id === id);
      return item ? item.stage : null;
    }).filter(Boolean)
  ));

  const base = FACTORY_DEFAULT_PRESETS[presetKey];
  const updated = {
    name: (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : base.name,
    desc: descInput ? descInput.value.trim() : base.desc,
    stages: chosenStages,
    options: chosenIds
  };

  let overrides = {};
  try {
    overrides = JSON.parse(localStorage.getItem('zen_po_preset_overrides') || '{}') || {};
  } catch (e) {
    overrides = {};
  }
  overrides[presetKey] = updated;
  localStorage.setItem('zen_po_preset_overrides', JSON.stringify(overrides));

  DEFAULT_PRESETS = loadNamedPresets();
  syncNamedPresetCards();

  const card = document.getElementById(`preset-${presetKey}`);
  if (card && card.classList.contains('active')) {
    applyPreset(presetKey, true);
  }

  expandedPresetEditorKey = null;
  renderPresetEditorList();
  showZenToast(`Rutina "${updated.name}" actualizada.`, 'success');
}

function resetSingleNamedPreset(presetKey) {
  let overrides = {};
  try {
    overrides = JSON.parse(localStorage.getItem('zen_po_preset_overrides') || '{}') || {};
  } catch (e) {
    overrides = {};
  }
  delete overrides[presetKey];
  localStorage.setItem('zen_po_preset_overrides', JSON.stringify(overrides));

  DEFAULT_PRESETS = loadNamedPresets();
  syncNamedPresetCards();

  const card = document.getElementById(`preset-${presetKey}`);
  if (card && card.classList.contains('active')) {
    applyPreset(presetKey, true);
  }

  renderPresetEditorList();
  showZenToast(`"${DEFAULT_PRESETS[presetKey].name}" restaurada por defecto.`, 'info');
}

async function resetAllNamedPresetsToDefault() {
  const confirmed = await showZenConfirm({
    title: 'Rutinas por defecto',
    message: '¿Deseas restablecer las 5 rutinas recomendadas a sus nombres y prácticas originales?',
    confirmText: 'Sí, restablecer',
    isDanger: false
  });
  if (!confirmed) return;

  localStorage.removeItem('zen_po_preset_overrides');
  DEFAULT_PRESETS = loadNamedPresets();
  syncNamedPresetCards();
  expandedPresetEditorKey = null;
  renderPresetEditorList();

  const activeCard = document.querySelector('.preset-card.active');
  if (activeCard && activeCard.id) {
    const activeKey = activeCard.id.replace('preset-', '');
    if (DEFAULT_PRESETS[activeKey]) applyPreset(activeKey, true);
  }

  showZenToast('Todas las rutinas recomendadas volvieron a sus valores por defecto.', 'success');
}

function closeManageRoutinesModal(event) {
  if (event && event.target !== event.currentTarget) return;
  expandedPresetEditorKey = null;
  expandedCustomRoutineId = null;
  const modal = document.getElementById('manage-routines-modal');
  if (modal) modal.classList.remove('active');
}

async function deleteCustomRoutine(routineId) {
  let routines = getCustomRoutinesList();
  const routine = routines.find(r => r.id === routineId);
  const routineName = routine ? routine.name : 'esta rutina';

  const confirmed = await showZenConfirm({
    title: 'Borrar Rutina',
    message: `¿Estás seguro de que deseas eliminar permanentemente "${routineName}"?`,
    isDanger: true,
    confirmText: 'Sí, borrar'
  });

  if (!confirmed) return;

  routines = routines.filter(r => r.id !== routineId);
  saveCustomRoutinesList(routines);

  openManageRoutinesModal();
  switchSettingsTab('routines');
  renderCustomPresets();
  updateTotalSummary();

  showZenToast(`Rutina "${routineName}" eliminada.`, 'info');
}

// --------------------------------------------------------------------------
// ACTUALIZAR BARRA FLOTANTE INFERIOR
// --------------------------------------------------------------------------

function updateTotalSummary() {
  buildQueue();

  const totalMin = currentQueue.reduce((sum, item) => sum + item.duration, 0);
  const count = currentQueue.length;

  const totalTimeEl = document.getElementById('bottom-total-time');
  const totalCountEl = document.getElementById('bottom-total-count');
  const startBtn = document.getElementById('start-btn');
  const saveBtn = document.getElementById('btn-save-sticky');

  if (totalTimeEl) {
    totalTimeEl.innerText = (totalMin > 0 && totalMin < 1)
      ? `${Math.round(totalMin * 60)} seg`
      : `${Math.round(totalMin * 10) / 10} min`;
  }
  if (totalCountEl) totalCountEl.innerText = count;
  if (startBtn) startBtn.disabled = count === 0;

  if (saveBtn) {
    const isNew = checkIfSelectionIsNewRoutine();
    saveBtn.style.display = isNew ? 'inline-flex' : 'none';
  }
}

// Construye la cola de reproducción en estricto orden: 1. Estirar -> 2. Respirar -> 3. Escribir -> 4. Meditar
function buildQueue() {
  currentQueue = [];

  STAGE_ORDER.forEach(stageKey => {
    if (activeStages.has(stageKey)) {
      const stageItems = fullCatalog.filter(i => i.stage === stageKey && selectedOptionIds.has(i.id) && !hiddenItemIds.has(i.id));
      currentQueue.push(...stageItems);
    }
  });
}

// ==========================================================================
// MODAL DE BIBLIOTECA POR ETAPA (ENGRANE ⚙️ EN CADA CATEGORÍA)
// ==========================================================================

function openStageLibraryFromSettings(stageKey) {
  closeManageRoutinesModal();
  openStageLibraryModal(stageKey);
}

function openStageLibraryModal(stageKey) {
  currentLibraryStage = stageKey;
  const modal = document.getElementById('stage-library-modal');
  const titleEl = document.getElementById('library-modal-title');
  const addBtn = document.getElementById('library-btn-add');

  if (!modal) return;

  const stageTitles = {
    estirar: 'Estirar',
    respirar: 'Respirar',
    escribir: 'Escribir',
    meditar: 'Meditar'
  };

  titleEl.innerText = `Personalizar ${stageTitles[stageKey] || stageKey}`;
  addBtn.innerText = `+ Añadir video de YouTube o práctica`;

  renderStageLibraryList();
  modal.classList.add('active');
}

function closeStageLibraryModal(event) {
  if (event && event.target !== event.currentTarget) return;
  closeReorderMenu();
  const modal = document.getElementById('stage-library-modal');
  if (modal) modal.classList.remove('active');
  currentLibraryStage = null;
}

function renderStageLibraryList() {
  const listEl = document.getElementById('library-items-list');
  if (!listEl || !currentLibraryStage) return;

  const stageItems = fullCatalog.filter(i => i.stage === currentLibraryStage);

  listEl.innerHTML = stageItems.map(item => {
    const isVisible = !hiddenItemIds.has(item.id);
    const isCustom = item.id.startsWith('cust-');
    let iconTag = 'VIDEO';
    if (item.type === 'writing') iconTag = 'BLOC';
    if (item.type === 'timer') iconTag = 'TEMPORIZADOR';
    if (item.type === 'stretch-routine') iconTag = 'GUIADO · 15S';

    return `
      <div class="library-item-row" id="lib-row-${item.id}" data-id="${item.id}" draggable="true">
        <div class="library-item-left">
          <input type="checkbox" 
                 class="library-toggle-checkbox" 
                 ${isVisible ? 'checked' : ''} 
                 onchange="toggleItemVisibility('${item.id}')"
                 title="Mostrar/Ocultar en pantalla principal">
          <div class="library-item-details">
            <div class="library-item-title">${escapeHtml(item.title)}</div>
            <div class="library-item-meta">
              <span>${(item.duration > 0 && item.duration < 1) ? `${Math.round(item.duration * 60)} seg` : `${item.duration} min`}</span>
              <span>·</span>
              <span>${iconTag}</span>
              ${!isVisible ? '<span class="library-hidden-tag">OCULTA</span>' : ''}
            </div>
          </div>
        </div>
        <div class="library-item-right-actions">
          ${isCustom ? `
            <button type="button" class="btn-delete-cust-item" onclick="deleteCustomItem('${item.id}')" title="Eliminar de mi biblioteca">
              Borrar
            </button>
          ` : ''}
          <div class="library-drag-handle" 
               title="Ajustar posición" 
               aria-label="Ajustar posición" 
               data-id="${item.id}"
               onclick="openReorderMenu(event, '${item.id}')">
            <svg width="14" height="18" viewBox="0 0 14 20" fill="currentColor" aria-hidden="true">
              <circle cx="3.5" cy="4" r="1.5"/>
              <circle cx="10.5" cy="4" r="1.5"/>
              <circle cx="3.5" cy="10" r="1.5"/>
              <circle cx="10.5" cy="10" r="1.5"/>
              <circle cx="3.5" cy="16" r="1.5"/>
              <circle cx="10.5" cy="16" r="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setupLibraryDragAndDrop(listEl);
}

// --------------------------------------------------------------------------
// REORDENAR PRÁCTICAS CON LOS 6 PUNTOS (DRAG & DROP Y MENÚ TÁCTIL)
// --------------------------------------------------------------------------

let currentReorderMenu = null;
let draggedItemId = null;

function closeReorderMenu() {
  if (currentReorderMenu) {
    currentReorderMenu.remove();
    currentReorderMenu = null;
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.library-drag-handle') && !e.target.closest('.reorder-popup-menu')) {
    closeReorderMenu();
  }
});

function openReorderMenu(event, itemId) {
  event.stopPropagation();
  closeReorderMenu();

  if (!currentLibraryStage) return;
  const stageItems = fullCatalog.filter(i => i.stage === currentLibraryStage);
  const index = stageItems.findIndex(i => i.id === itemId);
  if (index === -1) return;

  const isFirst = index === 0;
  const isLast = index === stageItems.length - 1;

  const menu = document.createElement('div');
  menu.className = 'reorder-popup-menu';
  menu.innerHTML = `
    <button type="button" class="reorder-popup-item" ${isFirst ? 'disabled' : ''} onclick="moveStageItem('${itemId}', -1)">
      Subir posición
    </button>
    <button type="button" class="reorder-popup-item" ${isLast ? 'disabled' : ''} onclick="moveStageItem('${itemId}', 1)">
      Bajar posición
    </button>
    <button type="button" class="reorder-popup-item" ${isFirst ? 'disabled' : ''} onclick="moveStageItemToExtreme('${itemId}', 'top')">
      Al inicio
    </button>
    <button type="button" class="reorder-popup-item" ${isLast ? 'disabled' : ''} onclick="moveStageItemToExtreme('${itemId}', 'bottom')">
      Al final
    </button>
  `;

  document.body.appendChild(menu);
  currentReorderMenu = menu;

  const targetEl = (event && event.currentTarget) || (event && event.target && event.target.closest('.library-drag-handle')) || document.querySelector(`[data-id="${itemId}"] .library-drag-handle`);
  const rect = targetEl ? targetEl.getBoundingClientRect() : { right: window.innerWidth - 20, bottom: 200, top: 150 };
  const menuWidth = 160;
  let left = rect.right - menuWidth;
  if (left < 10) left = 10;
  let top = rect.bottom + 4;
  if (top + 160 > window.innerHeight) {
    top = Math.max(10, rect.top - 150);
  }

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

function moveStageItem(itemId, direction) {
  closeReorderMenu();
  if (!currentLibraryStage) return;
  const stageItems = fullCatalog.filter(i => i.stage === currentLibraryStage);
  const currentIndex = stageItems.findIndex(i => i.id === itemId);
  if (currentIndex === -1) return;

  const targetIndex = currentIndex + direction;
  if (targetIndex < 0 || targetIndex >= stageItems.length) return;

  const newStageItems = [...stageItems];
  const temp = newStageItems[currentIndex];
  newStageItems[currentIndex] = newStageItems[targetIndex];
  newStageItems[targetIndex] = temp;

  saveStageItemsOrder(newStageItems.map(i => i.id));
}

function moveStageItemToExtreme(itemId, position) {
  closeReorderMenu();
  if (!currentLibraryStage) return;
  const stageItems = fullCatalog.filter(i => i.stage === currentLibraryStage);
  const currentIndex = stageItems.findIndex(i => i.id === itemId);
  if (currentIndex === -1) return;

  const itemToMove = stageItems.splice(currentIndex, 1)[0];
  if (position === 'top') {
    stageItems.unshift(itemToMove);
  } else {
    stageItems.push(itemToMove);
  }

  saveStageItemsOrder(stageItems.map(i => i.id));
}

function saveStageItemsOrder(reorderedStageItemIds) {
  if (!currentLibraryStage) return;

  const stageMap = new Map(fullCatalog.filter(i => i.stage === currentLibraryStage).map(i => [i.id, i]));
  const reorderedStageItems = reorderedStageItemIds.map(id => stageMap.get(id)).filter(Boolean);

  let newFullCatalog = [];
  let stageReplaced = false;

  for (const item of fullCatalog) {
    if (item.stage === currentLibraryStage) {
      if (!stageReplaced) {
        newFullCatalog.push(...reorderedStageItems);
        stageReplaced = true;
      }
    } else {
      newFullCatalog.push(item);
    }
  }

  fullCatalog = newFullCatalog;
  localStorage.setItem('zen_po_items_order', JSON.stringify(fullCatalog.map(i => i.id)));

  renderStageLibraryList();
  renderAllStages();
  updateTotalSummary();
}

async function resetStageDefaults() {
  if (!currentLibraryStage) return;

  const stageTitles = {
    estirar: '1. Estirar',
    respirar: '2. Respirar',
    escribir: '3. Escribir',
    meditar: '4. Meditar'
  };
  const stageName = stageTitles[currentLibraryStage] || currentLibraryStage;

  const confirmed = await showZenConfirm({
    title: 'Valores por Defecto',
    message: `¿Deseas restaurar el orden y visibilidad originales de "${stageName}"?`,
    confirmText: 'Sí, restaurar',
    isDanger: false
  });

  if (!confirmed) return;

  // 1. Obtener los items por defecto de esta etapa en su orden original
  const defaultStageItems = defaultCatalog.filter(i => i.stage === currentLibraryStage);
  const defaultIds = new Set(defaultStageItems.map(i => i.id));

  // 2. Obtener items personalizados de esta etapa (si existen se preservan al final)
  const customStageItems = fullCatalog.filter(i => i.stage === currentLibraryStage && !defaultIds.has(i.id));

  // 3. Unir orden original + personalizados
  const restoredStageItems = [...defaultStageItems, ...customStageItems];

  // 4. Reconstruir fullCatalog manteniendo las demás etapas
  let newFullCatalog = [];
  let stageReplaced = false;

  for (const item of fullCatalog) {
    if (item.stage === currentLibraryStage) {
      if (!stageReplaced) {
        newFullCatalog.push(...restoredStageItems);
        stageReplaced = true;
      }
    } else {
      newFullCatalog.push(item);
    }
  }

  fullCatalog = newFullCatalog;
  localStorage.setItem('zen_po_items_order', JSON.stringify(fullCatalog.map(i => i.id)));

  // 5. Restablecer visibilidad según DEFAULT_HIDDEN_ITEM_IDS para esta etapa
  const defaultHiddenSet = new Set(DEFAULT_HIDDEN_ITEM_IDS);
  restoredStageItems.forEach(item => {
    if (defaultHiddenSet.has(item.id)) {
      hiddenItemIds.add(item.id);
    } else {
      hiddenItemIds.delete(item.id);
    }
  });
  localStorage.setItem('zen_po_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

  // 6. Refrescar lista y pantalla principal
  renderStageLibraryList();
  renderAllStages();
  updateTotalSummary();

  showZenToast(`Valores originales de ${stageName} restaurados 🔄`, 'success');
}

function reorderStageItem(sourceId, targetId, placeBefore) {
  if (!currentLibraryStage) return;
  const stageItems = fullCatalog.filter(i => i.stage === currentLibraryStage);
  const sourceIdx = stageItems.findIndex(i => i.id === sourceId);
  if (sourceIdx === -1) return;

  const itemToMove = stageItems.splice(sourceIdx, 1)[0];
  let targetIdx = stageItems.findIndex(i => i.id === targetId);
  if (targetIdx === -1) {
    stageItems.push(itemToMove);
  } else {
    if (!placeBefore) targetIdx++;
    stageItems.splice(targetIdx, 0, itemToMove);
  }

  saveStageItemsOrder(stageItems.map(i => i.id));
}

function setupLibraryDragAndDrop(container) {
  const rows = container.querySelectorAll('.library-item-row');

  rows.forEach(row => {
    // HTML5 Drag and Drop (Mouse / Desktop)
    row.addEventListener('dragstart', (e) => {
      draggedItemId = row.getAttribute('data-id');
      row.classList.add('is-dragging');
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', draggedItemId || '');
      }
    });

    row.addEventListener('dragend', () => {
      row.classList.remove('is-dragging');
      rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
      draggedItemId = null;
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
      if (!draggedItemId || draggedItemId === row.getAttribute('data-id')) return;

      const rect = row.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        row.classList.add('drag-over-top');
        row.classList.remove('drag-over-bottom');
      } else {
        row.classList.add('drag-over-bottom');
        row.classList.remove('drag-over-top');
      }
    });

    row.addEventListener('dragleave', () => {
      row.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    row.addEventListener('drop', (e) => {
      e.preventDefault();
      const targetId = row.getAttribute('data-id');
      const isTop = row.classList.contains('drag-over-top');
      row.classList.remove('drag-over-top', 'drag-over-bottom');

      if (!draggedItemId || draggedItemId === targetId) return;
      reorderStageItem(draggedItemId, targetId, isTop);
    });
  });

  // Touch drag para dispositivos táctiles en el tirador de 6 puntos
  const handles = container.querySelectorAll('.library-drag-handle');
  handles.forEach(handle => {
    let startY = 0;
    let initialRow = null;
    let isTouchMoving = false;

    handle.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      startY = touch.clientY;
      initialRow = handle.closest('.library-item-row');
      isTouchMoving = false;
    }, { passive: true });

    handle.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      if (Math.abs(touch.clientY - startY) > 8) {
        isTouchMoving = true;
        if (e.cancelable) e.preventDefault();
        if (initialRow) initialRow.classList.add('is-dragging');

        const elUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);
        const targetRow = elUnderTouch ? elUnderTouch.closest('.library-item-row') : null;
        rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));

        if (targetRow && targetRow !== initialRow) {
          const rect = targetRow.getBoundingClientRect();
          if (touch.clientY < rect.top + rect.height / 2) {
            targetRow.classList.add('drag-over-top');
          } else {
            targetRow.classList.add('drag-over-bottom');
          }
        }
      }
    }, { passive: false });

    handle.addEventListener('touchend', (e) => {
      if (!isTouchMoving) return;
      if (initialRow) initialRow.classList.remove('is-dragging');

      const targetRow = container.querySelector('.drag-over-top, .drag-over-bottom');
      if (targetRow && initialRow) {
        const sourceId = initialRow.getAttribute('data-id');
        const targetId = targetRow.getAttribute('data-id');
        const isTop = targetRow.classList.contains('drag-over-top');
        targetRow.classList.remove('drag-over-top', 'drag-over-bottom');
        if (sourceId && targetId && sourceId !== targetId) {
          reorderStageItem(sourceId, targetId, isTop);
        }
      }
    });
  });
}

function toggleItemVisibility(itemId) {
  if (hiddenItemIds.has(itemId)) {
    hiddenItemIds.delete(itemId);
  } else {
    hiddenItemIds.add(itemId);
    if (selectedOptionIds.has(itemId)) {
      selectedOptionIds.delete(itemId);
    }
  }

  localStorage.setItem('zen_po_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));
  renderStageLibraryList();
  renderAllStages();
}

async function deleteCustomItem(itemId) {
  const item = fullCatalog.find(i => i.id === itemId);
  const title = item ? item.title : 'esta práctica';

  const confirmed = await showZenConfirm({
    title: 'Eliminar Práctica',
    message: `¿Deseas eliminar permanentemente "${title}" de tu biblioteca?`,
    isDanger: true,
    confirmText: 'Sí, eliminar'
  });

  if (!confirmed) return;

  customItems = customItems.filter(i => i.id !== itemId);
  localStorage.setItem('zen_custom_stage_items', JSON.stringify(customItems));

  fullCatalog = fullCatalog.filter(i => i.id !== itemId);
  selectedOptionIds.delete(itemId);
  hiddenItemIds.delete(itemId);
  localStorage.setItem('zen_po_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

  renderStageLibraryList();
  renderAllStages();
  showZenToast('Práctica eliminada de la biblioteca.', 'info');
}

// --------------------------------------------------------------------------
// MODAL PARA AÑADIR NUEVA PRÁCTICA (DENTRO DE LA BIBLIOTECA)
// --------------------------------------------------------------------------

function openAddPracticeModal() {
  if (!currentLibraryStage) return;

  const modal = document.getElementById('add-practice-modal');
  const titleInput = document.getElementById('add-input-title');
  const urlInput = document.getElementById('add-input-url');
  const instrInput = document.getElementById('add-input-instructions');
  const typeSelect = document.getElementById('add-input-type');
  const durationInput = document.getElementById('add-input-duration');

  titleInput.value = '';
  urlInput.value = '';
  instrInput.value = '';
  durationInput.value = '5';

  if (currentLibraryStage === 'escribir') {
    typeSelect.value = 'writing';
  } else {
    typeSelect.value = 'youtube';
  }
  onAddTypeChange();

  modal.classList.add('active');
  setTimeout(() => titleInput.focus(), 100);
}

function closeAddPracticeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('add-practice-modal');
  if (modal) modal.classList.remove('active');
}

function onAddTypeChange() {
  const type = document.getElementById('add-input-type').value;
  const groupUrl = document.getElementById('group-add-url');
  const groupInstr = document.getElementById('group-add-instructions');

  if (type === 'youtube') {
    groupUrl.style.display = 'block';
    groupInstr.style.display = 'none';
  } else {
    groupUrl.style.display = 'none';
    groupInstr.style.display = 'block';
  }
}

function saveNewPracticeFromModal() {
  const title = document.getElementById('add-input-title').value.trim();
  const type = document.getElementById('add-input-type').value;
  const duration = parseInt(document.getElementById('add-input-duration').value) || 5;
  const url = document.getElementById('add-input-url').value.trim();
  const instructions = document.getElementById('add-input-instructions').value.trim();

  if (!title) {
    showZenToast('Por favor escribe un nombre para la práctica.', 'warning');
    return;
  }

  let newItem = null;
  const stageKey = currentLibraryStage || 'estirar';

  if (type === 'youtube') {
    const ytId = extractYouTubeId(url);
    if (!ytId) {
      showZenToast('El enlace o ID de YouTube no es válido.', 'error');
      return;
    }
    newItem = {
      id: 'cust-' + Date.now(),
      stage: stageKey,
      type: 'video',
      title,
      duration,
      ytId
    };
  } else if (type === 'writing') {
    newItem = {
      id: 'cust-' + Date.now(),
      stage: stageKey,
      type: 'writing',
      title,
      duration,
      promptTitle: title,
      promptDesc: instructions || 'Escriba libremente para cerrar el día.'
    };
  } else {
    // timer
    newItem = {
      id: 'cust-' + Date.now(),
      stage: stageKey,
      type: 'timer',
      icon: 'PRÁCTICA',
      title,
      duration,
      instructions: instructions || 'Realice esta práctica a paso relajado y consciente.'
    };
  }

  customItems.push(newItem);
  localStorage.setItem('zen_custom_stage_items', JSON.stringify(customItems));

  fullCatalog.push(newItem);
  selectedOptionIds.add(newItem.id);
  activeStages.add(stageKey);

  closeAddPracticeModal();
  renderStageLibraryList();
  renderAllStages();

  showZenToast(`✅ "${title}" añadida a tu biblioteca`, 'success');
}

// ==========================================================================
// MODAL DE INFORMACIÓN CIENTÍFICA (ℹ️ AL LADO DEL TÍTULO)
// ==========================================================================

function openHowToUseModal() {
  const modal = document.getElementById('how-to-use-modal');
  if (modal) modal.classList.add('active');
}

function closeHowToUseModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('how-to-use-modal');
  if (modal) modal.classList.remove('active');
}

function openScientificInfoModal() {
  const modal = document.getElementById('scientific-info-modal');
  if (modal) modal.classList.add('active');
}

function closeScientificInfoModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('scientific-info-modal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// SISTEMA DE NOTIFICACIONES TOAST Y DIÁLOGOS ZEN (SIN ALERT / PROMPT / CONFIRM)
// ==========================================================================

function showZenToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('zen-toast-container');
  if (!container) return;

  const tags = {
    success: 'LISTO',
    error: 'ERROR',
    warning: 'AVISO',
    info: 'NOTA'
  };

  const toast = document.createElement('div');
  toast.className = `zen-toast zen-toast-${type}`;
  toast.innerHTML = `
    <span class="zen-toast-tag">${tags[type] || 'NOTA'}</span>
    <span class="zen-toast-text">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, duration);
}

let zenPromptResolver = null;

function showZenPrompt({ title, subtitle, defaultValue = '', placeholder = '', confirmText = 'Aceptar' }) {
  return new Promise((resolve) => {
    zenPromptResolver = resolve;
    const modal = document.getElementById('zen-prompt-modal');
    const titleEl = document.getElementById('zen-prompt-title');
    const subtitleEl = document.getElementById('zen-prompt-subtitle');
    const inputEl = document.getElementById('zen-prompt-input');
    const confirmBtn = document.getElementById('zen-prompt-confirm-btn');

    titleEl.innerText = title || 'Ingresa un valor';
    subtitleEl.innerText = subtitle || '';
    inputEl.value = defaultValue;
    inputEl.placeholder = placeholder;
    confirmBtn.innerText = confirmText;

    modal.classList.add('active');

    inputEl.onkeydown = (e) => {
      if (e.key === 'Enter') {
        confirmZenPrompt();
      } else if (e.key === 'Escape') {
        cancelZenPrompt();
      }
    };

    setTimeout(() => {
      inputEl.focus();
      inputEl.select();
    }, 100);
  });
}

function confirmZenPrompt() {
  const inputEl = document.getElementById('zen-prompt-input');
  const val = inputEl ? inputEl.value : '';
  const modal = document.getElementById('zen-prompt-modal');
  if (modal) modal.classList.remove('active');

  if (zenPromptResolver) {
    zenPromptResolver(val);
    zenPromptResolver = null;
  }
}

function cancelZenPrompt(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('zen-prompt-modal');
  if (modal) modal.classList.remove('active');

  if (zenPromptResolver) {
    zenPromptResolver(null);
    zenPromptResolver = null;
  }
}

let zenConfirmResolver = null;

function showZenConfirm({ title = '¿Estás seguro?', message = '', isDanger = false, confirmText = 'Aceptar' }) {
  return new Promise((resolve) => {
    zenConfirmResolver = resolve;
    const modal = document.getElementById('zen-confirm-modal');
    const titleEl = document.getElementById('zen-confirm-title');
    const msgEl = document.getElementById('zen-confirm-message');
    const confirmBtn = document.getElementById('zen-confirm-btn');

    titleEl.innerText = title;
    msgEl.innerText = message;
    confirmBtn.innerText = confirmText;
    confirmBtn.className = isDanger ? 'zen-dialog-btn zen-dialog-btn-danger' : 'zen-dialog-btn zen-dialog-btn-confirm';

    modal.classList.add('active');
  });
}

function resolveZenConfirm(value, event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('zen-confirm-modal');
  if (modal) modal.classList.remove('active');

  if (zenConfirmResolver) {
    zenConfirmResolver(value);
    zenConfirmResolver = null;
  }
}

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const clean = urlOrId.trim();
  if (clean.length === 11 && !clean.includes('/') && !clean.includes('?')) return clean;
  const match = clean.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

// ==========================================================================
// PASO 2: EJECUCIÓN DE LA RUTINA Y REPRODUCTOR
// ==========================================================================

async function startRoutine() {
  buildQueue();
  if (currentQueue.length === 0) return;

  moodScoreBefore = null;
  moodScoreAfter = null;

  if (isMeasureImprovementEnabled()) {
    const initialScore = await requestMoodRating(false);
    if (initialScore === null) {
      // Si el usuario cancela o cierra el diálogo, no iniciamos la sesión
      return;
    }
    moodScoreBefore = initialScore;
  }

  document.getElementById('builder-section').style.display = 'none';
  document.getElementById('bottom-sticky-bar').style.display = 'none';
  document.getElementById('player-section').style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  loadStep(0);
}

function backToBuilder() {
  if (isFullscreenActive()) {
    try {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } catch (e) { }
  }
  const playerSec = document.getElementById('player-section');
  if (playerSec) playerSec.classList.remove('is-fullscreen');

  stopWritingTimer();
  stopActivityTimer();
  stopStretchRoutine();
  if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
  clearInterval(progressTimer);
  clearTimeout(transitionTimeout);

  moodScoreBefore = null;
  moodScoreAfter = null;

  document.getElementById('player-section').style.display = 'none';
  document.getElementById('builder-section').style.display = 'block';
  document.getElementById('bottom-sticky-bar').style.display = 'block';
  renderAllStages();
}

function loadStep(index) {
  clearTimeout(transitionTimeout);
  clearInterval(progressTimer);
  stopWritingTimer();
  stopActivityTimer();
  stopStretchRoutine();
  hideOverlays();

  currentStepIdx = index;
  const item = currentQueue[currentStepIdx];

  const stageLabels = {
    'estirar': '1. Estirar',
    'respirar': '2. Respirar',
    'escribir': '3. Escribir',
    'meditar': '4. Meditar'
  };

  const durLabel = (item.duration > 0 && item.duration < 1) ? `${Math.round(item.duration * 60)} seg` : `${item.duration} min`;
  document.getElementById('step-counter').innerText = `${stageLabels[item.stage] || 'Práctica'} (${currentStepIdx + 1} de ${currentQueue.length}) • ${durLabel}`;
  document.getElementById('current-title').innerText = item.title;
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('time-display').innerText = '00:00 / 00:00';

  const videoBox = document.getElementById('video-wrapper-box');
  const notepadBox = document.getElementById('zen-notepad-wrapper');
  const timerBox = document.getElementById('zen-timer-wrapper');
  const stretchBox = document.getElementById('zen-stretch-wrapper');
  const videoExtraControls = document.getElementById('video-extra-controls');

  if (item.type === 'stretch-routine') {
    // MODO ESTIRAMIENTO EN ETAPAS (15s POR POSTURA • TOTAL 5 MIN • VOZ GUIADA)
    if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
    videoBox.style.display = 'none';
    notepadBox.style.display = 'none';
    timerBox.style.display = 'none';
    if (stretchBox) stretchBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'none';

    setupStretchRoutine(item);
  } else if (item.type === 'writing') {
    // MODO ESCRITURA ZEN
    if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
    videoBox.style.display = 'none';
    timerBox.style.display = 'none';
    if (stretchBox) stretchBox.style.display = 'none';
    notepadBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'none';

    setupNotepad(item);
  } else if (item.type === 'timer') {
    // MODO TEMPORIZADOR ZEN (Caminata / Levantarse / Kinhin)
    if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
    videoBox.style.display = 'none';
    notepadBox.style.display = 'none';
    if (stretchBox) stretchBox.style.display = 'none';
    timerBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'none';

    setupZenTimer(item);
  } else {
    // MODO VIDEO (YouTube)
    notepadBox.style.display = 'none';
    timerBox.style.display = 'none';
    if (stretchBox) stretchBox.style.display = 'none';
    videoBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'flex';

    initOrLoadYouTube(item.ytId);
  }
}

// ==========================================================================
// MODO ESTIRAMIENTO EN ETAPAS (15s POR POSTURA • TOTAL 5 MIN • VOZ GUIADA)
// ==========================================================================

function setupStretchRoutine(item) {
  currentStretchStageIdx = 0;
  stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
  stretchTotalSeconds = STRETCH_POSTURE_DURATION * STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
  stretchTotalSecondsLeft = stretchTotalSeconds;
  isStretchPaused = false;

  const playBtn = document.getElementById('play-pause-btn');
  if (playBtn) playBtn.innerText = "⏸ Pausar";
  const stretchPlayBtn = document.getElementById('btn-stretch-play');
  if (stretchPlayBtn) stretchPlayBtn.innerText = "⏸ Pausar";

  updateStretchAudioToggleButtons();
  renderStretchPosturesStrip();
  displayCurrentStretchPosture(true);
  startStretchTimer();
}

function updateStretchAudioToggleButtons() {
  const voiceBtn = document.getElementById('btn-stretch-voice');
  const chimeBtn = document.getElementById('btn-stretch-chime');
  const voiceIcon = document.getElementById('stretch-voice-icon');
  const chimeIcon = document.getElementById('stretch-chime-icon');

  if (voiceBtn) voiceBtn.classList.toggle('is-muted', !isStretchVoiceEnabled);
  if (voiceIcon) voiceIcon.innerText = isStretchVoiceEnabled ? 'VOZ ON' : 'VOZ OFF';

  if (chimeBtn) chimeBtn.classList.toggle('is-muted', !isStretchChimeEnabled);
  if (chimeIcon) chimeIcon.innerText = isStretchChimeEnabled ? 'TONO ON' : 'TONO OFF';
}

function toggleStretchVoice() {
  isStretchVoiceEnabled = !isStretchVoiceEnabled;
  localStorage.setItem('zen_stretch_voice', isStretchVoiceEnabled ? 'true' : 'false');
  updateStretchAudioToggleButtons();
  if (isStretchVoiceEnabled) {
    showZenToast('Voz de locución activada.', 'info', 2000);
    const postureIdx = currentStretchStageIdx % STRETCH_POSTURES.length;
    speakStretchPosture(STRETCH_POSTURES[postureIdx].voiceText);
  } else {
    showZenToast('Voz de locución silenciada.', 'info', 2000);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function toggleStretchChime() {
  isStretchChimeEnabled = !isStretchChimeEnabled;
  localStorage.setItem('zen_stretch_chime', isStretchChimeEnabled ? 'true' : 'false');
  updateStretchAudioToggleButtons();
  if (isStretchChimeEnabled) {
    showZenToast('Tono de cambio activado.', 'info', 2000);
    playStretchChime(false);
  } else {
    showZenToast('Tono de cambio silenciado.', 'info', 2000);
  }
}

function renderStretchPosturesStrip() {
  const strip = document.getElementById('stretch-postures-strip');
  if (!strip) return;

  const currentPostureIdx = currentStretchStageIdx % STRETCH_POSTURES.length;

  strip.innerHTML = STRETCH_POSTURES.map((p, idx) => {
    let statusClass = '';
    if (idx === currentPostureIdx) {
      statusClass = 'active';
    } else if (idx < currentPostureIdx || currentStretchStageIdx >= STRETCH_POSTURES.length) {
      statusClass = 'completed';
    }

    return `
      <button type="button" class="stretch-chip ${statusClass}" onclick="jumpToStretchPosture(${idx})" title="${idx + 1}. ${escapeHtml(p.title)} (15s)">
        <span class="stretch-chip-num">${p.icon}</span>
        <span>${escapeHtml(p.title.split(':')[0])}</span>
      </button>
    `;
  }).join('');
}

function displayCurrentStretchPosture(announce = true) {
  const totalStages = STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
  const postureIdx = currentStretchStageIdx % STRETCH_POSTURES.length;
  const roundNum = Math.floor(currentStretchStageIdx / STRETCH_POSTURES.length) + 1;
  const posture = STRETCH_POSTURES[postureIdx];

  // Actualizar textos informativos
  const roundText = document.getElementById('stretch-round-text');
  if (roundText) roundText.innerText = `Ronda ${roundNum} de ${STRETCH_TOTAL_ROUNDS}`;

  const stepTag = document.getElementById('stretch-step-tag');
  if (stepTag) stepTag.innerText = `Postura ${postureIdx + 1} de ${STRETCH_POSTURES.length} • Etapa ${currentStretchStageIdx + 1}/${totalStages}`;

  const titleEl = document.getElementById('stretch-posture-title');
  if (titleEl) titleEl.innerText = posture.title;

  const descEl = document.getElementById('stretch-posture-desc');
  if (descEl) descEl.innerText = posture.desc;

  const tipEl = document.getElementById('stretch-posture-tip-text');
  if (tipEl) tipEl.innerText = posture.tip;

  const iconEl = document.getElementById('stretch-posture-icon');
  if (iconEl) {
    iconEl.innerText = posture.icon;
    iconEl.style.transform = 'scale(1.25)';
    setTimeout(() => { iconEl.style.transform = 'scale(1)'; }, 250);
  }

  // Próxima postura
  const nextTitleEl = document.getElementById('stretch-next-title');
  const nextBar = document.querySelector('.stretch-next-bar');
  if (currentStretchStageIdx + 1 < totalStages) {
    const nextIdx = (currentStretchStageIdx + 1) % STRETCH_POSTURES.length;
    const nextRound = Math.floor((currentStretchStageIdx + 1) / STRETCH_POSTURES.length) + 1;
    const nextPosture = STRETCH_POSTURES[nextIdx];
    if (nextTitleEl) {
      nextTitleEl.innerText = (nextRound !== roundNum && nextIdx === 0)
        ? `Ronda 2: ${nextPosture.title}`
        : nextPosture.title;
    }
    if (nextBar) nextBar.style.display = 'flex';
  } else {
    if (nextTitleEl) nextTitleEl.innerText = '¡Final de la sesión!';
  }

  renderStretchPosturesStrip();
  updateStretchDisplay();

  if (announce && !isStretchPaused) {
    playStretchChime(false);
    let speechMessage = posture.voiceText;
    if (roundNum === 2 && postureIdx === 0) {
      speechMessage = "Segunda ronda: " + posture.voiceText;
    }
    speakStretchPosture(speechMessage);

    if (navigator.vibrate) {
      try { navigator.vibrate([60, 40, 60]); } catch (e) { }
    }
  }
}

function startStretchTimer() {
  stopStretchRoutine();
  updateStretchDisplay();

  stretchTimer = setInterval(() => {
    if (isStretchPaused) return;

    stretchSecondsLeftInPosture--;
    stretchTotalSecondsLeft = Math.max(0, stretchTotalSecondsLeft - 1);
    updateStretchDisplay();

    if (stretchSecondsLeftInPosture <= 0) {
      advanceStretchPostureInternal();
    }
  }, 1000);
}

function advanceStretchPostureInternal() {
  const totalStages = STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;

  if (currentStretchStageIdx + 1 < totalStages) {
    currentStretchStageIdx++;
    stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
    displayCurrentStretchPosture(true);
  } else {
    // Rutina de 5 minutos completada
    stopStretchRoutine();
    playStretchChime(true);
    speakStretchPosture("¡Excelente! Has completado tu rutina de estiramiento.");
    handleStepEnded();
  }
}

function updateStretchDisplay() {
  // 1. Contador grande de 15 segundos
  const secEl = document.getElementById('stretch-countdown-digits');
  if (secEl) {
    secEl.innerText = Math.max(0, stretchSecondsLeftInPosture);
  }

  // 2. Barra lineal de 15 segundos
  const barFill = document.getElementById('stretch-bar-fill');
  if (barFill) {
    const fraction = Math.max(0, Math.min(1, stretchSecondsLeftInPosture / STRETCH_POSTURE_DURATION));
    barFill.style.width = (fraction * 100) + '%';
  }

  // 3. Pequeño contador de los 5 minutos
  const totalEl = document.getElementById('stretch-total-digits');
  if (totalEl) {
    totalEl.innerText = formatTime(Math.max(0, stretchTotalSecondsLeft));
  }

  const fillEl = document.getElementById('stretch-total-progress-fill');
  if (fillEl) {
    const elapsed = Math.max(0, stretchTotalSeconds - stretchTotalSecondsLeft);
    const pct = Math.min(100, (elapsed / stretchTotalSeconds) * 100);
    fillEl.style.width = pct + '%';
  }

  // 4. Sincronizar barra inferior universal del reproductor
  const overallElapsed = Math.max(0, stretchTotalSeconds - stretchTotalSecondsLeft);
  const bottomProgress = document.getElementById('progress-bar');
  if (bottomProgress) {
    bottomProgress.style.width = Math.min(100, (overallElapsed / stretchTotalSeconds) * 100) + '%';
  }
  const bottomTime = document.getElementById('time-display');
  if (bottomTime) {
    bottomTime.innerText = `${formatTime(overallElapsed)} / ${formatTime(stretchTotalSeconds)}`;
  }
}

function toggleStretchPlay() {
  isStretchPaused = !isStretchPaused;

  const playBtn = document.getElementById('play-pause-btn');
  if (playBtn) playBtn.innerText = isStretchPaused ? "▶ Reanudar" : "⏸ Pausar";

  const stretchPlayBtn = document.getElementById('btn-stretch-play');
  if (stretchPlayBtn) stretchPlayBtn.innerText = isStretchPaused ? "▶ Reanudar" : "⏸ Pausar";

  if (isStretchPaused) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  } else {
    // Si se reanuda, recordar postura actual
    const posture = STRETCH_POSTURES[currentStretchStageIdx % STRETCH_POSTURES.length];
    speakStretchPosture(posture.voiceText);
  }
}

function nextStretchPosture() {
  const totalStages = STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
  if (currentStretchStageIdx + 1 < totalStages) {
    currentStretchStageIdx++;
    stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
    stretchTotalSecondsLeft = (totalStages - currentStretchStageIdx) * STRETCH_POSTURE_DURATION;
    displayCurrentStretchPosture(true);
  } else {
    stopStretchRoutine();
    playStretchChime(true);
    speakStretchPosture("¡Excelente! Has completado tu rutina de estiramiento.");
    handleStepEnded();
  }
}

function prevStretchPosture() {
  const totalStages = STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
  // Si ya pasaron más de 3 segundos, reiniciar la postura actual
  if (stretchSecondsLeftInPosture < STRETCH_POSTURE_DURATION - 3) {
    stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
    stretchTotalSecondsLeft = (totalStages - currentStretchStageIdx) * STRETCH_POSTURE_DURATION;
    displayCurrentStretchPosture(true);
    return;
  }

  if (currentStretchStageIdx > 0) {
    currentStretchStageIdx--;
    stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
    stretchTotalSecondsLeft = (totalStages - currentStretchStageIdx) * STRETCH_POSTURE_DURATION;
    displayCurrentStretchPosture(true);
  } else {
    stretchSecondsLeftInPosture = STRETCH_POSTURE_DURATION;
    stretchTotalSecondsLeft = stretchTotalSeconds;
    displayCurrentStretchPosture(true);
  }
}

function jumpToStretchPosture(postureIdx) {
  const roundNum = Math.floor(currentStretchStageIdx / STRETCH_POSTURES.length);
  const targetStageIdx = (roundNum * STRETCH_POSTURES.length) + postureIdx;
  jumpToStretchStage(targetStageIdx);
}

function jumpToStretchStage(targetStageIdx, secondsInStage = STRETCH_POSTURE_DURATION) {
  const totalStages = STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
  currentStretchStageIdx = Math.max(0, Math.min(totalStages - 1, targetStageIdx));
  stretchSecondsLeftInPosture = Math.max(1, Math.min(STRETCH_POSTURE_DURATION, secondsInStage));
  stretchTotalSecondsLeft = ((totalStages - currentStretchStageIdx - 1) * STRETCH_POSTURE_DURATION) + stretchSecondsLeftInPosture;
  displayCurrentStretchPosture(true);
}

function stopStretchRoutine() {
  if (stretchTimer) {
    clearInterval(stretchTimer);
    stretchTimer = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) { }
  }
}

function speakStretchPosture(text) {
  if (!isStretchVoiceEnabled) return;
  if (!('speechSynthesis' in window)) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const esVoice = voices.find(v => v.lang.startsWith('es-') || v.lang === 'es' || v.lang.includes('Spanish') || v.lang.includes('es_'));
      if (esVoice) utterance.voice = esVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('SpeechSynthesis error:', err);
  }
}

function playStretchChime(isFinal = false) {
  if (!isStretchChimeEnabled) return;

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';

    if (!isFinal) {
      // Tono suave de dos armónicos relajantes (F5 698.46Hz -> A5 880Hz)
      osc.frequency.setValueAtTime(698.46, now);
      osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.12);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } else {
      // Campana de finalización suave (C5 -> E5 -> G5)
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.15);
      osc.frequency.setValueAtTime(783.99, now + 0.3);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 2.0);
    }
  } catch (e) {
    // AudioContext puede estar restringido antes de interacción
  }
}

// ==========================================================================
// MODO TEMPORIZADOR ZEN (CAMINATA / ACTIVIDAD)
// ==========================================================================

function setupZenTimer(item) {
  document.getElementById('timer-icon').innerText = item.icon || 'PRÁCTICA';
  document.getElementById('timer-activity-title').innerText = item.title;
  document.getElementById('timer-activity-desc').innerText = item.instructions || "Realice esta práctica a paso relajado y consciente.";
  document.getElementById('timer-state-label').innerText = "EN CURSO";

  activityTotalSeconds = Math.round((item.duration || 5) * 60);
  activitySecondsLeft = activityTotalSeconds;
  isActivityPaused = false;
  document.getElementById('play-pause-btn').innerText = "⏸ Pausar";

  startActivityTimer();
}

function startActivityTimer() {
  stopActivityTimer();
  updateActivityTimeDisplay();

  activityTimer = setInterval(() => {
    if (isActivityPaused) return;

    activitySecondsLeft--;
    updateActivityTimeDisplay();

    if (activitySecondsLeft <= 0) {
      stopActivityTimer();
      handleStepEnded();
    }
  }, 1000);
}

function stopActivityTimer() {
  clearInterval(activityTimer);
  activityTimer = null;
}

function updateActivityTimeDisplay() {
  const current = activityTotalSeconds - activitySecondsLeft;
  const pct = (current / activityTotalSeconds) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('time-display').innerText = `${formatTime(current)} / ${formatTime(activityTotalSeconds)}`;
  document.getElementById('timer-digits').innerText = formatTime(activitySecondsLeft);
}

// ==========================================================================
// MODO ESCRITURA ZEN (BLOC DE NOTAS CON TEMPORIZADOR)
// ==========================================================================

function autoResizeTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}

function setupNotepad(item) {
  document.getElementById('notepad-title').innerText = item.promptTitle || item.title;
  const descEl = document.getElementById('notepad-desc');
  const textarea = document.getElementById('zen-text-input');

  if (Array.isArray(item.promptSteps) && item.promptSteps.length > 0) {
    descEl.innerHTML = `
      <div class="notepad-steps-list">
        ${item.promptSteps.map((step, idx) => `
          <div class="notepad-step-item">
            <label class="notepad-step-q" for="notepad-step-input-${idx}">${escapeHtml(step.q)}</label>
            <div class="notepad-step-note">*${escapeHtml(step.note)}</div>
            <textarea id="notepad-step-input-${idx}" class="notepad-step-input" rows="2"
              data-question="${escapeHtml(step.q)}"
              placeholder="Escribe tu respuesta aquí..."
              oninput="autoResizeTextarea(this); updateWordCount()"></textarea>
          </div>
        `).join('')}
      </div>
    `;
    if (textarea) {
      textarea.value = '';
      textarea.style.display = 'none';
    }
  } else {
    descEl.innerText = item.promptDesc || "Tómate este tiempo para escribir y desconectar.";
    if (textarea) {
      textarea.style.display = '';
      textarea.value = '';
      textarea.style.height = 'auto';
      textarea.oninput = () => {
        autoResizeTextarea(textarea);
        updateWordCount();
      };
    }
  }

  updateWordCount();

  writingTotalSeconds = Math.round((item.duration || 5) * 60);
  writingSecondsLeft = writingTotalSeconds;
  isWritingPaused = false;
  document.getElementById('play-pause-btn').innerText = "⏸ Pausar";

  startWritingTimer();
}

function getCombinedNotepadText() {
  const stepInputs = document.querySelectorAll('.notepad-step-input');
  if (stepInputs.length > 0) {
    const filled = [];
    stepInputs.forEach(input => {
      const val = input.value.trim();
      if (val) {
        filled.push(`${input.dataset.question}\n${val}`);
      }
    });
    return filled.join('\n\n');
  }
  const textarea = document.getElementById('zen-text-input');
  return textarea ? textarea.value : '';
}

function updateWordCount() {
  const stepInputs = document.querySelectorAll('.notepad-step-input');
  let raw = '';
  if (stepInputs.length > 0) {
    raw = Array.from(stepInputs).map(el => el.value.trim()).filter(Boolean).join(' ');
  } else {
    const textarea = document.getElementById('zen-text-input');
    raw = textarea ? textarea.value.trim() : '';
  }
  const words = raw ? raw.split(/\s+/).length : 0;
  document.getElementById('notepad-words-count').innerText = `${words} palabra${words === 1 ? '' : 's'}`;
}

function startWritingTimer() {
  stopWritingTimer();
  updateWritingTimeDisplay();

  writingTimer = setInterval(() => {
    if (isWritingPaused) return;

    writingSecondsLeft--;
    updateWritingTimeDisplay();

    if (writingSecondsLeft <= 0) {
      stopWritingTimer();
      handleStepEnded();
    }
  }, 1000);
}

function stopWritingTimer() {
  clearInterval(writingTimer);
  writingTimer = null;
}

function updateWritingTimeDisplay() {
  const current = writingTotalSeconds - writingSecondsLeft;
  const pct = (current / writingTotalSeconds) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('time-display').innerText = `${formatTime(current)} / ${formatTime(writingTotalSeconds)}`;
  document.getElementById('notepad-time-left').innerText = `TIEMPO RESTANTE · ${formatTime(writingSecondsLeft)}`;
}

function copyNotepadText() {
  const text = getCombinedNotepadText();
  if (!text.trim()) return showZenToast("El bloc está vacío.", "warning");
  navigator.clipboard.writeText(text).then(() => showZenToast("Texto copiado al portapapeles.", "success"));
}

function downloadNotepadText() {
  const text = getCombinedNotepadText();
  if (!text.trim()) return alert("El bloc está vacío.");
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Desconectar_Notas_${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
}

function clearNotepadText() {
  if (confirm("¿Deseas soltar y borrar este texto?")) {
    document.querySelectorAll('.notepad-step-input').forEach(el => { el.value = ''; });
    const textarea = document.getElementById('zen-text-input');
    if (textarea) textarea.value = '';
    updateWordCount();
  }
}

// ==========================================================================
// REPRODUCTOR YOUTUBE
// ==========================================================================

window.onYouTubeIframeAPIReady = function () {
  ytReady = true;
};

function disableCaptions(player) {
  if (!player) return;
  try {
    if (typeof player.unloadModule === 'function') {
      player.unloadModule('captions');
      player.unloadModule('cc');
    }
    if (typeof player.setOption === 'function') {
      player.setOption('captions', 'track', {});
      player.setOption('cc', 'track', {});
    }
  } catch (err) { }
}

function initOrLoadYouTube(videoId) {
  if (!ytPlayer) {
    const originParam = (window.location.protocol === 'http:' || window.location.protocol === 'https:')
      ? window.location.origin
      : undefined;

    ytPlayer = new YT.Player('youtube-iframe-container', {
      videoId: videoId,
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'rel': 0,
        'modestbranding': 1,
        'playsinline': 1,
        'enablejsapi': 1,
        'iv_load_policy': 3,
        'cc_load_policy': 0,
        'hl': 'es',
        ...(originParam ? { 'origin': originParam } : {})
      },
      events: {
        'onReady': (e) => {
          disableCaptions(e.target);
          syncRealVideoDuration(e.target);
          e.target.playVideo();
          startProgressLoop();
        },
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });
  } else {
    ytPlayer.loadVideoById(videoId);
    disableCaptions(ytPlayer);
  }
}

function syncRealVideoDuration(playerInstance) {
  if (!playerInstance || !playerInstance.getDuration) return;
  const durSec = Math.round(playerInstance.getDuration());
  if (durSec > 0) {
    const realMin = Math.max(1, Math.round(durSec / 60));
    const item = currentQueue[currentStepIdx];
    if (item && item.type === 'video' && item.duration !== realMin) {
      item.duration = realMin;
      const stageLabels = {
        'estirar': '1. Estirar',
        'respirar': '2. Respirar',
        'escribir': '3. Escribir',
        'meditar': '4. Meditar'
      };
      document.getElementById('step-counter').innerText = `${stageLabels[item.stage] || 'Práctica'} (${currentStepIdx + 1} de ${currentQueue.length}) • ${realMin} min`;
    }
  }
}

function onPlayerStateChange(event) {
  const currentItem = currentQueue[currentStepIdx];
  if (!currentItem || currentItem.type !== 'video') return;

  const pauseOverlay = document.getElementById('pause-overlay');
  const transitionOverlay = document.getElementById('transition-overlay');
  const playBtn = document.getElementById('play-pause-btn');

  if (event.data === YT.PlayerState.PLAYING) {
    disableCaptions(event.target);
    syncRealVideoDuration(event.target);
    if (pauseOverlay) pauseOverlay.style.display = 'none';
    if (playBtn) playBtn.innerText = "⏸ Pausar";
    startProgressLoop();
  } else if (event.data === YT.PlayerState.PAUSED) {
    if (transitionOverlay && transitionOverlay.style.display !== 'flex') {
      if (pauseOverlay) pauseOverlay.style.display = 'flex';
      if (playBtn) playBtn.innerText = "▶ Reanudar";
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    handleStepEnded();
  }
}

function handleStepEnded() {
  clearInterval(progressTimer);
  stopWritingTimer();
  stopActivityTimer();
  stopStretchRoutine();

  const transitionOverlay = document.getElementById('transition-overlay');

  if (currentStepIdx + 1 < currentQueue.length) {
    const nextItem = currentQueue[currentStepIdx + 1];
    document.getElementById('next-up-text').innerText = `Siguiente: ${nextItem.title}`;
    const nextBtn = document.getElementById('transition-next-btn');
    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.innerText = "Empezar ahora →";
      nextBtn.onclick = nextStep;
    }
    transitionOverlay.style.display = 'flex';

    transitionTimeout = setTimeout(() => {
      nextStep();
    }, 4000);
  } else {
    completeRoutineSession();
  }
}

async function completeRoutineSession() {
  clearTimeout(transitionTimeout);
  clearInterval(progressTimer);
  stopWritingTimer();
  stopActivityTimer();
  stopStretchRoutine();
  if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
  hideOverlays();

  if (isMeasureImprovementEnabled() && moodScoreBefore !== null) {
    const finalScore = await requestMoodRating(true);
    moodScoreAfter = finalScore !== null ? finalScore : moodScoreBefore;
  }

  showRoutineCelebrationModal();
}

function showRoutineCelebrationModal() {
  const modal = document.getElementById('routine-completed-modal');
  const container = document.getElementById('completed-improvement-container');

  if (isMeasureImprovementEnabled() && moodScoreBefore !== null && moodScoreAfter !== null) {
    const stressDrop = moodScoreBefore - moodScoreAfter;
    let headline = '';
    if (stressDrop > 0) {
      headline = `<div class="completed-delta-text">Tu estrés bajó ${stressDrop} punto${stressDrop === 1 ? '' : 's'}</div>`;
    } else if (stressDrop === 0) {
      headline = `<div class="completed-delta-text completed-delta-neutral">Nivel de estrés estable</div>`;
    } else {
      headline = `<div class="completed-delta-text completed-delta-neutral">Pausa registrada</div>`;
    }

    container.innerHTML = `
      <div class="completed-progress-card">
        ${headline}
        <div class="completed-score-simple">Estrés: <strong>${moodScoreBefore}</strong> → <strong>${moodScoreAfter}</strong></div>
      </div>
    `;
    container.style.display = 'block';
  } else {
    container.innerHTML = '';
    container.style.display = 'none';
  }

  if (modal) modal.classList.add('active');
}

function finishRoutineAndExit() {
  const modal = document.getElementById('routine-completed-modal');
  if (modal) modal.classList.remove('active');
  moodScoreBefore = null;
  moodScoreAfter = null;
  backToBuilder();
}

function addBreakTime() {
  clearTimeout(transitionTimeout);
  document.getElementById('next-up-text').innerText = "Pausa de descanso (+30s)... Respira hondo.";
  transitionTimeout = setTimeout(() => {
    nextStep();
  }, 30000);
}

function onPlayerError(e) {
  const errorOverlay = document.getElementById('error-overlay');
  const errorDesc = document.getElementById('error-desc');
  const item = currentQueue[currentStepIdx];

  if (e.data === 153) {
    errorDesc.innerText = "Error 153: YouTube requiere servidor web. Inicia la app desde 'iniciar_app.bat'.";
  } else if (e.data === 101 || e.data === 150) {
    errorDesc.innerText = "El creador ha desactivado la inserción en sitios externos.";
  } else {
    errorDesc.innerText = `No se pudo cargar este video (Error #${e.data}).`;
  }

  document.getElementById('error-youtube-link').href = `https://www.youtube.com/watch?v=${item.ytId}`;
  errorOverlay.style.display = 'flex';
}

function skipErrorVideo() {
  hideOverlays();
  nextStep();
}

function hideOverlays() {
  document.getElementById('pause-overlay').style.display = 'none';
  document.getElementById('transition-overlay').style.display = 'none';
  document.getElementById('error-overlay').style.display = 'none';
}

function startProgressLoop() {
  clearInterval(progressTimer);
  progressTimer = setInterval(() => {
    if (!ytPlayer || !ytPlayer.getCurrentTime) return;
    const current = ytPlayer.getCurrentTime() || 0;
    const duration = ytPlayer.getDuration() || 0;
    if (duration > 0) {
      const pct = (current / duration) * 100;
      document.getElementById('progress-bar').style.width = pct + '%';
      document.getElementById('time-display').innerText = `${formatTime(current)} / ${formatTime(duration)}`;
    }
  }, 250);
}

// ==========================================================================
// CONTROLES DE REPRODUCCIÓN UNIVERSALES
// ==========================================================================

function togglePlay() {
  const item = currentQueue[currentStepIdx];
  const playBtn = document.getElementById('play-pause-btn');

  if (item && item.type === 'stretch-routine') {
    toggleStretchPlay();
    return;
  }

  if (item && item.type === 'writing') {
    isWritingPaused = !isWritingPaused;
    playBtn.innerText = isWritingPaused ? "▶ Reanudar" : "⏸ Pausar";
    return;
  }

  if (item && item.type === 'timer') {
    isActivityPaused = !isActivityPaused;
    playBtn.innerText = isActivityPaused ? "▶ Reanudar" : "⏸ Pausar";
    document.getElementById('timer-state-label').innerText = isActivityPaused ? "PAUSADO" : "EN CURSO";
    return;
  }

  if (!ytPlayer || !ytPlayer.getPlayerState) return;
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function nextStep() {
  clearTimeout(transitionTimeout);
  if (currentStepIdx + 1 < currentQueue.length) {
    loadStep(currentStepIdx + 1);
  } else {
    completeRoutineSession();
  }
}

function prevStep() {
  clearTimeout(transitionTimeout);
  if (currentStepIdx > 0) {
    loadStep(currentStepIdx - 1);
  }
}

function seekRelative(offset) {
  const item = currentQueue[currentStepIdx];

  if (item && item.type === 'stretch-routine') {
    if (offset > 0) {
      nextStretchPosture();
    } else {
      prevStretchPosture();
    }
    return;
  }

  if (item && item.type === 'writing') {
    writingSecondsLeft = Math.max(0, Math.min(writingTotalSeconds, writingSecondsLeft - offset));
    updateWritingTimeDisplay();
    return;
  }

  if (item && item.type === 'timer') {
    activitySecondsLeft = Math.max(0, Math.min(activityTotalSeconds, activitySecondsLeft - offset));
    updateActivityTimeDisplay();
    return;
  }

  if (!ytPlayer || !ytPlayer.getCurrentTime) return;
  const now = ytPlayer.getCurrentTime();
  ytPlayer.seekTo(Math.max(0, now + offset), true);
}

function seekVideo(e) {
  const item = currentQueue[currentStepIdx];
  const rect = e.currentTarget.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

  if (item && item.type === 'stretch-routine') {
    const totalSec = STRETCH_POSTURE_DURATION * STRETCH_POSTURES.length * STRETCH_TOTAL_ROUNDS;
    const targetElapsed = Math.max(0, Math.min(totalSec - 1, Math.round(totalSec * pct)));
    const targetStageIdx = Math.floor(targetElapsed / STRETCH_POSTURE_DURATION);
    const secInStage = STRETCH_POSTURE_DURATION - (targetElapsed % STRETCH_POSTURE_DURATION);
    jumpToStretchStage(targetStageIdx, secInStage);
    return;
  }

  if (item && item.type === 'writing') {
    writingSecondsLeft = Math.max(0, Math.round(writingTotalSeconds * (1 - pct)));
    updateWritingTimeDisplay();
    return;
  }

  if (item && item.type === 'timer') {
    activitySecondsLeft = Math.max(0, Math.round(activityTotalSeconds * (1 - pct)));
    updateActivityTimeDisplay();
    return;
  }

  if (!ytPlayer || !ytPlayer.getDuration) return;
  const dur = ytPlayer.getDuration();
  ytPlayer.seekTo(dur * pct, true);
}

const SVG_ICON_AUDIO = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
const SVG_ICON_MUTED = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
const SVG_ICON_EXPAND = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><polyline points="21 15 21 21 15 21"></polyline><polyline points="3 9 3 3 9 3"></polyline></svg>`;
const SVG_ICON_COLLAPSE = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><polyline points="14 20 14 14 20 14"></polyline><polyline points="10 4 10 10 4 10"></polyline></svg>`;

function toggleMute() {
  if (!ytPlayer) return;
  const btn = document.getElementById('mute-btn');
  if (ytPlayer.isMuted()) {
    ytPlayer.unMute();
    if (btn) {
      btn.innerHTML = SVG_ICON_AUDIO;
      btn.title = 'Silenciar audio';
    }
  } else {
    ytPlayer.mute();
    if (btn) {
      btn.innerHTML = SVG_ICON_MUTED;
      btn.title = 'Activar audio';
    }
  }
}

function isFullscreenActive() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

function updateFullscreenBtnState() {
  const btn = document.getElementById('fullscreen-btn');
  const playerSec = document.getElementById('player-section');
  const isFs = isFullscreenActive();
  if (btn) {
    btn.innerHTML = isFs ? SVG_ICON_COLLAPSE : SVG_ICON_EXPAND;
    btn.title = isFs ? 'Salir de pantalla completa' : 'Pantalla completa';
  }
  if (playerSec) {
    playerSec.classList.toggle('is-fullscreen', isFs);
  }
}

['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach((evt) => {
  document.addEventListener(evt, updateFullscreenBtnState);
});

function toggleFullscreen() {
  const playerSec = document.getElementById('player-section');
  if (!playerSec) return;

  unlockScreenOrientation();

  if (!isFullscreenActive() && !playerSec.classList.contains('is-fullscreen')) {
    const req = playerSec.requestFullscreen ||
      playerSec.webkitRequestFullscreen ||
      playerSec.mozRequestFullScreen ||
      playerSec.msRequestFullscreen;

    if (req) {
      const p = req.call(playerSec);
      if (p && typeof p.then === 'function') {
        p.then(() => {
          try {
            if (screen.orientation && typeof screen.orientation.lock === 'function') {
              screen.orientation.lock('landscape').catch(() => { });
            }
          } catch (e) { }
        }).catch((err) => {
          console.warn('Pantalla completa estándar bloqueada, activando modo inmersivo:', err);
          playerSec.classList.add('is-fullscreen');
          const btn = document.getElementById('fullscreen-btn');
          if (btn) {
            btn.innerHTML = SVG_ICON_COLLAPSE;
            btn.title = 'Salir de pantalla completa';
          }
        });
      }
    } else {
      const iframe = document.querySelector('#youtube-iframe-container iframe');
      if (iframe && iframe.webkitEnterFullscreen) {
        iframe.webkitEnterFullscreen();
      } else {
        playerSec.classList.add('is-fullscreen');
        const btn = document.getElementById('fullscreen-btn');
        if (btn) {
          btn.innerHTML = SVG_ICON_COLLAPSE;
          btn.title = 'Salir de pantalla completa';
        }
      }
    }
  } else {
    playerSec.classList.remove('is-fullscreen');
    try {
      if (screen.orientation && typeof screen.orientation.unlock === 'function') {
        screen.orientation.unlock();
      }
    } catch (e) { }

    const exit = document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen;
    if (exit && isFullscreenActive()) {
      exit.call(document).catch((err) => console.warn(err));
    }
    const btn = document.getElementById('fullscreen-btn');
    if (btn) {
      btn.innerHTML = SVG_ICON_EXPAND;
      btn.title = 'Pantalla completa';
    }
  }
}

// Desbloquear orientación de pantalla para permitir auto-rotate libre en móviles
function unlockScreenOrientation() {
  try {
    if (screen.orientation && typeof screen.orientation.unlock === 'function') {
      screen.orientation.unlock();
    }
  } catch (e) {
    // Algunos navegadores requieren interacción del usuario o no soportan unlock()
  }
}

// Observador dinámico de orientación (asegura adaptación visual inmediata en cualquier móvil)
function updateDeviceOrientationState() {
  const width = window.innerWidth || document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  const isLandscape = width > height;

  if (isLandscape) {
    document.body.classList.add('is-landscape');
    document.body.classList.remove('is-portrait');
    if (height <= 600 || width <= 960) {
      document.body.classList.add('is-landscape-mobile');
      document.body.classList.remove('is-desktop-widescreen');
    } else {
      document.body.classList.add('is-desktop-widescreen');
      document.body.classList.remove('is-landscape-mobile');
    }
  } else {
    document.body.classList.add('is-portrait');
    document.body.classList.remove('is-landscape', 'is-landscape-mobile', 'is-desktop-widescreen');
  }
}

['resize', 'orientationchange'].forEach((evt) => {
  window.addEventListener(evt, () => {
    updateDeviceOrientationState();
    unlockScreenOrientation();
  });
});

if (screen.orientation) {
  screen.orientation.addEventListener('change', () => {
    updateDeviceOrientationState();
    unlockScreenOrientation();
  });
}

window.addEventListener('DOMContentLoaded', updateDeviceOrientationState);
window.addEventListener('load', () => {
  updateDeviceOrientationState();
  unlockScreenOrientation();
});

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Iniciar renderizado inicial
renderAllStages();

// ==========================================================================
// REGISTRO DE SERVICE WORKER & INSTALACIÓN PWA
// ==========================================================================

let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('✅ Service Worker PWA activo:', reg.scope);
      })
      .catch((err) => {
        console.log('ℹ️ Registro de Service Worker:', err);
      });
  });
}

// Capturar evento de instalación nativo (Chrome / Android / Edge)
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;

  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
  }
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) installBtn.style.display = 'none';
  showZenToast('Aplicación instalada en su dispositivo.', 'success');
});

function promptInstallApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showZenToast('Instalando Desconectar...', 'info');
      }
      deferredInstallPrompt = null;
      const installBtn = document.getElementById('btn-pwa-install');
      if (installBtn) installBtn.style.display = 'none';
    });
  } else {
    showZenToast('Para instalar en iPhone: toca el botón Compartir de Safari y elige "Agregar a pantalla de inicio".', 'info', 6000);
  }
}


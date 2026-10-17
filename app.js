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
    id: 'est-guided', 
    stage: 'estirar', 
    type: 'stretch-routine', 
    icon: '🤸',
    title: "🤸 Estiramiento Guiado en Etapas (15s • 5 min)", 
    duration: 5, 
    instructions: "Rutina guiada con locución por voz, campana sonora y temporizador de 15 segundos por movimiento (5 min en 2 rondas de 10 posturas): hombros atrás y adelante, cuello media luna, diciendo no y sí, brazos, tocarse los pies, arquearse atrás y subir pantorrillas." 
  },
  { 
    id: 'est-micro', 
    stage: 'estirar', 
    type: 'timer', 
    icon: '🧍',
    title: "🧍 Levantarse y estirar manos arriba (30 seg)", 
    duration: 0.5, 
    instructions: "Ponte de pie, despega la mirada de la pantalla y estira los brazos bien arriba hacia el cielo. Abre el pecho, inhala profundo y sacude suavemente manos y piernas para liberar tensiones acumuladas." 
  },
  { 
    id: 'est-walk', 
    stage: 'estirar', 
    type: 'timer', 
    icon: '🚶',
    title: "🚶 Caminata Suave de Movilidad", 
    duration: 5, 
    instructions: "Ponte de pie y camina a paso relajado por la habitación o la oficina. Mueve los brazos libremente, gira los hombros en círculos y afloja el cuello mientras das cada paso." 
  },
  { 
    id: 'est-quick', 
    stage: 'estirar', 
    type: 'timer', 
    icon: '🤸',
    title: "🤸 Movilidad y Estiramiento Suave (7 min)", 
    duration: 7, 
    instructions: "De pie o sentado cómodamente, realiza giros suaves de cuello, hombros y tronco. Abre el pecho e inhala sintiendo cómo se oxigena la espalda alta y la postura." 
  },
  { 
    id: 'est-1', 
    stage: 'estirar', 
    type: 'video', 
    title: "Estiramiento de Cuello y Hombros", 
    duration: 10, 
    ytId: "s-7lyvblFNI" 
  },
  { 
    id: 'est-2', 
    stage: 'estirar', 
    type: 'video', 
    title: "Movilidad Suave de Espalda y Columna", 
    duration: 11, 
    ytId: "4pKly2JojMw" 
  },
  { 
    id: 'est-3', 
    stage: 'estirar', 
    type: 'video', 
    title: "Pausa Activa de Postura en Escritorio", 
    duration: 10, 
    ytId: "s-7lyvblFNI" 
  },

  // ETAPA 2: RESPIRAR
  { 
    id: 'resp-micro', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '😮‍💨',
    title: "😮‍💨 Doble Inhalación Exprés (30 seg)", 
    duration: 0.5, 
    instructions: "Haz dos inhalaciones seguidas por la nariz: una profunda y larga, e inmediatamente una segunda inhalación corta para expandir al máximo los pulmones. Luego suelta todo el aire por la boca en una exhalación lenta y completa. Es el suspiro fisiológico para resetear el sistema nervioso." 
  },
  { 
    id: 'resp-478-timer', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '🫁',
    title: "🫁 Respiración 4-7-8 Guiada (3 ciclos)", 
    duration: 1, 
    instructions: "Inhala suave por la nariz (4 segundos)... Mantén el aire en tus pulmones (7 segundos)... Exhala lento por la boca vaciando todo el pecho (8 segundos). Siente cómo se calma tu pulso." 
  },
  { 
    id: 'resp-double', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '😮‍💨',
    title: "😮‍💨 Respiración de Doble Inhalación (Suspiro Fisiológico)", 
    duration: 3, 
    instructions: "Haz dos inhalaciones seguidas por la nariz: una profunda y larga, e inmediatamente una segunda inhalación corta para expandir al máximo los pulmones. Luego suelta todo el aire por la boca en una exhalación lenta y completa. Es el método neurobiológico más rápido para calmar el estrés y la aceleración mental." 
  },
  { 
    id: 'resp-resonante', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '💓',
    title: "💓 Respiración Resonante (Coherencia Cardíaca)", 
    duration: 5, 
    instructions: "Inhala suavemente por la nariz durante 5.5 segundos inflando el abdomen para activar el diafragma... y exhala suave por la boca durante 5.5 segundos vaciando todo el aire. Sigue el ritmo del círculo para que llegues a tu ritmo natural y sincronices tu mente y corazón." 
  },
  { 
    id: 'resp-ocean', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '🌊',
    title: "🌊 Respiración del Mar (Respiración Oceánica / Ujjayi)", 
    duration: 4, 
    instructions: "Inhala y exhala por la nariz de manera suave y profunda, contrayendo sutilmente la parte posterior de la garganta. Escucharás un murmullo continuo similar al oleaje de las olas del mar. Este sonido relaja la mente y ancla tu presencia en calma." 
  },
  { 
    id: 'resp-resonante-vid', 
    stage: 'respirar', 
    type: 'video', 
    title: "Coherencia Cardíaca Guiada con Campanas", 
    duration: 5, 
    ytId: "Zsp00w0R3As" 
  },
  { 
    id: 'resp-1', 
    stage: 'respirar', 
    type: 'video', 
    title: "Respiración 4-7-8 para Calmar el Sistema Nervioso", 
    duration: 5, 
    ytId: "inpok4MKVLM" 
  },
  { 
    id: 'resp-2', 
    stage: 'respirar', 
    type: 'video', 
    title: "Respiración Cuadrada (Box Breathing)", 
    duration: 4, 
    ytId: "inpok4MKVLM" 
  },
  { 
    id: 'resp-3', 
    stage: 'respirar', 
    type: 'video', 
    title: "Respiración Diafragmática Relajante", 
    duration: 6, 
    ytId: "vB6OxxhSzCA" 
  },

  // ETAPA 3: ESCRIBIR (HÍBRIDO: BLOC ZEN O VIDEO GUIADO)
  { 
    id: 'esc-1', 
    stage: 'escribir', 
    type: 'writing', 
    title: "📝 Bloc Zen: Descarga Mental (Brain Dump)", 
    duration: 5,
    promptTitle: "✍️ Descarga Mental",
    promptDesc: "Escribe todo lo que ronda en tu cabeza sin filtros ni juicios. Vacía tus pendientes y preocupaciones para desconectar."
  },
  { 
    id: 'esc-2', 
    stage: 'escribir', 
    type: 'writing', 
    title: "📝 Bloc Zen: Diario de Gratitud (3 cosas)", 
    duration: 3,
    promptTitle: "✨ 3 Cosas que Agradeces Hoy",
    promptDesc: "Identifica y escribe 3 momentos, personas o detalles simples por los que sientes gratitud en este instante."
  },
  { 
    id: 'esc-3', 
    stage: 'escribir', 
    type: 'writing', 
    title: "📝 Bloc Zen: ¿Qué elijo soltar hoy?", 
    duration: 5,
    promptTitle: "🕊️ Soltar lo que no controlo",
    promptDesc: "¿Qué situación o expectativa está fuera de tu control hoy? Escríbela aquí con la intención de dejarla ir."
  },
  { 
    id: 'esc-4', 
    stage: 'escribir', 
    type: 'video', 
    title: "📹 Video: Journaling Interactivo para Mejorar tu Día", 
    duration: 11, 
    ytId: "JNbbebvlShI" 
  },
  { 
    id: 'esc-5', 
    stage: 'escribir', 
    type: 'video', 
    title: "📹 Video: Journaling Guiado • Crecimiento Personal", 
    duration: 19, 
    ytId: "7YkmU8q7384" 
  },

  // ETAPA 4: MEDITAR
  { 
    id: 'med-walk', 
    stage: 'meditar', 
    type: 'timer', 
    icon: '🚶‍♂️',
    title: "🚶‍♂️ Meditación Caminando (Kinhin)", 
    duration: 5, 
    instructions: "Camina a paso muy pausado y consciente. Siente el contacto de la planta del pie con el suelo. Inhala en 3 pasos, exhala en 3 pasos. Ancla tu atención al momento presente sin prisa." 
  },
  { 
    id: 'med-tension', 
    stage: 'meditar', 
    type: 'video', 
    title: "🧘 Meditación para Quitar Tensiones", 
    duration: 7, 
    ytId: "KxRpK9ZGq4Y" 
  },
  { 
    id: 'med-nidra', 
    stage: 'meditar', 
    type: 'video', 
    title: "🧘‍♀️ Yoga Nidra: Calmar el Sistema Nervioso", 
    duration: 18, 
    ytId: "dCaf8NDr1wQ" 
  },
  { 
    id: 'med-1', 
    stage: 'meditar', 
    type: 'video', 
    title: "Meditación Mindfulness: Calma y Atención", 
    duration: 6, 
    ytId: "vB6OxxhSzCA" 
  },
  { 
    id: 'med-2', 
    stage: 'meditar', 
    type: 'video', 
    title: "Relajación Guiada Antiestrés (NSDR)", 
    duration: 22, 
    ytId: "n-NIuBD59bk" 
  },
  { 
    id: 'med-3', 
    stage: 'meditar', 
    type: 'video', 
    title: "Sonidos de Lluvia y Naturaleza", 
    duration: 5, 
    ytId: "2OEL4P1Rz04" 
  }
];

const STAGE_ORDER = ['estirar', 'respirar', 'escribir', 'meditar'];

// Cargar catálogo personalizado y lista de elementos ocultos
let customItems = JSON.parse(localStorage.getItem('zen_custom_stage_items') || '[]');
let fullCatalog = [...defaultCatalog, ...customItems];
let hiddenItemIds = new Set(JSON.parse(localStorage.getItem('zen_hidden_item_ids') || '[]'));

// Cargar orden personalizado de las prácticas si fue modificado con los 6 puntos
const savedItemsOrder = JSON.parse(localStorage.getItem('zen_items_order') || 'null');
if (savedItemsOrder && Array.isArray(savedItemsOrder)) {
  if (!savedItemsOrder.includes('est-guided')) {
    const microIdx = savedItemsOrder.indexOf('est-micro');
    if (microIdx !== -1) {
      savedItemsOrder.splice(microIdx, 0, 'est-guided');
    } else {
      savedItemsOrder.unshift('est-guided');
    }
    localStorage.setItem('zen_items_order', JSON.stringify(savedItemsOrder));
  }
  const orderMap = new Map();
  savedItemsOrder.forEach((id, idx) => orderMap.set(id, idx));
  fullCatalog.sort((a, b) => {
    const orderA = orderMap.has(a.id) ? orderMap.get(a.id) : 9999;
    const orderB = orderMap.has(b.id) ? orderMap.get(b.id) : 9999;
    return orderA - orderB;
  });
}

// Definición de presets recomendados estándar (5 presets optimizados)
const DEFAULT_PRESETS = {
  micro: {
    stages: ['estirar', 'respirar'],
    options: ['est-micro', 'resp-micro']
  },
  walk: {
    stages: ['estirar'],
    options: ['est-guided']
  },
  quick_disconnect: {
    stages: ['estirar', 'escribir'],
    options: ['est-guided', 'esc-1']
  },
  neck: {
    stages: ['estirar', 'meditar'],
    options: ['est-1', 'med-tension']
  },
  complete: {
    stages: ['estirar', 'respirar', 'escribir', 'meditar'],
    options: ['est-guided', 'resp-1', 'esc-2', 'med-1']
  }
};

// Estado de selección inicial (Micro-pausa por defecto)
let activeStages = new Set(['estirar', 'respirar']);
let selectedOptionIds = new Set(['est-micro', 'resp-micro']);

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
    desc: 'Rueda los hombros en círculos lentos y amplios hacia atrás. Abre el pecho e inhala profundo.',
    icon: '🔄',
    tip: 'Inhala al subir los hombros y exhala al bajarlos para liberar el trapecio.'
  },
  {
    id: 'hombros-adelante',
    title: 'Hombros hacia adelante',
    voiceText: 'Hombros hacia adelante',
    desc: 'Gira suavemente los hombros en círculos hacia adelante, liberando la tensión de la espalda alta.',
    icon: '🔄',
    tip: 'Siente cómo se expande y relaja la zona entre tus omóplatos.'
  },
  {
    id: 'cuello-medialuna',
    title: 'Cuello: media luna atrás y adelante',
    voiceText: 'Cuello, media luna atrás y adelante',
    desc: 'Baja la barbilla y rueda suavemente de hombro a hombro en semicírculo adelante, y luego atrás.',
    icon: '🌙',
    tip: 'Movimiento fluido y suave. No fuerces la extensión cervical.'
  },
  {
    id: 'diciendo-no',
    title: 'Cuello: diciendo que no',
    voiceText: 'Cuello, diciendo que no',
    desc: 'Gira lentamente la cabeza de izquierda a derecha con suavidad, mirando sobre cada hombro.',
    icon: '↔️',
    tip: 'Mantén la espalda erguida y suelta la tensión de la mandíbula.'
  },
  {
    id: 'diciendo-si',
    title: 'Cuello: diciendo que sí',
    voiceText: 'Cuello, diciendo que sí',
    desc: 'Asiente suavemente con la cabeza arriba y abajo, mirando con calma al techo y al pecho.',
    icon: '↕️',
    tip: 'Alarga el cuello suavemente sin comprimir la nuca.'
  },
  {
    id: 'brazo-un-lado',
    title: 'Brazo hacia un lado',
    voiceText: 'Brazo hacia un lado',
    desc: 'Cruza un brazo sobre tu pecho y sostenlo suavemente con la otra mano a la altura del antebrazo.',
    icon: '💪',
    tip: 'Mantén el hombro abajo y lejos de la oreja mientras respiras.'
  },
  {
    id: 'brazo-otro-lado',
    title: 'Brazo hacia el otro lado',
    voiceText: 'Brazo hacia el otro lado',
    desc: 'Cambia de brazo: cruza el otro brazo sobre el pecho y estira con respiración profunda.',
    icon: '💪',
    tip: 'Equilibra ambos hombros y la musculatura escapular.'
  },
  {
    id: 'tocarse-pies',
    title: 'Tocarse los pies',
    voiceText: 'Tocarse los pies',
    desc: 'Inclina el tronco hacia abajo buscando tus pies o tobillos con rodillas ligeramente flexionadas.',
    icon: '🦶',
    tip: 'Descomprime la zona lumbar y estira los isquiotibiales sin tirones.'
  },
  {
    id: 'hacerse-atras',
    title: 'Hacerse hacia atrás',
    voiceText: 'Hacerse hacia atrás',
    desc: 'Apoya las manos en la cintura o espalda baja y arquea suavemente el torso hacia atrás.',
    icon: '🏹',
    tip: 'Abre el pecho hacia el cielo y contrarresta las horas en el escritorio.'
  },
  {
    id: 'subir-pantorrillas',
    title: 'Subir pantorrillas',
    voiceText: 'Subir pantorrillas',
    desc: 'Apóyate en las puntas de los pies, eleva los talones y baja de forma suave y controlada.',
    icon: '🦵',
    tip: 'Activa la bomba muscular de los gemelos y reactiva el retorno venoso.'
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
      <span class="stage-info-toast-icon">ℹ️</span>
      <span class="stage-info-toast-title">${title}</span>
      <button type="button" class="stage-info-toast-close" aria-label="Cerrar">&times;</button>
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
    const stageItems = fullCatalog.filter(i => i.stage === stageKey && !hiddenItemIds.has(i.id));
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected && stageItems.length > 0) {
      selectedOptionIds.add(stageItems[0].id);
    }
    expandedStageAccordions.add(stageKey);
  } else {
    toggleStageMoreOptions(stageKey, event);
  }
  renderAllStages();
}

function renderOptionItemHtml(item, isSelected, stageKey) {
  let iconTag = '📹 Video';
  if (item.type === 'writing') iconTag = '📝 Bloc Zen';
  if (item.type === 'timer') iconTag = '⏱️ Temporizador';
  if (item.type === 'stretch-routine') iconTag = '🤸 Guiado (15s)';

  const durLabel = (item.duration > 0 && item.duration < 1) ? `${Math.round(item.duration * 60)} seg` : `${item.duration} min`;

  return `
    <div class="option-item ${isSelected ? 'selected' : ''}" onclick="toggleOption('${item.id}', '${stageKey}')">
      <input type="checkbox" class="option-checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleOption('${item.id}', '${stageKey}')">
      <div class="option-content">
        <div class="option-title">${item.title}</div>
        <div class="option-meta">
          <span>⏱ ${durLabel}</span>
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

    if (!listEl || !cardEl || !checkboxEl) return;

    const isActive = activeStages.has(stageKey);
    checkboxEl.checked = isActive;
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
        chevronBtn.style.opacity = '0.35';
        chevronBtn.title = 'Activar etapa';
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
        <div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 12px; line-height: 1.4;">
          No hay prácticas visibles en esta etapa.<br>
          Toca el engrane ⚙️ arriba para activar o añadir prácticas desde la biblioteca.
        </div>
      `;
    } else if (selectedInStage.length > 0 && unselectedInStage.length > 0) {
      // Las seleccionadas se muestran directamente y las no seleccionadas se repliegan en el acordeón
      listEl.innerHTML = `
        <div class="stage-selected-options" style="display:flex; flex-direction:column; gap:8px;">
          ${selectedInStage.map(item => renderOptionItemHtml(item, true, stageKey)).join('')}
        </div>

        <div class="stage-accordion-content ${isExpanded ? 'open' : ''}" id="accordion-${stageKey}">
          <div class="stage-accordion-header-hint">Otras opciones disponibles:</div>
          ${unselectedInStage.map(item => renderOptionItemHtml(item, false, stageKey)).join('')}
          <button type="button" class="stage-accordion-close-btn" onclick="toggleStageMoreOptions('${stageKey}', event)" title="Contraer opciones" aria-label="Contraer opciones">
            <span class="stage-accordion-close-arrow">▲</span>
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
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  if (!activeStages.has(stageKey)) {
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
    renderAllStages();
  } else {
    toggleStageMoreOptions(stageKey, event);
  }
}

function onStageCheckboxClick(stageKey) {
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const isChecked = document.getElementById(`check-stage-${stageKey}`).checked;
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

function applyPreset(presetKey) {
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const targetCard = document.getElementById(`preset-${presetKey}`);
  if (targetCard) targetCard.classList.add('active');

  expandedStageAccordions.clear();
  activeStages.clear();
  selectedOptionIds.clear();

  const preset = DEFAULT_PRESETS[presetKey];
  if (preset) {
    preset.stages.forEach(s => activeStages.add(s));
    preset.options.forEach(opt => {
      // Si estaba oculta, reactivarla
      hiddenItemIds.delete(opt);
      selectedOptionIds.add(opt);
    });
    localStorage.setItem('zen_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));
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

    if (isFullWidth) {
      return `
        <div class="preset-card preset-custom-card custom-single" onclick="applyCustomRoutine('${r.id}')" id="preset-${r.id}">
          <div class="preset-custom-main">
            <div class="preset-icon">⭐</div>
            <div class="preset-content">
              <div class="preset-name">${escapeHtml(r.name)}</div>
              <div class="preset-desc">${r.count} prácticas configuradas • Toca para cargar</div>
            </div>
          </div>
          <span class="preset-badge-tag">${r.totalMin} min</span>
        </div>
      `;
    } else {
      return `
        <div class="preset-card preset-custom-card custom-grid" onclick="applyCustomRoutine('${r.id}')" id="preset-${r.id}">
          <div class="preset-card-top">
            <span class="preset-icon">⭐</span>
            <span class="preset-time-pill">${r.totalMin} min</span>
          </div>
          <div class="preset-card-body">
            <div class="preset-name">${escapeHtml(r.name)}</div>
            <div class="preset-desc">${r.count} prácticas • Toca para cargar</div>
          </div>
        </div>
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

function applyCustomRoutine(routineId) {
  const routines = getCustomRoutinesList();
  const routine = routines.find(r => r.id === routineId);
  if (!routine) return;

  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const targetCard = document.getElementById(`preset-${routineId}`);
  if (targetCard) targetCard.classList.add('active');

  expandedStageAccordions.clear();
  activeStages.clear();
  selectedOptionIds.clear();

  (routine.activeStages || []).forEach(s => activeStages.add(s));
  (routine.selectedOptionIds || []).forEach(id => {
    hiddenItemIds.delete(id);
    selectedOptionIds.add(id);
  });
  localStorage.setItem('zen_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

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
    title: '💾 Guardar Rutina',
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

  showZenToast(`⭐ ¡Rutina "${cleanName}" guardada en tus recomendaciones!`, 'success');
}

// --------------------------------------------------------------------------
// SISTEMA DE MEDICIÓN DE MEJORA (ANTES Y DESPUÉS)
// --------------------------------------------------------------------------

let moodScoreBefore = null;
let moodScoreAfter = null;
let moodMeasureResolver = null;

function isMeasureImprovementEnabled() {
  return localStorage.getItem('zen_measure_improvement') === 'true';
}

function toggleMeasureImprovement(enabled) {
  localStorage.setItem('zen_measure_improvement', enabled ? 'true' : 'false');
}

function onMoodSliderChange(val) {
  const num = parseInt(val, 10);
  const numberEl = document.getElementById('mood-slider-number');
  const labelEl = document.getElementById('mood-slider-label');
  const ticks = document.querySelectorAll('#mood-slider-ticks span');

  if (numberEl) {
    numberEl.innerText = num;
    
    // Colores según nivel de bienestar
    if (num <= 2) {
      numberEl.style.color = '#fca5a5';
      numberEl.style.textShadow = '0 0 20px rgba(239, 68, 68, 0.45)';
    } else if (num <= 4) {
      numberEl.style.color = '#fdba74';
      numberEl.style.textShadow = '0 0 20px rgba(249, 115, 22, 0.45)';
    } else if (num <= 6) {
      numberEl.style.color = '#fde047';
      numberEl.style.textShadow = '0 0 20px rgba(234, 179, 8, 0.45)';
    } else if (num <= 8) {
      numberEl.style.color = '#a5b4fc';
      numberEl.style.textShadow = '0 0 20px rgba(99, 102, 241, 0.45)';
    } else {
      numberEl.style.color = '#86efac';
      numberEl.style.textShadow = '0 0 20px rgba(34, 197, 94, 0.45)';
    }
  }

  const moodDescriptions = {
    1: '🔴 Máxima tensión / Agobio',
    2: '🔴 Mucho estrés / Sobrecarga',
    3: '🟠 Tensión notable',
    4: '🟠 Algo intranquilo',
    5: '🟡 Estado neutral / equilibrado',
    6: '🟡 Relajado / En control',
    7: '🔵 Calma y serenidad',
    8: '🔵 Bienestar notable',
    9: '🟢 Gran ligereza y paz',
    10: '🟢 Plena calma y serenidad interior'
  };

  if (labelEl) {
    labelEl.innerText = moodDescriptions[num] || 'Equilibrado';
  }

  // Actualizar marca activa
  if (ticks && ticks.length > 0) {
    ticks.forEach((tick, idx) => {
      tick.classList.toggle('active', (idx + 1) === num);
    });
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
  const score = slider ? parseInt(slider.value, 10) : 5;
  selectMoodScore(score);
}

function requestMoodRating(isAfter = false) {
  return new Promise((resolve) => {
    moodMeasureResolver = resolve;
    const modal = document.getElementById('mood-measure-modal');
    const titleEl = document.getElementById('mood-modal-title');
    const subtitleEl = document.getElementById('mood-modal-subtitle');
    const confirmBtn = document.getElementById('mood-slider-confirm-btn');
    const slider = document.getElementById('mood-slider-input');

    const defaultScore = 5;

    if (titleEl && subtitleEl && confirmBtn) {
      if (!isAfter) {
        titleEl.innerText = '¿Cómo te sientes antes de empezar?';
        subtitleEl.innerText = 'Desliza para registrar tu nivel de calma o tensión actual:';
        confirmBtn.innerText = 'Comenzar Rutina ➔';
      } else {
        titleEl.innerText = '¿Ahora cómo te sientes?';
        subtitleEl.innerText = 'Desliza para registrar cómo te sientes tras completar tu práctica:';
        confirmBtn.innerText = 'Ver Resultado ➔';
      }
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
      pwaBtn.innerText = '✓ Instalada';
      pwaBtn.disabled = true;
    } else {
      pwaBtn.innerText = '📲 Instalar';
      pwaBtn.disabled = false;
    }
  }

  const routines = getCustomRoutinesList();

  if (routines.length === 0) {
    body.innerHTML = `
      <div class="empty-routines-state">
        <div style="font-size:28px; margin-bottom:8px;">📝</div>
        <strong>No tienes rutinas personalizadas</strong>
        <p style="margin:4px 0 0; font-size:12px; color:var(--text-sub);">
          Selecciona tus prácticas favoritas en la pantalla principal y toca el icono 💾 junto a "Comenzar Sesión" para guardarlas.
        </p>
      </div>
    `;
  } else {
    body.innerHTML = routines.map(r => `
      <div class="manage-routine-row" id="manage-row-${r.id}">
        <div class="manage-routine-details">
          <div class="manage-routine-title">⭐ ${escapeHtml(r.name)}</div>
          <div class="manage-routine-meta">⏱️ ${r.totalMin} min • ${r.count} prácticas</div>
        </div>
        <button class="btn-delete-routine" onclick="deleteCustomRoutine('${r.id}')" title="Eliminar esta rutina">
          🗑️ Borrar
        </button>
      </div>
    `).join('');
  }

  modal.classList.add('active');
}

function closeManageRoutinesModal(event) {
  if (event && event.target !== event.currentTarget) return;
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

function openStageLibraryModal(stageKey) {
  currentLibraryStage = stageKey;
  const modal = document.getElementById('stage-library-modal');
  const titleEl = document.getElementById('library-modal-title');
  const addBtn = document.getElementById('library-btn-add');

  if (!modal) return;

  const stageTitles = {
    estirar: '🤸 1. Estirar',
    respirar: '🫁 2. Respirar',
    escribir: '✍️ 3. Escribir',
    meditar: '🧘 4. Meditar'
  };

  titleEl.innerText = `Biblioteca: ${stageTitles[stageKey] || stageKey}`;
  addBtn.innerText = `➕ Añadir video o práctica a esta etapa`;

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
    let iconTag = '📹 Video';
    if (item.type === 'writing') iconTag = '📝 Bloc Zen';
    if (item.type === 'timer') iconTag = '⏱️ Temporizador';
    if (item.type === 'stretch-routine') iconTag = '🤸 Guiado (15s)';

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
              <span>⏱ ${(item.duration > 0 && item.duration < 1) ? `${Math.round(item.duration * 60)} seg` : `${item.duration} min`}</span>
              <span>•</span>
              <span>${iconTag}</span>
              ${!isVisible ? '<span style="color:#f87171; font-weight:600;">(Oculta)</span>' : ''}
            </div>
          </div>
        </div>
        <div class="library-item-right-actions">
          ${isCustom ? `
            <button class="btn-delete-cust-item" onclick="deleteCustomItem('${item.id}')" title="Eliminar de mi biblioteca">
              🗑️
            </button>
          ` : ''}
          <div class="library-drag-handle" 
               title="Ajustar posición (Arrastra o toca los 6 puntos)" 
               aria-label="Ajustar posición" 
               data-id="${item.id}"
               onclick="openReorderMenu(event, '${item.id}')">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor">
              <circle cx="3.5" cy="4" r="1.8"/>
              <circle cx="10.5" cy="4" r="1.8"/>
              <circle cx="3.5" cy="10" r="1.8"/>
              <circle cx="10.5" cy="10" r="1.8"/>
              <circle cx="3.5" cy="16" r="1.8"/>
              <circle cx="10.5" cy="16" r="1.8"/>
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
    <button class="reorder-popup-item" ${isFirst ? 'disabled' : ''} onclick="moveStageItem('${itemId}', -1)">
      ⬆️ Subir posición
    </button>
    <button class="reorder-popup-item" ${isLast ? 'disabled' : ''} onclick="moveStageItem('${itemId}', 1)">
      ⬇️ Bajar posición
    </button>
    <button class="reorder-popup-item" ${isFirst ? 'disabled' : ''} onclick="moveStageItemToExtreme('${itemId}', 'top')">
      🔝 Al inicio
    </button>
    <button class="reorder-popup-item" ${isLast ? 'disabled' : ''} onclick="moveStageItemToExtreme('${itemId}', 'bottom')">
      🔻 Al final
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
  localStorage.setItem('zen_items_order', JSON.stringify(fullCatalog.map(i => i.id)));

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
  localStorage.setItem('zen_items_order', JSON.stringify(fullCatalog.map(i => i.id)));

  // 5. Restablecer visibilidad (quitar de ocultos todos los de esta etapa)
  restoredStageItems.forEach(item => {
    hiddenItemIds.delete(item.id);
  });
  localStorage.setItem('zen_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

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

  localStorage.setItem('zen_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));
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
  localStorage.setItem('zen_hidden_item_ids', JSON.stringify(Array.from(hiddenItemIds)));

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
      title: title.startsWith('📹') ? title : `📹 ${title}`,
      duration,
      ytId
    };
  } else if (type === 'writing') {
    newItem = {
      id: 'cust-' + Date.now(),
      stage: stageKey,
      type: 'writing',
      title: title.startsWith('📝') ? title : `📝 ${title}`,
      duration,
      promptTitle: title,
      promptDesc: instructions || 'Escribe libremente y desconecta.'
    };
  } else {
    // timer
    newItem = {
      id: 'cust-' + Date.now(),
      stage: stageKey,
      type: 'timer',
      icon: '⏱️',
      title: title.startsWith('⏱️') ? title : `⏱️ ${title}`,
      duration,
      instructions: instructions || 'Realiza este movimiento a paso relajado y consciente.'
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

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  const toast = document.createElement('div');
  toast.className = `zen-toast zen-toast-${type}`;
  toast.innerHTML = `
    <span class="zen-toast-icon">${icons[type] || '✨'}</span>
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
    } catch (e) {}
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
  if (voiceIcon) voiceIcon.innerText = isStretchVoiceEnabled ? '🗣️' : '🔇';

  if (chimeBtn) chimeBtn.classList.toggle('is-muted', !isStretchChimeEnabled);
  if (chimeIcon) chimeIcon.innerText = isStretchChimeEnabled ? '🔔' : '🔕';
}

function toggleStretchVoice() {
  isStretchVoiceEnabled = !isStretchVoiceEnabled;
  localStorage.setItem('zen_stretch_voice', isStretchVoiceEnabled ? 'true' : 'false');
  updateStretchAudioToggleButtons();
  if (isStretchVoiceEnabled) {
    showZenToast('🗣️ Voz de locución activada', 'info', 2000);
    const postureIdx = currentStretchStageIdx % STRETCH_POSTURES.length;
    speakStretchPosture(STRETCH_POSTURES[postureIdx].voiceText);
  } else {
    showZenToast('🔇 Voz de locución silenciada', 'info', 2000);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function toggleStretchChime() {
  isStretchChimeEnabled = !isStretchChimeEnabled;
  localStorage.setItem('zen_stretch_chime', isStretchChimeEnabled ? 'true' : 'false');
  updateStretchAudioToggleButtons();
  if (isStretchChimeEnabled) {
    showZenToast('🔔 Campana sonora activada', 'info', 2000);
    playStretchChime(false);
  } else {
    showZenToast('🔕 Campana silenciada', 'info', 2000);
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
        <span class="stretch-chip-num">${statusClass === 'completed' && idx !== currentPostureIdx ? '✓' : (idx + 1)}</span>
        <span>${p.icon}</span>
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
      try { navigator.vibrate([60, 40, 60]); } catch (e) {}
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

  // 2. Anillo SVG de 15 segundos
  const ringFill = document.getElementById('stretch-ring-fill');
  if (ringFill) {
    const circumference = 326.726; // 2 * PI * 52
    const fraction = Math.max(0, Math.min(1, stretchSecondsLeftInPosture / STRETCH_POSTURE_DURATION));
    const offset = circumference * (1 - fraction);
    ringFill.style.strokeDashoffset = offset;
    ringFill.classList.toggle('warning', stretchSecondsLeftInPosture <= 3);
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
    try { window.speechSynthesis.cancel(); } catch (e) {}
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
  document.getElementById('timer-icon').innerText = item.icon || '⏱️';
  document.getElementById('timer-activity-title').innerText = item.title;
  document.getElementById('timer-activity-desc').innerText = item.instructions || "Realiza este movimiento a paso relajado y consciente.";
  document.getElementById('timer-state-label').innerText = "En curso";

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

function setupNotepad(item) {
  document.getElementById('notepad-title').innerText = item.promptTitle || item.title;
  document.getElementById('notepad-desc').innerText = item.promptDesc || "Tómate este tiempo para escribir y desconectar.";

  const textarea = document.getElementById('zen-text-input');
  textarea.value = '';
  updateWordCount();
  textarea.oninput = updateWordCount;

  writingTotalSeconds = Math.round((item.duration || 5) * 60);
  writingSecondsLeft = writingTotalSeconds;
  isWritingPaused = false;
  document.getElementById('play-pause-btn').innerText = "⏸ Pausar";

  startWritingTimer();
}

function updateWordCount() {
  const text = document.getElementById('zen-text-input').value.trim();
  const words = text ? text.split(/\s+/).length : 0;
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
  document.getElementById('notepad-time-left').innerText = `⏱ Tiempo restante: ${formatTime(writingSecondsLeft)}`;
}

function copyNotepadText() {
  const text = document.getElementById('zen-text-input').value;
  if (!text) return alert("El bloc está vacío.");
  navigator.clipboard.writeText(text).then(() => alert("Copiado al portapapeles 📋"));
}

function downloadNotepadText() {
  const text = document.getElementById('zen-text-input').value;
  if (!text) return alert("El bloc está vacío.");
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Desconectar_Notas_${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
}

function clearNotepadText() {
  if (confirm("¿Deseas soltar y borrar este texto?")) {
    document.getElementById('zen-text-input').value = '';
    updateWordCount();
  }
}

// ==========================================================================
// REPRODUCTOR YOUTUBE
// ==========================================================================

window.onYouTubeIframeAPIReady = function() {
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
  } catch (err) {}
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
      nextBtn.innerText = "Empezar ahora ⏭";
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
    const delta = moodScoreAfter - moodScoreBefore;
    let deltaHtml = '';
    if (delta > 0) {
      deltaHtml = `<div class="completed-delta-text">🌿 +${delta} puntos de calma ganados</div>`;
    } else if (delta === 0) {
      deltaHtml = `<div class="completed-delta-text" style="color:#a5b4fc;">✨ Mantuviste tu equilibrio interior</div>`;
    } else {
      deltaHtml = `<div class="completed-delta-text" style="color:#fde047;">🌱 Un espacio valioso de escucha y descanso</div>`;
    }

    container.innerHTML = `
      <div class="completed-progress-card">
        <div style="font-size:13px; color:#cbd5e1; margin-bottom:10px;">
          ¡Muy bien! Esta rutina te ayudó a pasar de <strong>${moodScoreBefore}</strong> a <strong>${moodScoreAfter}</strong>.
        </div>
        <div class="completed-score-row">
          <span class="completed-score-badge">Antes: ${moodScoreBefore}/10</span>
          <span class="completed-arrow">➜</span>
          <span class="completed-score-badge" style="border:1px solid #34d399; color:#86efac;">Ahora: ${moodScoreAfter}/10</span>
        </div>
        ${deltaHtml}
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
    document.getElementById('timer-state-label').innerText = isActivityPaused ? "Pausado" : "En curso";
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

function toggleMute() {
  if (!ytPlayer) return;
  const btn = document.getElementById('mute-btn');
  if (ytPlayer.isMuted()) {
    ytPlayer.unMute();
    btn.innerText = '🔊';
  } else {
    ytPlayer.mute();
    btn.innerText = '🔇';
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
    btn.innerHTML = isFs ? '🗗' : '⛶';
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
              screen.orientation.lock('landscape').catch(() => {});
            }
          } catch (e) {}
        }).catch((err) => {
          console.warn('Pantalla completa estándar bloqueada, activando modo inmersivo:', err);
          playerSec.classList.add('is-fullscreen');
          const btn = document.getElementById('fullscreen-btn');
          if (btn) {
            btn.innerHTML = '🗗';
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
          btn.innerHTML = '🗗';
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
    } catch (e) {}

    const exit = document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen;
    if (exit && isFullscreenActive()) {
      exit.call(document).catch((err) => console.warn(err));
    }
    const btn = document.getElementById('fullscreen-btn');
    if (btn) {
      btn.innerHTML = '⛶';
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
  showZenToast('✨ ¡Aplicación instalada con éxito en tu dispositivo!', 'success');
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


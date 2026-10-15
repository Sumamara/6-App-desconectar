// ==========================================================================
// DESCONECTAR • LÓGICA DE RUTINA EN 4 ETAPAS (MOBILE FIRST)
// ==========================================================================

// 1. AVISO DE PROTOCOLO LOCAL (file:///)
if (window.location.protocol === 'file:') {
  const banner = document.getElementById('protocol-banner');
  if (banner) banner.style.display = 'block';
}

// 2. CATÁLOGO BASE ORGANIZADO EN LAS 4 ETAPAS
const defaultCatalog = [
  // ETAPA 1: ESTIRAR
  { 
    id: 'est-micro', 
    stage: 'estirar', 
    type: 'timer', 
    icon: '🧍',
    title: "🧍 Levantarse de la silla y sacudir el cuerpo", 
    duration: 1, 
    instructions: "Ponte de pie y despega la mirada de la pantalla. Estira los brazos hacia el cielo, abre el pecho, respira profundo y sacude suavemente manos y piernas para liberar tensiones." 
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
    duration: 6, 
    ytId: "4pKly2JojMw" 
  },
  { 
    id: 'est-3', 
    stage: 'estirar', 
    type: 'video', 
    title: "Pausa Activa de Postura en Escritorio", 
    duration: 5, 
    ytId: "s-7lyvblFNI" 
  },

  // ETAPA 2: RESPIRAR
  { 
    id: 'resp-micro', 
    stage: 'respirar', 
    type: 'timer', 
    icon: '🫁',
    title: "🫁 Respiración 4-7-8 Exprés (3 ciclos)", 
    duration: 1, 
    instructions: "Inhala suave por la nariz (4 segundos)... Mantén el aire en tus pulmones (7 segundos)... Exhala lento por la boca vaciando todo el pecho (8 segundos). Siente cómo se calma tu pulso." 
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
    duration: 5, 
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
    duration: 10, 
    ytId: "JNbbebvlShI" 
  },
  { 
    id: 'esc-5', 
    stage: 'escribir', 
    type: 'video', 
    title: "📹 Video: Journaling Guiado • Crecimiento Personal", 
    duration: 15, 
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
    id: 'med-nidra', 
    stage: 'meditar', 
    type: 'video', 
    title: "🧘‍♀️ Yoga Nidra: Calmar el Sistema Nervioso", 
    duration: 15, 
    ytId: "dCaf8NDr1wQ" 
  },
  { 
    id: 'med-1', 
    stage: 'meditar', 
    type: 'video', 
    title: "Meditación Mindfulness: Calma y Atención", 
    duration: 5, 
    ytId: "vB6OxxhSzCA" 
  },
  { 
    id: 'med-2', 
    stage: 'meditar', 
    type: 'video', 
    title: "Relajación Guiada Antiestrés (NSDR)", 
    duration: 20, 
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

// Cargar catálogo personalizado si existe
let customItems = JSON.parse(localStorage.getItem('zen_custom_stage_items') || '[]');
let fullCatalog = [...defaultCatalog, ...customItems];

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
// RENDERIZADO Y CONTROL DE LAS ETAPAS
// ==========================================================================

function renderAllStages() {
  STAGE_ORDER.forEach(stageKey => {
    const listEl = document.getElementById(`options-${stageKey}`);
    const cardEl = document.getElementById(`card-stage-${stageKey}`);
    const checkboxEl = document.getElementById(`check-stage-${stageKey}`);
    const badgeEl = document.getElementById(`badge-${stageKey}`);

    if (!listEl || !cardEl || !checkboxEl) return;

    const isActive = activeStages.has(stageKey);
    checkboxEl.checked = isActive;
    cardEl.classList.toggle('active', isActive);

    const stageItems = fullCatalog.filter(i => i.stage === stageKey);
    const selectedInStage = stageItems.filter(i => selectedOptionIds.has(i.id));
    const stageMin = selectedInStage.reduce((sum, i) => sum + i.duration, 0);

    if (badgeEl) {
      badgeEl.innerText = `${selectedInStage.length} seleccionada${selectedInStage.length === 1 ? '' : 's'} (${stageMin} min)`;
    }

    listEl.innerHTML = stageItems.map(item => {
      const isSelected = selectedOptionIds.has(item.id);
      let iconTag = '📹 Video';
      if (item.type === 'writing') iconTag = '📝 Bloc Zen';
      if (item.type === 'timer') iconTag = '⏱️ Temporizador';

      return `
        <div class="option-item ${isSelected ? 'selected' : ''}" onclick="toggleOption('${item.id}', '${stageKey}')">
          <input type="checkbox" class="option-checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleOption('${item.id}', '${stageKey}')">
          <div class="option-content">
            <div class="option-title">${item.title}</div>
            <div class="option-meta">
              <span>⏱ ${item.duration} min</span>
              <span class="option-tag">${iconTag}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  });

  updateTotalSummary();
  renderCustomPresets();
}

function toggleStage(stageKey) {
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  if (activeStages.has(stageKey)) {
    activeStages.delete(stageKey);
  } else {
    activeStages.add(stageKey);
    const stageItems = fullCatalog.filter(i => i.stage === stageKey);
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected && stageItems.length > 0) {
      selectedOptionIds.add(stageItems[0].id);
    }
  }
  renderAllStages();
}

function onStageCheckboxClick(stageKey) {
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const isChecked = document.getElementById(`check-stage-${stageKey}`).checked;
  if (isChecked) {
    activeStages.add(stageKey);
    const stageItems = fullCatalog.filter(i => i.stage === stageKey);
    const hasAnySelected = stageItems.some(i => selectedOptionIds.has(i.id));
    if (!hasAnySelected && stageItems.length > 0) {
      selectedOptionIds.add(stageItems[0].id);
    }
  } else {
    activeStages.delete(stageKey);
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

  activeStages.clear();
  selectedOptionIds.clear();

  if (presetKey === 'micro') {
    // ⚡ Micro-Pausa (2 min): Levantarse de la silla (1m) + Respiración 4-7-8 Exprés (1m)
    activeStages.add('estirar');
    selectedOptionIds.add('est-micro');
    activeStages.add('respirar');
    selectedOptionIds.add('resp-micro');
  } else if (presetKey === 'quick') {
    // ⏱️ Pausa Cuello (15 min): Estiramiento Cuello (10m) + Respiración (5m)
    activeStages.add('estirar');
    selectedOptionIds.add('est-1');
    activeStages.add('respirar');
    selectedOptionIds.add('resp-1');
  } else if (presetKey === 'walk') {
    // 🚶 Pausa Activa Caminar (10 min): Caminata suave (5m) + Meditación caminando (5m)
    activeStages.add('estirar');
    selectedOptionIds.add('est-walk');
    activeStages.add('meditar');
    selectedOptionIds.add('med-walk');
  } else if (presetKey === 'complete') {
    // 🌟 Desconexión Total (23 min): Cuello (10m) + Respirar (5m) + Gratitud (3m) + Mindfulness (5m)
    activeStages.add('estirar');
    selectedOptionIds.add('est-1');
    activeStages.add('respirar');
    selectedOptionIds.add('resp-1');
    activeStages.add('escribir');
    selectedOptionIds.add('esc-2');
    activeStages.add('meditar');
    selectedOptionIds.add('med-1');
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
  } else {
    // Migración transparente si existía una rutina anterior
    const legacy = localStorage.getItem('zen_custom_user_preset');
    if (legacy) {
      try {
        const legacyData = JSON.parse(legacy);
        list = [{
          id: 'routine_' + Date.now(),
          name: 'Mi Rutina Guardada',
          activeStages: legacyData.activeStages || [],
          selectedOptionIds: legacyData.selectedOptionIds || [],
          totalMin: legacyData.totalMin || 0,
          count: legacyData.count || 0
        }];
        localStorage.setItem('zen_custom_routines_list', JSON.stringify(list));
      } catch (e) {}
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

  // Si hay exactamente 1 rutina: se muestra horizontal a lo largo (span 2)
  // Si hay 2 o más: se adaptan en la cuadrícula de 2 columnas (span 1 cada una)
  const isSingle = routines.length === 1;

  container.innerHTML = routines.map(r => {
    if (isSingle) {
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

  activeStages.clear();
  selectedOptionIds.clear();

  (routine.activeStages || []).forEach(s => activeStages.add(s));
  (routine.selectedOptionIds || []).forEach(id => selectedOptionIds.add(id));

  renderAllStages();

  // Re-marcar activa tras renderAllStages
  const cardAfter = document.getElementById(`preset-${routineId}`);
  if (cardAfter) cardAfter.classList.add('active');
}

function promptSaveCurrentRoutine() {
  buildQueue();
  if (currentQueue.length === 0) {
    alert("⚠️ Por favor marca o selecciona al menos una práctica antes de guardar tu rutina.");
    return;
  }

  const totalMin = currentQueue.reduce((sum, i) => sum + i.duration, 0);
  const defaultName = `Mi Rutina (${totalMin} min)`;
  const routineName = prompt("¿Qué nombre deseas ponerle a esta rutina?", defaultName);

  if (routineName === null) return; // Cancelado por el usuario
  const cleanName = routineName.trim() || defaultName;

  const newRoutine = {
    id: 'routine_' + Date.now(),
    name: cleanName,
    activeStages: Array.from(activeStages),
    selectedOptionIds: Array.from(selectedOptionIds),
    totalMin: totalMin,
    count: currentQueue.length,
    createdAt: new Date().toISOString()
  };

  const routines = getCustomRoutinesList();
  routines.push(newRoutine);
  saveCustomRoutinesList(routines);

  renderCustomPresets();

  // Marcar como activa la recién creada
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`preset-${newRoutine.id}`);
  if (card) card.classList.add('active');

  alert(`⭐ ¡Tu rutina "${cleanName}" (${totalMin} min • ${currentQueue.length} prácticas) se ha guardado arriba!`);
}

// --------------------------------------------------------------------------
// MODAL DE CONFIGURACIÓN Y ELIMINACIÓN DE RUTINAS
// --------------------------------------------------------------------------

function openManageRoutinesModal() {
  const modal = document.getElementById('manage-routines-modal');
  const body = document.getElementById('manage-routines-body');
  if (!modal || !body) return;

  const routines = getCustomRoutinesList();

  if (routines.length === 0) {
    body.innerHTML = `
      <div class="empty-routines-state">
        <div style="font-size:28px; margin-bottom:8px;">📝</div>
        <strong>No tienes rutinas personalizadas</strong>
        <p style="margin:4px 0 0; font-size:12px; color:var(--text-sub);">
          Selecciona tus etapas favoritas en la pantalla principal y presiona el botón <strong>"➕ Guardar rutina"</strong>.
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

function deleteCustomRoutine(routineId) {
  let routines = getCustomRoutinesList();
  const routine = routines.find(r => r.id === routineId);
  const routineName = routine ? routine.name : 'esta rutina';

  if (!confirm(`¿Seguro que deseas eliminar "${routineName}"?`)) {
    return;
  }

  routines = routines.filter(r => r.id !== routineId);
  saveCustomRoutinesList(routines);

  // Re-renderizar dentro del modal
  openManageRoutinesModal();

  // Re-renderizar presets en pantalla principal
  renderCustomPresets();
}

// Actualizar barra flotante inferior
function updateTotalSummary() {
  buildQueue();

  const totalMin = currentQueue.reduce((sum, item) => sum + item.duration, 0);
  const count = currentQueue.length;

  document.getElementById('bottom-total-time').innerText = totalMin;
  document.getElementById('bottom-total-count').innerText = count;
  document.getElementById('start-btn').disabled = count === 0;
}

// Construye la cola de reproducción en estricto orden: 1. Estirar -> 2. Respirar -> 3. Escribir -> 4. Meditar
function buildQueue() {
  currentQueue = [];

  STAGE_ORDER.forEach(stageKey => {
    if (activeStages.has(stageKey)) {
      const stageItems = fullCatalog.filter(i => i.stage === stageKey && selectedOptionIds.has(i.id));
      currentQueue.push(...stageItems);
    }
  });
}

// ==========================================================================
// AÑADIR OPCIONES PERSONALIZADAS
// ==========================================================================

function openAddOptionModal(stageKey) {
  const title = prompt(`Nombre de la nueva práctica para ${stageKey.toUpperCase()}:`);
  if (!title || !title.trim()) return;

  const durationStr = prompt("Duración estimada en minutos:", "5");
  const duration = parseInt(durationStr) || 5;

  let newItem = null;

  if (stageKey === 'escribir') {
    const isVideo = confirm("¿Es un video de YouTube? (Aceptar para Video, Cancelar para Bloc de notas)");
    if (isVideo) {
      const url = prompt("Enlace de YouTube o Video ID:");
      const ytId = extractYouTubeId(url);
      if (!ytId) return alert("Enlace no válido.");
      newItem = { id: 'cust-' + Date.now(), stage: stageKey, type: 'video', title: `📹 ${title.trim()}`, duration, ytId };
    } else {
      const desc = prompt("Instrucción o pregunta de reflexión:", title);
      newItem = { id: 'cust-' + Date.now(), stage: stageKey, type: 'writing', title: `📝 ${title.trim()}`, duration, promptTitle: title.trim(), promptDesc: desc || "Escribe libremente." };
    }
  } else {
    const isTimer = confirm("¿Es un temporizador de actividad (ej. caminar, estirarse)?\n(Aceptar para Temporizador, Cancelar para Video de YouTube)");
    if (isTimer) {
      const instructions = prompt("Instrucciones para esta actividad (ej. Camina despacio):", "Muévete con calma y respira conscientemente.");
      newItem = { id: 'cust-' + Date.now(), stage: stageKey, type: 'timer', icon: '⏱️', title: title.trim(), duration, instructions };
    } else {
      const url = prompt("Enlace o ID de YouTube:");
      const ytId = extractYouTubeId(url);
      if (!ytId) return alert("Enlace no válido.");
      newItem = { id: 'cust-' + Date.now(), stage: stageKey, type: 'video', title: title.trim(), duration, ytId };
    }
  }

  if (newItem) {
    customItems.push(newItem);
    localStorage.setItem('zen_custom_stage_items', JSON.stringify(customItems));
    fullCatalog.push(newItem);
    selectedOptionIds.add(newItem.id);
    activeStages.add(stageKey);
    renderAllStages();
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

function startRoutine() {
  buildQueue();
  if (currentQueue.length === 0) return;

  document.getElementById('builder-section').style.display = 'none';
  document.getElementById('bottom-sticky-bar').style.display = 'none';
  document.getElementById('player-section').style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  loadStep(0);
}

function backToBuilder() {
  stopWritingTimer();
  stopActivityTimer();
  if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
  clearInterval(progressTimer);
  clearTimeout(transitionTimeout);

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
  hideOverlays();

  currentStepIdx = index;
  const item = currentQueue[currentStepIdx];

  const stageLabels = {
    'estirar': '1. Estirar',
    'respirar': '2. Respirar',
    'escribir': '3. Escribir',
    'meditar': '4. Meditar'
  };

  document.getElementById('step-counter').innerText = `${stageLabels[item.stage] || 'Práctica'} (${currentStepIdx + 1} de ${currentQueue.length}) • ${item.duration} min`;
  document.getElementById('current-title').innerText = item.title;
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('time-display').innerText = '00:00 / 00:00';

  const videoBox = document.getElementById('video-wrapper-box');
  const notepadBox = document.getElementById('zen-notepad-wrapper');
  const timerBox = document.getElementById('zen-timer-wrapper');
  const videoExtraControls = document.getElementById('video-extra-controls');

  if (item.type === 'writing') {
    // MODO ESCRITURA ZEN
    if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
    videoBox.style.display = 'none';
    timerBox.style.display = 'none';
    notepadBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'none';

    setupNotepad(item);
  } else if (item.type === 'timer') {
    // MODO TEMPORIZADOR ZEN (Caminata / Levantarse / Kinhin)
    if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
    videoBox.style.display = 'none';
    notepadBox.style.display = 'none';
    timerBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'none';

    setupZenTimer(item);
  } else {
    // MODO VIDEO (YouTube)
    notepadBox.style.display = 'none';
    timerBox.style.display = 'none';
    videoBox.style.display = 'block';
    if (videoExtraControls) videoExtraControls.style.display = 'flex';

    initOrLoadYouTube(item.ytId);
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

  activityTotalSeconds = (item.duration || 5) * 60;
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

  writingTotalSeconds = (item.duration || 5) * 60;
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
        ...(originParam ? { 'origin': originParam } : {})
      },
      events: {
        'onReady': (e) => {
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
    document.getElementById('next-up-text').innerText = "✨ ¡Completaste tu sesión de desconexión!";
    const nextBtn = document.getElementById('transition-next-btn');
    if (nextBtn) {
      nextBtn.innerText = "🧘 Finalizar y Salir";
      nextBtn.onclick = backToBuilder;
    }
    transitionOverlay.style.display = 'flex';
  }
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
    backToBuilder();
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
  const pct = (e.clientX - rect.left) / rect.width;

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

function toggleFullscreen() {
  const playerSec = document.getElementById('player-section');
  if (!document.fullscreenElement) {
    playerSec.requestFullscreen().catch(() => alert("Pantalla completa no disponible"));
  } else {
    document.exitFullscreen();
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Iniciar renderizado inicial
renderAllStages();

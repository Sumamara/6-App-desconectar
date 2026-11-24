# 🔔 Futuro: Recordatorios y Notificaciones (Versión actualizada)

> **Estado actual:** La app ya cuenta con PWA instalada (`manifest.json` + `sw.js`). Esta sección resume el análisis técnico actualizado para implementar recordatorios diarios que funcionen al **100% en celular (Android e iOS)** con la app cerrada.

---

## 1. Comparativa de enfoques posibles

| Enfoque | Funciona con app cerrada (Android/iOS) | Requiere servidor | Ícono de notificación | Notas clave |
| :--- | :---: | :---: | :--- | :--- |
| **Opción 1 · Calendario (`.ics`)** | Sí (100%) | No | Google / Apple Calendar | Cero mantenimiento, pero no todos los usuarios usan su app de calendario. |
| **Opción 2 · Web Push real** *(Recomendada)* | Sí (100% en Android; en iOS 16.4+ instalada) | Sí (mini-backend gratis) | Propio de **Desconectar** | Experiencia nativa sin depender de calendario; 100% automático por usuario. |
| **Opción 3 · Notificación local solo en JS** | **No** (no llega al 100%) | No | Propio de **Desconectar** | Los navegadores móviles pausan temporizadores (`setTimeout`/SW) al apagar pantalla o por Android *Doze*, incluso sin ahorro de batería. |

---

## 2. Cómo funciona Web Push automático (Opción 2)

No se envía nada a mano. El flujo es completamente automático y respeta la privacidad (no requiere correo ni cuenta de usuario):

1. En **Ajustes**, el usuario activa **Recordatorio diario**, elige hora y días (ej. L–V `18:30`) y acepta el permiso de notificaciones.
2. La app envía de forma anónima `{ subscription, hora, días, zona_horaria }` a un mini-backend gratuito.
3. Un **Cron automático** (cada 15–30 min) revisa a qué usuarios les corresponde según su hora local y dispara el push individual automáticamente.
4. En `sw.js`, los eventos `push` y `notificationclick` muestran el aviso con el ícono de *Desconectar* y abren la app al tocarlo.

*(Requisito: la app debe estar servida bajo `https://`, como GitHub Pages).*

---

## 3. Alternativas gratuitas de backend para Web Push

| Alternativa | Pide tarjeta | Complejidad | Ventaja principal | Detalle a considerar |
| :--- | :---: | :---: | :--- | :--- |
| **Cloudflare Workers + KV + Cron** | No | Media | 100,000 req/día gratis, 1 solo archivo `worker.js`, sin pausas por inactividad. | Requiere cuenta gratuita de Cloudflare y llaves VAPID. |
| **Supabase** *(DB + Edge Functions + `pg_cron`)* | No | Media | Tabla visual de suscripciones y `pg_cron` incluido. | El plan gratis se pausa tras 7 días sin actividad (el cron lo mantiene despierto). |
| **GitHub Actions + Supabase** | No | Media | Usa la misma cuenta de **GitHub** del repo como cron gratuito cada 15–30 min. | Los crons de GitHub pueden tener 2–5 min de variación. |
| **OneSignal** | No | Muy fácil | Panel visual listo sin programar servidor ni llaves VAPID (gratis hasta 10,000 suscriptores). | Mejor para envíos por zona horaria; menos flexible si cada usuario elige cualquier minuto exacto. |
| **Firebase (Google)** | Sí *(plan Blaze)* | Media | Estándar nativo de Android/Chrome. | Aunque tiene cuota gratuita amplia, pide tarjeta para activar Cloud Functions con cron. |
| **Netlify / Vercel** | No | Media | Vive en el mismo proyecto web. | Requieren base de datos aparte (ej. Supabase/Upstash) y en Vercel gratis el cron corre 1 vez al día. |

### Recomendación para *Desconectar*
- **Hora y días 100% libres por usuario (sin tarjeta):** **Cloudflare Workers** o **Supabase** (opcionalmente con **GitHub Actions**).
- **Cero código de servidor:** **OneSignal**.

---

---

# 📦 Versión 1 (propuesta inicial)

## 🔔 Futuro: Web App (PWA) & Sistema de Recordatorios y Notificaciones

Este documento especifica los requisitos y la arquitectura técnica para convertir **Desconectar** en una **Progressive Web App (PWA)** instalable con soporte de recordatorios programados a la hora que el usuario elija.

---

## 1. Objetivos

1. **Instalabilidad directa sin App Store / Google Play:**
   - Poder pulsar *"Instalar app"* o *"Añadir a pantalla de inicio"* en iOS, Android, Windows y macOS.
   - Ícono de app independiente, inicio a pantalla completa (sin barra del navegador) y carga ultra-rápida offline.
2. **Selector de Horario de Desconexión:**
   - Permitir al usuario elegir a qué hora del día desea desconectar (ejemplo: `18:30` o `21:00`).
   - Opción para elegir los días de recordatorio (ej. *Lunes a Viernes* o *Todos los días*).
3. **Notificaciones Push / Locales:**
   - Enviar un mensaje suave, inspirador y sin spam en el momento elegido:
     > *"🧘 Momento de desconectar: Regálate 2 minutos para soltar la pantalla y reiniciar tu mente."*

---

## 2. Componentes de la PWA

### A. Archivo `manifest.json`
Define la identidad de la aplicación al instalarse:
```json
{
  "name": "Desconectar • Sesión Diaria",
  "short_name": "Desconectar",
  "description": "Rutina en 4 etapas para liberar estrés y pausar la mente.",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#0b1120",
  "theme_color": "#0b1120",
  "orientation": "any",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### B. Service Worker (`sw.js`)
* Maneja el almacenamiento en caché de archivos estáticos (`index.html`, `styles.css`, `app.js`).
* Permite que la app cargue de forma instantánea incluso si el usuario está en modo avión o sin conexión a internet.
* Gestiona la recepción y visualización de notificaciones en segundo plano.

---

## 3. Selector de Horario de Recordatorio en la Interfaz

### En el panel de configuración (modal del engrane):
```html
<div class="setting-reminder-box">
  <div class="setting-header">
    <span>🔔 Recordatorio diario</span>
    <label class="switch">
      <input type="checkbox" id="check-reminder-active">
      <span class="slider round"></span>
    </label>
  </div>
  <div class="reminder-time-row" id="reminder-time-controls">
    <label for="reminder-time">Hora preferida:</label>
    <input type="time" id="reminder-time" value="18:30" class="zen-time-input">
  </div>
  <div class="reminder-days-selector">
    <button class="day-chip active">L</button>
    <button class="day-chip active">M</button>
    <button class="day-chip active">X</button>
    <button class="day-chip active">J</button>
    <button class="day-chip active">V</button>
    <button class="day-chip">S</button>
    <button class="day-chip">D</button>
  </div>
</div>
```

---

## 4. Estrategia de Notificaciones

1. **Permiso de Notificación:**
   - Se solicita al usuario de forma contextual mediante la API:
     ```javascript
     const permission = await Notification.requestPermission();
     ```
2. **Programación:**
   - **En navegadores modernos / móviles:** Se utiliza el Service Worker con la API de `Notification` o la API de sincronización periódica en segundo plano (`Periodic Background Sync API`).
   - **Alternativa sencilla sin servidor:** Al abrir la app o mantenerla en segundo plano, un temporizador calcula los milisegundos restantes hasta la hora programada y dispara `new Notification(...)` local.
   - **Alternativa robusta en la nube (Gratuita con Supabase / Firebase / OneSignal):** Almacenar la suscripción Web Push del usuario y disparar una llamada cron a la hora indicada.

3. **Acción al hacer clic en la notificación:**
   - Al tocar la notificación, la app se abre automáticamente en la pantalla principal lista para comenzar la sesión recomendada con un solo clic.

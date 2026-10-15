# 🔔 Futuro: Web App (PWA) & Sistema de Recordatorios y Notificaciones

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

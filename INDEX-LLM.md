# INDEX-LLM — App Desconectar

Directory index of all files in `6 App desconectar` (a mobile-first Progressive Web App for 4-stage daily disconnect routines: Estirar, Respirar, Escribir, Meditar).

---

## Core Application

### `index.html`
- **Location:** `index.html`
- **Description:** Main single-page PWA HTML document defining the 4-stage routine builder, quick presets, multi-mode player views (YouTube video, Zen Notepad, Zen Timer, and 15-second guided stretching), and all interactive modals.
- **When to use it:** Edit when changing page structure, adding/updating UI sections, modals, presets, metadata/PWA tags, or asset cache-busting query versions.

### `app.js`
- **Location:** `app.js`
- **Description:** Core client-side JavaScript implementing the 4-stage practice catalog, custom routines and `localStorage` persistence, YouTube IFrame playback, Zen Notepad, Zen Timer, voice/chime-guided stretching routine, mood measurement, and PWA install logic.
- **When to use it:** Edit when modifying application behavior, adding or updating default practices/presets, fixing player/timer/storage bugs, or implementing new features.

### `styles.css`
- **Location:** `styles.css`
- **Description:** Mobile-first dark-theme stylesheet containing CSS variables, responsive preset grids, stage accordions, player/timer/notepad/stretch layouts, modal styles, and animations.
- **When to use it:** Edit when adjusting visual styling, colors, typography, responsive breakpoints, or layout for any view or modal.

### `manifest.json`
- **Location:** `manifest.json`
- **Description:** Web App Manifest declaring the "Desconectar" PWA identity, standalone display mode, theme/background colors, and icon assets.
- **When to use it:** Edit when updating PWA install metadata, app name, theme colors, start URL, or icon references/versions.

### `sw.js`
- **Location:** `sw.js`
- **Description:** Service Worker (`desconectar-pwa-v20`) providing offline support via stale-while-revalidate caching for local static assets while letting external requests (YouTube, Google Fonts) pass straight to the network.
- **When to use it:** Edit when bumping the cache version, adding/removing cached static assets, or changing offline/network fetch behavior.

### `iniciar_app.bat`
- **Location:** `iniciar_app.bat`
- **Description:** Windows batch script that launches a local HTTP server on `http://localhost:3000` (via Python or `npx serve`) and opens the app in the browser to prevent YouTube Error 153 under `file://`.
- **When to use it:** Run locally on Windows to test or use the app with working YouTube embeds, or edit when changing the local dev server port or startup commands.

---

## Icons & Visual Assets (`icons/`)

### `icons/icon.svg`
- **Location:** `icons/icon.svg`
- **Description:** Scalable vector squircle app icon featuring a dark cosmic gradient and a glowing neon waveform transitioning from jagged warm coral/amber (tension) to a smooth cyan/indigo/purple curve (calm).
- **When to use it:** Use as the primary vector favicon/PWA icon or edit as the vector source when updating the app's visual identity.

### `icons/icon-maskable.svg`
- **Location:** `icons/icon-maskable.svg`
- **Description:** Full-bleed maskable SVG variant of the tension-to-calm waveform icon scaled to 78% inside the central safe zone for Android adaptive icon cropping.
- **When to use it:** Reference in `manifest.json` for `purpose: "maskable"` icons or edit when adjusting safe-zone padding for Android home screens.

### `icons/icon-192.png`
- **Location:** `icons/icon-192.png`
- **Description:** 192×192 PNG raster app icon showing the dark squircle and glowing tension-to-calm neon waveform for standard mobile and Apple touch icons.
- **When to use it:** Reference in `manifest.json` and `index.html` (`apple-touch-icon` / alternate icon) whenever a standard raster icon is required.

### `icons/icon-512.png`
- **Location:** `icons/icon-512.png`
- **Description:** 512×512 PNG high-resolution raster app icon showing the dark squircle and glowing tension-to-calm neon waveform for splash screens and desktop/PWA installs.
- **When to use it:** Reference in `manifest.json` for high-DPI PWA installation prompts and splash screens.

### `icons/icon_wave_calm_original.jpg`
- **Location:** `icons/icon_wave_calm_original.jpg`
- **Description:** High-resolution concept artwork of the dark squircle tension-to-calm waveform icon rendered on a soft light-lavender background with a drop shadow.
- **When to use it:** Use as the visual design reference or marketing/preview asset rather than a runtime web icon.

---

## Future Specifications & Roadmap (`*.md`)

### `mejoras_a_futuro.md`
- **Location:** `mejoras_a_futuro.md`
- **Description:** Master roadmap document covering the Cloudflare R2 MP4 migration plan, a hosting provider comparison table, and high-level summaries of upcoming features (Plyr.io, background audio, calendar, mindfulness stage).
- **When to use it:** Consult when prioritizing future roadmap work or evaluating video hosting alternatives and planned enhancements.

### `futuro_videosmp4.md`
- **Location:** `futuro_videosmp4.md`
- **Description:** Focused technical guide detailing free-tier capacity, pricing, and step-by-step setup for migrating from YouTube embeds to self-hosted `.mp4` videos on Cloudflare R2.
- **When to use it:** Consult when implementing self-hosted HTML5 `<video>` playback or setting up a Cloudflare R2 bucket for app media.

### `futuro_calendario.md`
- **Location:** `futuro_calendario.md`
- **Description:** Functional and technical specification for a future Progress Calendar, habit streak tracker, heatmap, and before/after emotional evolution chart stored in `localStorage` (`zen_history_sessions`).
- **When to use it:** Consult when designing or implementing session history persistence, streaks, mood analytics, or data export features.

### `futuro_entrenamiento_mindfulness.md`
- **Location:** `futuro_entrenamiento_mindfulness.md`
- **Description:** Specification for an optional 5th stage ("Entrenamiento de Mindfulness") toggleable from settings, featuring a progressive 7-step neuroscientific training curriculum and progression state.
- **When to use it:** Consult when implementing the optional 5th stage, its 7-step catalog items, or progressive level unlocking.

### `futuro_notificacion.md`
- **Location:** `futuro_notificacion.md`
- **Description:** Technical specification for PWA installability and a configurable daily disconnect reminder system with time/day selectors and local or Web Push notifications.
- **When to use it:** Consult when implementing scheduled daily reminders, notification permissions, or Service Worker notification handlers.

### `futuro_respiracion_resonante.md`
- **Location:** `futuro_respiracion_resonante.md`
- **Description:** Scientific reference and somatic protocol for Resonant Breathing (Heart Coherence at ~5.5s inhale and ~5.5s exhale) along with visual animation and chime integration guidelines.
- **When to use it:** Consult when refining copy, pacing animations, or audio cues for the Resonant Breathing practice in Stage 2.

---

## Scratch & Backups (`scratch/`)

### `scratch/App_desconectar_backup.html`
- **Location:** `scratch/App_desconectar_backup.html`
- **Description:** Earlier HTML backup snapshot (v0.83) of `index.html` captured prior to adding the guided 15-second stretching routine view and v0.86/v0.87 updates.
- **When to use it:** Use only as a historical reference or rollback comparison; do not edit for active app development.

### `scratch/generate_png_icons.js`
- **Location:** `scratch/generate_png_icons.js`
- **Description:** Standalone Node.js script that programmatically encodes placeholder concentric-ring Zen PNG icons (`icon-192.png` and `icon-512.png`) using raw PNG chunks and `zlib`.
- **When to use it:** Use as a utility reference if you ever need to regenerate simple programmatic PNG placeholders; do not run it over the current neon-waveform icons unless you intend to overwrite them.

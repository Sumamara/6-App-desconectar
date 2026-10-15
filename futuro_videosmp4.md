# 🚀 Futuro: Migración a Videos Propios (MP4 en Cloudflare R2)

Este documento detalla la hoja de ruta técnica para migrar de videos embebidos de YouTube a videos propios `.mp4` alojados en Cloudflare R2, logrando una experiencia 100% limpia, profesional e idéntica a aplicaciones de clase mundial como Calm o Headspace.

---

## 1. ¿Por qué dar el salto de YouTube a Cloudflare R2?

* **Cero distracciones visuales:** Se eliminan para siempre los títulos superpuestos, logos de YouTube, marcas de agua, botones de compartir y tarjetas finales de *"Más videos"*.
* **Cero errores de reproducción:** No depende de las restricciones de inserción de Google ni sufrirá jamás el **Error 153**.
* **Control total de la interfaz:** Permite usar un reproductor HTML5 nativo o integrar librerías elegantes como **Plyr.io**.
* **Experiencia idéntica a apps comerciales** como *Calm*, *Headspace* o *Down Dog*.

---

## 2. Capacidad del Plan Gratuito de Cloudflare R2

Cloudflare R2 incluye un **plan gratuito permanente** de:
* **10 GB de almacenamiento mensual** ($0.00).
* **Ancho de banda ilimitado y gratuito (Egress = $0.00):** A diferencia de Amazon S3 o Google Cloud, Cloudflare **no cobra nada** por los gigabytes que tus usuarios reproduzcan o descarguen.
* **10 millones de operaciones de lectura mensuales.**

### Rendimiento estimado de los 10 GB gratis:
| Calidad de Video | Peso aprox. por minuto | Horas totales en 10 GB | Videos de 5 minutos | Videos de 10 minutos |
| :--- | :--- | :--- | :--- | :--- |
| **720p HD (Recomendada)** | ~8 a 10 MB / min | **~18 a 20 horas** | **~200 a 220 videos** | **~100 a 110 videos** |
| **1080p Full HD** | ~18 a 20 MB / min | **~8 a 9 horas** | **~100 a 110 videos** | **~50 a 55 videos** |
| **480p SD (Ligera)** | ~4 a 5 MB / min | **~35 a 40 horas** | **~400 videos** | **~200 videos** |

> **Nota para videos de relajación:** Al ser tomas con cámara fija y movimientos suaves, la compresión de video es extremadamente eficiente. Un video de 720p de 10 minutos suele pesar entre **60 y 80 MB**, por lo que 10 GB rinden para una biblioteca completa de más de 120 sesiones.

### ¿Y si te pasas de los 10 GB?
El costo de almacenamiento adicional es de solo **$0.015 USD por GB al mes**:
* **20 GB totales** (10 GB gratis + 10 GB extra) = **$0.15 USD/mes** (15 centavos de dólar).
* **50 GB totales** = **$0.60 USD/mes** (menos de 1 dólar).
* El tráfico sigue siendo **$0.00 siempre**.

---

## 3. Guía de Configuración Paso a Paso en Cloudflare R2

1. **Crear cuenta en Cloudflare:**
   - Regístrate gratis en [cloudflare.com](https://www.cloudflare.com/).
   - En el menú lateral izquierdo, haz clic en **R2 Object Storage**.
   - Ingresa un método de pago (requerido por Cloudflare para verificación de cuentas, pero no cobra si estás dentro de los 10 GB gratis).
2. **Crear el Bucket de almacenamiento:**
   - Haz clic en **Create Bucket**.
   - Asígnale un nombre en minúsculas, por ejemplo: `app-desconectar-videos`.
   - Deja la ubicación en *Automatic* y pulsa **Create Bucket**.
3. **Activar el acceso público (Public URL):**
   - Entra al bucket recién creado y ve a la pestaña **Settings**.
   - En la sección **Public Access**, haz clic en **Allow Access** bajo *R2.dev subdomain*.
   - Te dará una dirección base pública gratuita del tipo:
     `https://pub-xxxxxxxxxxxxxx.r2.dev`
4. **Subir los videos MP4:**
   - Ve a la pestaña **Objects** y arrastra tus archivos `.mp4` (ej. `respiracion-478.mp4`, `estiramiento-cuello.mp4`).
   - Al hacer clic en el archivo subido, verás su enlace público directo:
     `https://pub-xxxxxxxxxxxxxx.r2.dev/respiracion-478.mp4`
5. **Conectar a la App:**
   - En `app.js`, simplemente reemplazas los IDs de YouTube por las URLs directas de tus videos MP4 y reproduces con `<video src="...">`.

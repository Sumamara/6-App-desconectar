const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Función para calcular CRC32 para los chunks de PNG
function makeCrcTable() {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  return table;
}

const crcTable = makeCrcTable();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4);
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  buf.writeUInt32BE(crc32(typeAndData), 8 + len);
  return buf;
}

function createZenPng(size) {
  const width = size;
  const height = size;
  
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8 bits per channel
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // Compression
  ihdrData.writeUInt8(0, 11); // Filter
  ihdrData.writeUInt8(0, 12); // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Scanlines con filtro 0 (None)
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowBytes);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = width / 2;

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Color base: Gradiente radial Zen (#1e1b4b a #090d16)
      const t = Math.min(1, dist / maxR);
      let r = Math.round(30 * (1 - t) + 9 * t);
      let g = Math.round(27 * (1 - t) + 13 * t);
      let b = Math.round(75 * (1 - t) + 22 * t);
      let a = 255;

      // Círculo zen y loto suave
      if (dist < maxR * 0.7 && dist > maxR * 0.65) {
        // Anillo de calma
        r = 129; g = 140; b = 248; // #818cf8
      } else if (dist < maxR * 0.45 && dist > maxR * 0.41) {
        // Segundo anillo interior
        r = 165; g = 180; b = 252; // #a5b4fc
      } else if (dist < maxR * 0.28) {
        // Centro brillante
        const innerT = dist / (maxR * 0.28);
        r = Math.round(255 * (1 - innerT) + 99 * innerT);
        g = Math.round(255 * (1 - innerT) + 102 * innerT);
        b = Math.round(255 * (1 - innerT) + 241 * innerT);
      }

      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
      rawData[offset++] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve(__dirname, '..', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'icon-192.png'), createZenPng(192));
fs.writeFileSync(path.join(outDir, 'icon-512.png'), createZenPng(512));

console.log('✅ Generated icons/icon-192.png and icons/icon-512.png successfully!');

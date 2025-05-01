// data.js - Dati estrapolati per il tracciato e il profilo altimetrico dell'Alba dei Marsi 21km

// TrackPoints: array di punti che definiscono il percorso (coordinate in pixel)
// Questi dati sono stati estrapolati e semplificati; in una versione reale potrai utilizzare più punti.
// ATTENZIONE: le coordinate sono relative a un canvas di dimensioni fisse (ad esempio 800x600). Adatta la scala se necessario.
const trackPoints = [
  { x: 50,  y: 350 },
  { x: 90,  y: 320 },
  { x: 130, y: 310 },
  { x: 180, y: 290 },
  { x: 230, y: 280 },
  { x: 290, y: 290 },
  { x: 350, y: 320 },
  { x: 410, y: 360 },
  { x: 460, y: 400 },
  { x: 510, y: 440 },
  { x: 570, y: 460 },
  { x: 630, y: 440 },
  { x: 680, y: 400 },
  { x: 720, y: 360 },
  { x: 760, y: 330 },
  { x: 800, y: 310 },
  { x: 50,  y: 350 }  // Chiusura del loop
];

// altKeyPoints: array di punti chiave per il profilo altimetrico.
// Ogni punto ha una proprietà "p" (frazione lungo il percorso, da 0 a 1)
// ed una proprietà "alt" (l'altitudine corrispondente in metri).
const altKeyPoints = [
  { p: 0.0,  alt: 800 },
  { p: 0.1,  alt: 850 },
  { p: 0.2,  alt: 900 },
  { p: 0.3,  alt: 1000 },
  { p: 0.4,  alt: 1100 },
  { p: 0.5,  alt: 1200 },
  { p: 0.6,  alt: 1150 },
  { p: 0.7,  alt: 1050 },
  { p: 0.8,  alt: 950 },
  { p: 0.9,  alt: 850 },
  { p: 1.0,  alt: 800 }
];
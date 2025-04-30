function drawLogo() {
  const canvas = document.getElementById("logoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  // Cancella l'area
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dimensioni del pixel; modificalo per ottenere l'effetto desiderato
  const pixelSize = 10;
  
  // Definiamo una matrice di stringhe rappresentante la forma del casco romano stilizzato
  // "P" = Pink, "B" = Black, " " = trasparente (sfondo)
  const logoData = [
    "      PPPP      ",
    "    PPBBBBPP    ",
    "   PBBBBBBBPP   ",
    "  PBBBBBBBBBBP  ",
    "  PBBPP  PPBBP  ",
    "  PBPP    PPBP  ",
    "  PBPP    PPBP  ",
    "  PBBPP  PPBBP  ",
    "  PBBBBBBBBBBP  ",
    "   PBBBBBBBPP   ",
    "    PPBBBBPP    ",
    "      PPPP      "
  ];
  
  // Disegniamo il casco in pixel art
  for (let row = 0; row < logoData.length; row++) {
    for (let col = 0; col < logoData[row].length; col++) {
      const ch = logoData[row].charAt(col);
      if (ch === "P") {
        ctx.fillStyle = "#ff69b4"; // rosa brillante
      } else if (ch === "B") {
        ctx.fillStyle = "#000000"; // nero
      } else {
        // Spazio vuoto, passa
        continue;
      }
      ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
    }
  }
  
  // Scriviamo il testo sottostante il disegno
  ctx.font = "bold 10px 'Press Start 2P'";
  ctx.fillStyle = "#ffea00"; // colore giallo in stile retrò
  const baseY = logoData.length * pixelSize;
  ctx.fillText("L'ALBA DEI MARSI 2025", 0, baseY + 12);
  ctx.fillText("TRAIL RUNNING", 0, baseY + 24);
  ctx.fillText("KM 12 - KM 21", 0, baseY + 36);
}

// Chiamata alla funzione per disegnare il logo
drawLogo();

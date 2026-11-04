// Genera imágenes PNG reales de problemas de física tipo libro de texto para probar el análisis multimodal por imagen

export function generateProblemDiagramDataUrl(problem) {
  const canvas = document.createElement('canvas');
  canvas.width = 760;
  canvas.height = 420;
  const ctx = canvas.getContext('2d');

  // Fondo tipo hoja de examen técnico
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Cuadrícula sutil
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Encabezado
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 16px Inter, sans-serif';
  ctx.fillText(`PROBLEMA DE MECÁNICA — ${problem.badge.toUpperCase()}`, 28, 36);

  // Enunciado envuelto
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '14px Inter, sans-serif';
  wrapText(ctx, problem.statement, 28, 64, 704, 21);

  // Dibujo esquemático en la mitad inferior
  const p = problem.params || {};
  ctx.save();
  ctx.translate(0, 145);

  if (problem.sceneType === 'incline_pulley') {
    // Rampa
    ctx.strokeStyle = '#94a3b8';
    ctx.fillStyle = 'rgba(51, 65, 85, 0.6)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(120, 220);
    ctx.lineTo(420, 220);
    ctx.lineTo(420, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Arco del ángulo
    ctx.strokeStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(120, 220, 48, -Math.atan2(150, 300), 0);
    ctx.stroke();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(`θ = ${p.angle}°`, 175, 210);

    // Polea
    ctx.strokeStyle = '#fbbf24';
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(435, 62, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Bloque m1 en rampa
    ctx.save();
    ctx.translate(270, 145);
    ctx.rotate(-Math.atan2(150, 300));
    ctx.fillStyle = '#0284c7';
    ctx.strokeStyle = '#7dd3fc';
    ctx.fillRect(-35, -44, 70, 44);
    ctx.strokeRect(-35, -44, 70, 44);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(`m₁=${p.m1}kg`, -30, -18);
    ctx.restore();

    // Cuerda y masa m2
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(295, 115);
    ctx.lineTo(427, 48);
    ctx.moveTo(453, 62);
    ctx.lineTo(453, 150);
    ctx.stroke();

    ctx.fillStyle = '#e11d48';
    ctx.strokeStyle = '#fda4af';
    ctx.fillRect(423, 150, 60, 46);
    ctx.strokeRect(423, 150, 60, 46);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`m₂=${p.m2}kg`, 427, 178);

    ctx.fillStyle = '#fb923c';
    ctx.fillText(`μ_k = ${p.muK}`, 520, 120);
  } else if (problem.sceneType === 'atwood') {
    ctx.strokeStyle = '#fbbf24';
    ctx.fillStyle = '#1e293b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(380, 65, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(348, 65);
    ctx.lineTo(348, 165);
    ctx.moveTo(412, 65);
    ctx.lineTo(412, 195);
    ctx.stroke();

    ctx.fillStyle = '#0284c7';
    ctx.fillRect(316, 165, 64, 48);
    ctx.fillStyle = '#e11d48';
    ctx.fillRect(380, 195, 64, 48);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(`m₁=${p.m1}kg`, 320, 194);
    ctx.fillText(`m₂=${p.m2}kg`, 384, 224);
  } else {
    // Esquema general limpio
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, 60, 520, 170);
    ctx.fillStyle = '#7dd3fc';
    ctx.font = 'bold 16px JetBrains Mono, monospace';
    ctx.fillText(`Esquema: ${problem.title}`, 150, 110);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '14px JetBrains Mono, monospace';
    ctx.fillText(`Parámetros detectables: ${JSON.stringify(p)}`, 150, 150);
  }

  ctx.restore();
  return canvas.toDataURL('image/png');
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currY = y;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, currY);
      line = words[n] + ' ';
      currY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currY);
}


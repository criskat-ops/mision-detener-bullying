/**
 * ConfettiEngine - Motor de partículas para celebraciones
 * Estilo Jurídico Académico: Oro, Bronce y Tricolor Boliviano
 * Renderizado de alto rendimiento en Canvas 2D
 */
function launchConfetti(canvasId = 'confetti') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#C5A059', '#D4AF37', '#DFC488', '#D52B1E', '#FCD116', '#007934', '#1B5E20', '#8B1A1A', '#FAF6EE'];
  let particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.3 - canvas.height * 0.1,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2.5,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 8,
      opacity: 1
    });
  }

  let startTime = Date.now();

  function renderFrame() {
    let elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      if (elapsed > 2500) {
        p.opacity -= 0.02;
      }
      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (active && elapsed < 4000) {
      requestAnimationFrame(renderFrame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(renderFrame);
}

if (typeof window !== 'undefined') {
  window.launchConfetti = launchConfetti;
}

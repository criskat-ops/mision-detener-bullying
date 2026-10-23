/**
 * Motor del Juego de Trivia Constitucional
 * Feria Universitaria de Derecho • Universidad Privada Domingo Savio (UPDS)
 * Compatible 100% con protocolo file:// (sin módulos, sin dependencias externas)
 */

(function() {
  let round = [];
  let index = 0;
  let points = 0;
  let answered = false;
  let questionsPerGame = 8;
  let timerEnabled = false;
  let timeLeft = 15;
  let timerInterval = null;

  const $ = id => document.getElementById(id);

  // --- Selección y Mezcla de Preguntas ---
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getRoundQuestions() {
    const bank = window.questionsBank || [];
    const categories = window.questionCategories || [
      '🏛️ BASES Y PRINCIPIOS',
      '⚖️ ACCIONES DE DEFENSA',
      '📜 DERECHOS E HISTORIA',
      '🏛️ ÓRGANOS Y ESTRUCTURA'
    ];

    if (questionsPerGame === 4) {
      // 1 pregunta por categoría
      return categories.flatMap(cat => {
        const inCat = bank.filter(q => q.cat === cat);
        return shuffle(inCat).slice(0, 1);
      });
    } else if (questionsPerGame === 8) {
      // 2 preguntas por categoría
      return categories.flatMap(cat => {
        const inCat = bank.filter(q => q.cat === cat);
        return shuffle(inCat).slice(0, 2);
      });
    } else {
      // Modo completo (25 preguntas)
      return shuffle(bank);
    }
  }

  // --- Control de Pantallas ---
  function show(id) {
    ['home', 'game', 'end'].forEach(x => {
      const el = $(x);
      if (el) el.classList.toggle('hidden', x !== id);
    });
    const floatTab = $('floatingmodetab');
    if (floatTab) {
      floatTab.classList.toggle('hidden', id !== 'home');
    }
  }

  // --- Temporizador ---
  function startTimer() {
    stopTimer();
    const badge = $('timerbadge');
    if (!timerEnabled) {
      if (badge) badge.classList.add('hidden');
      return;
    }
    timeLeft = 15;
    if (badge) {
      badge.classList.remove('hidden');
      badge.textContent = `⏱️ ${timeLeft}s`;
    }
    timerInterval = setInterval(() => {
      timeLeft--;
      if (badge) badge.textContent = `⏱️ ${timeLeft}s`;
      if (timeLeft <= 0) {
        stopTimer();
        timeOutAnswer();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // --- Manejo de Respuesta por Tiempo Agotado (Definición Única y Corregida) ---
  function timeOutAnswer() {
    if (answered) return;
    answered = true;
    const q = round[index];
    const maxPoints = questionsPerGame * 100;
    playWrongSound();

    const choicesBox = $('choices');
    if (choicesBox) {
      [...choicesBox.children].forEach((b, j) => {
        b.disabled = true;
        b.classList.add(j === q.ok ? 'correct' : 'dim');
      });
    }

    const f = $('feedback');
    if (f) {
      f.replaceChildren();
      const strong = document.createElement('strong');
      strong.textContent = '⏱️ ¡Tiempo agotado! (0 puntos)';
      f.appendChild(strong);

      if (q.baseLegal) {
        const legalDiv = document.createElement('div');
        legalDiv.className = 'legal-base';
        legalDiv.innerHTML = `<strong>⚖️ Fundamentación Legal:</strong> ${q.baseLegal}`;
        f.appendChild(legalDiv);
      }

      if (q.pista) {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-pedagogica';
        hintDiv.textContent = `💡 Pista para el stand: ${q.pista}`;
        f.appendChild(hintDiv);
      }

      f.classList.remove('hidden');
    }

    const progress = $('progress');
    if (progress) {
      progress.style.width = (((index + 1) / questionsPerGame) * 100) + '%';
    }

    const nextBtn = $('next');
    if (nextBtn) {
      nextBtn.textContent = index === (questionsPerGame - 1) ? 'VER RESULTADO 🏆' : 'SIGUIENTE ➜';
      nextBtn.classList.remove('hidden');
    }
  }

  // --- Flujo de Pregunta y Respuesta ---
  function begin() {
    playClickSound();
    initAudio();

    const toggle = $('timertoggle');
    timerEnabled = toggle ? toggle.checked : false;

    round = getRoundQuestions();
    index = 0;
    points = 0;

    const maxPoints = questionsPerGame * 100;
    const scoreTop = $('scoretop');
    if (scoreTop) scoreTop.textContent = `⭐ 0 / ${maxPoints}`;

    show('game');
    render();
  }

  function render() {
    answered = false;
    const q = round[index];

    const stage = $('stage');
    if (stage) stage.textContent = q.cat;

    const count = $('count');
    if (count) count.textContent = `Pregunta ${index + 1} / ${questionsPerGame}`;

    const progress = $('progress');
    if (progress) progress.style.width = ((index / questionsPerGame) * 100) + '%';

    const questionEl = $('question');
    if (questionEl) questionEl.textContent = q.q;

    const feedback = $('feedback');
    if (feedback) feedback.classList.add('hidden');

    const nextBtn = $('next');
    if (nextBtn) nextBtn.classList.add('hidden');

    const box = $('choices');
    if (box) {
      box.replaceChildren();
      const labels = ['A', 'B', 'C', 'D'];
      q.a.forEach((optionText, i) => {
        const b = document.createElement('button');
        b.className = 'choice opt-btn';
        const label = document.createElement('span');
        label.className = 'opt-badge';
        label.textContent = labels[i] || `${i + 1}`;
        b.append(label, document.createTextNode(optionText));
        b.onclick = () => answer(i);
        box.appendChild(b);
      });
    }

    startTimer();
  }

  function answer(i) {
    if (answered) return;
    answered = true;
    stopTimer();

    const q = round[index];
    const right = (i === q.ok);
    const maxPoints = questionsPerGame * 100;

    if (right) {
      points += 100;
      playCorrectSound();
    } else {
      playWrongSound();
    }

    const scoreTop = $('scoretop');
    if (scoreTop) scoreTop.textContent = `⭐ ${points} / ${maxPoints}`;

    const choicesBox = $('choices');
    if (choicesBox) {
      [...choicesBox.children].forEach((b, j) => {
        b.disabled = true;
        b.classList.add(j === q.ok ? 'correct' : (j === i ? 'wrong' : 'dim'));
      });
    }

    const f = $('feedback');
    if (f) {
      f.replaceChildren();
      const strong = document.createElement('strong');
      strong.textContent = right ? '✅ ¡Correcto! (+100 puntos)' : '❌ Respuesta Incorrecta (0 puntos)';
      f.appendChild(strong);

      if (q.baseLegal) {
        const legalDiv = document.createElement('div');
        legalDiv.className = 'legal-base';
        legalDiv.innerHTML = `<strong>⚖️ Base Legal:</strong> ${q.baseLegal}`;
        f.appendChild(legalDiv);
      }

      if (q.pista) {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-pedagogica';
        hintDiv.textContent = `💡 Pista pedagógica: ${q.pista}`;
        f.appendChild(hintDiv);
      }

      f.classList.remove('hidden');
    }

    const progress = $('progress');
    if (progress) {
      progress.style.width = (((index + 1) / questionsPerGame) * 100) + '%';
    }

    const nextBtn = $('next');
    if (nextBtn) {
      nextBtn.textContent = index === (questionsPerGame - 1) ? 'VER RESULTADO 🏆' : 'SIGUIENTE ➜';
      nextBtn.classList.remove('hidden');
    }
  }

  function advance() {
    if (!answered) return;
    stopTimer();

    if (++index < questionsPerGame) {
      playClickSound();
      render();
      return;
    }

    playVictorySound();
    show('end');

    const maxPoints = questionsPerGame * 100;
    const scoreEl = $('score');
    if (scoreEl) scoreEl.textContent = `${points} / ${maxPoints}`;

    const pct = (points / maxPoints) * 100;
    const rankEl = $('rank');
    if (rankEl) {
      rankEl.textContent = pct >= 85 
        ? '🏆 JURISTA CONSTITUCIONAL' 
        : pct >= 50 
          ? '⚖️ DEFENSOR DE DERECHOS' 
          : '🌱 APRENDIZ DEL DERECHO';
    }

    const closingEl = $('closing');
    if (closingEl) {
      closingEl.textContent = pct >= 85
        ? '¡Excelente dominio de la Constitución! Conoces a profundidad las bases del Estado, órganos y garantías fundamentales.'
        : pct >= 50
          ? '¡Buen desempeño! Tienes bases sólidas sobre la Constitución boliviana y sus mecanismos tutelares.'
          : 'La Constitución es la norma suprema de todas y todos los bolivianos. ¡Repasa los artículos y vuelve a intentarlo!';
    }

    if (pct >= 50 && typeof launchConfetti === 'function') {
      launchConfetti();
    }
  }

  // --- Configuración de Modos de Juego ---
  const btnMode8 = $('btnmode8');
  const btnMode4 = $('btnmode4');
  const btnMode25 = $('btnmode25');

  function setMode(count, activeBtn) {
    playClickSound();
    questionsPerGame = count;
    [btnMode4, btnMode8, btnMode25].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    if (activeBtn) activeBtn.classList.add('active');
  }

  if (btnMode8) {
    btnMode8.onclick = () => setMode(8, btnMode8);
  }
  if (btnMode4) {
    btnMode4.onclick = () => setMode(4, btnMode4);
  }
  if (btnMode25) {
    btnMode25.onclick = () => setMode(25, btnMode25);
  }

  // --- Submenú Navbar Dropdown ---
  const menuBtn = $('menubtn');
  const dropdownMenu = $('dropdownmenu');

  if (menuBtn && dropdownMenu) {
    menuBtn.onclick = (e) => {
      e.stopPropagation();
      playClickSound();
      dropdownMenu.classList.toggle('hidden');
    };

    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && e.target !== menuBtn) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  // --- Botón de Sonido ---
  const soundBtn = $('soundbtn');
  if (soundBtn) {
    soundBtn.onclick = () => {
      if (dropdownMenu) dropdownMenu.classList.add('hidden');
      const enabled = AudioManager.toggleSound();
      soundBtn.textContent = enabled ? '🔊 Sonido (Activado)' : '🔇 Silencio (Desactivado)';
      soundBtn.style.opacity = enabled ? '1' : '0.6';
    };
  }

  // --- Modal Quiénes Somos / Sobre la App ---
  const aboutBtn = $('aboutbtn');
  const aboutModal = $('aboutmodal');
  const closeAbout = $('closeabout');

  if (aboutBtn && aboutModal && closeAbout) {
    aboutBtn.onclick = () => {
      if (dropdownMenu) dropdownMenu.classList.add('hidden');
      playClickSound();
      aboutModal.classList.remove('hidden');
    };
    closeAbout.onclick = () => {
      playClickSound();
      aboutModal.classList.add('hidden');
    };
    aboutModal.onclick = (e) => {
      if (e.target === aboutModal) {
        playClickSound();
        aboutModal.classList.add('hidden');
      }
    };
  }

  // --- Eventos de Botones Principales ---
  const startBtn = $('start');
  if (startBtn) startBtn.onclick = begin;

  const againBtn = $('again');
  if (againBtn) againBtn.onclick = begin;

  const nextBtn = $('next');
  if (nextBtn) nextBtn.onclick = advance;

  // --- Atajos de Teclado ---
  document.addEventListener('keydown', e => {
    const gameSec = $('game');
    if (!gameSec || gameSec.classList.contains('hidden')) return;

    const key = e.key.toLowerCase();
    const map = {
      'a': 0, '1': 0,
      'b': 1, '2': 1,
      'c': 2, '3': 2,
      'd': 3, '4': 3
    };

    if (!answered && key in map) {
      answer(map[key]);
    } else if (answered && e.key === 'Enter') {
      advance();
    }
  });

})();

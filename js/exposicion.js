/**
 * Lógica del Visor de Exposición y Diapositivas
 * Compatible 100% con protocolo file:// (sin módulos, sin dependencias externas)
 */

(function() {
  const slides = [
    {
      title: 'Bullying y ciberbullying',
      lead: '¿Cómo reconocemos el acoso y qué podemos hacer para detenerlo?',
      items: [
        'Proyecto de la materia Derechos Humanos · Carrera de Derecho de la Universidad Privada Domingo Savio (UPDS).',
        'Docente: Lic. Carla Benítez Alarcón · Grupo 3 (Sucre, Bolivia).',
        'Primero conoceremos el concepto de acoso, los derechos fundamentales (CPE y Ley 548) y las formas de actuar.'
      ],
      speaker: 'Presentador: invita a los estudiantes a pensar en cómo puede ayudar un compañero que observa una situación de acoso.'
    },
    {
      title: '¿Qué es el bullying escolar?',
      lead: 'Es una forma de acoso entre estudiantes que implica hostigamiento o maltrato con desequilibrio de poder.',
      items: [
        'Puede manifestarse mediante insultos, amenazas, agresiones o exclusión.',
        'Suele repetirse o mantenerse en el tiempo.',
        'Una discusión aislada no basta para afirmar que existe bullying; sin embargo, merece atención si alguien resulta afectado.'
      ],
      speaker: 'Presentador: explica que hay que escuchar a la persona afectada y conocer el contexto.'
    },
    {
      title: '¿Qué es el ciberbullying?',
      lead: 'Es hostigamiento entre pares que ocurre mediante medios digitales.',
      items: [
        'Puede aparecer en chats, redes sociales o juegos en línea.',
        'Ejemplos: mensajes ofensivos, rumores, cuentas falsas e imágenes compartidas para humillar.',
        'Una publicación puede circular fuera de la escuela y llegar a muchas personas rápidamente.'
      ],
      speaker: 'Presentador: recalca que reenviar o celebrar una publicación ofensiva amplifica el daño.'
    },
    {
      title: 'Broma, conflicto o acoso',
      lead: 'El contexto y el efecto sobre la persona importan.',
      items: [
        'Broma: las personas se sienten cómodas y se detiene cuando alguien pide parar.',
        'Conflicto: un desacuerdo aislado que puede resolverse mediante el diálogo.',
        'Posible acoso: agresión persistente, daño y dificultad para defenderse o detenerla.'
      ],
      speaker: 'Presentador: pregunta qué harían si alguien les dice claramente que un apodo le duele.'
    },
    {
      title: '¿Qué derechos pueden verse afectados?',
      lead: 'El bullying y el ciberbullying pueden vulnerar varios derechos al mismo tiempo.',
      items: [
        'Integridad física y psicológica.',
        'Dignidad, igualdad y no discriminación.',
        'Privacidad, intimidad y propia imagen.'
      ],
      speaker: 'Presentador: explica que no hacen falta golpes para que una humillación produzca un daño real.'
    },
    {
      title: 'Constitución Política del Estado',
      lead: 'La Constitución boliviana reconoce derechos fundamentales relevantes frente al acoso.',
      items: [
        'Artículo 15: derecho a la vida e integridad física, psicológica y sexual.',
        'Artículo 21, numeral 2: privacidad, intimidad, honra, propia imagen y dignidad.',
        'Artículo 22: la dignidad y la libertad de la persona son inviolables.'
      ],
      speaker: 'Presentador: relaciona cada derecho con un ejemplo del entorno escolar o digital.',
      source: 'Fuente: Constitución Política del Estado de Bolivia, arts. 15, 21.2 y 22.'
    },
    {
      title: 'Ley N.º 548',
      lead: 'El Código Niña, Niño y Adolescente protege a estudiantes frente a la violencia.',
      items: [
        'Artículo 142: respeto y dignidad.',
        'Artículos 143 y 144: privacidad, intimidad, propia imagen y confidencialidad.',
        'Artículos 150 y 151: protección contra la violencia en el sistema educativo y cibernética.'
      ],
      speaker: 'Presentador: explica que la protección requiere la participación activa de la escuela y los adultos.',
      source: 'Fuente: Ley N.º 548, Código Niña, Niño y Adolescente, arts. 142–144 y 150–151.'
    },
    {
      title: '¿Qué puede hacer un testigo?',
      lead: 'Observar una situación también ofrece una oportunidad de ayudar.',
      items: [
        'No participar en las burlas ni compartir contenido ofensivo.',
        'Acompañar a la persona afectada sin exponerla delante de todos.',
        'Buscar apoyo de un docente, familiar u otra persona adulta de confianza.',
        'Actuar con seguridad; no hace falta enfrentarse solo a un grupo.'
      ],
      speaker: 'Presentador: pide al público una acción concreta que un testigo podría realizar.'
    },
    {
      title: 'Si ocurre en Internet',
      lead: 'La ayuda debe evitar que el contenido ofensivo siga circulando.',
      items: [
        'No reenviar mensajes, capturas o imágenes que humillen a alguien.',
        'Conservar evidencia de manera privada cuando sea necesario.',
        'Bloquear o reportar cuentas y publicaciones con apoyo de un adulto.',
        'Contarlo a una persona de confianza; no responder con nuevos insultos.'
      ],
      speaker: 'Presentador: recuerda que publicar evidencia públicamente también puede revictimizar.'
    },
    {
      title: 'Ahora te toca decidir',
      lead: 'Pongamos en práctica lo aprendido en la «Trivia Constitucional Boliviana».',
      items: [
        'Pon a prueba tus conocimientos sobre la Constitución.',
        'Reconoce las acciones tutelares y garantías jurisdiccionales.',
        'Comprende las bases y organización del Estado Plurinacional.'
      ],
      speaker: 'Presentador: pulsa «🎮 Ir al juego» para iniciar la trivia interactiva.'
    }
  ];

  let current = 0;
  const $ = id => document.getElementById(id);

  function render() {
    const s = slides[current];
    const root = $('content');
    if (!root) return;

    root.replaceChildren();

    const counter = $('counter');
    if (counter) counter.textContent = 'EXPOSICIÓN · DERECHOS HUMANOS & CONSTITUCIÓN';

    const h = document.createElement('h1');
    h.textContent = s.title;
    root.appendChild(h);

    const p = document.createElement('p');
    p.className = 'lead';
    p.textContent = s.lead;
    root.appendChild(p);

    const ul = document.createElement('ul');
    s.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    root.appendChild(ul);

    if (s.source) {
      const cite = document.createElement('div');
      cite.className = 'source';
      cite.textContent = s.source;
      root.appendChild(cite);
    }

    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = s.speaker;
    root.appendChild(note);

    const number = $('number');
    if (number) number.textContent = `${current + 1} / ${slides.length}`;

    const bar = $('bar');
    if (bar) bar.style.width = `${((current + 1) / slides.length) * 100}%`;

    const prevBtn = $('previous');
    if (prevBtn) prevBtn.disabled = (current === 0);

    const nextBtn = $('next');
    if (nextBtn) {
      nextBtn.textContent = (current === slides.length - 1) ? '🎮 Ir a la Trivia' : 'Siguiente →';
    }
  }

  function goToNext() {
    if (current < slides.length - 1) {
      current++;
      if (typeof playSlideSound === 'function') playSlideSound();
      render();
    } else {
      location.href = 'index.html';
    }
  }

  function goToPrevious() {
    if (current > 0) {
      current--;
      if (typeof playSlideSound === 'function') playSlideSound();
      render();
    }
  }

  // --- Botones de Navegación ---
  const prevBtn = $('previous');
  if (prevBtn) prevBtn.onclick = goToPrevious;

  const nextBtn = $('next');
  if (nextBtn) nextBtn.onclick = goToNext;

  // --- Submenú Navbar Dropdown ---
  const menuBtn = $('menubtn');
  const dropdownMenu = $('dropdownmenu');

  if (menuBtn && dropdownMenu) {
    menuBtn.onclick = (e) => {
      e.stopPropagation();
      if (typeof playClickSound === 'function') playClickSound();
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
      if (window.AudioManager) {
        const enabled = AudioManager.toggleSound();
        soundBtn.textContent = enabled ? '🔊 Sonido' : '🔇 Silencio';
        soundBtn.style.opacity = enabled ? '1' : '0.55';
      }
    };
  }

  // --- Modal Quiénes Somos / Sobre la Exposición ---
  const aboutBtn = $('aboutbtn');
  const aboutModal = $('aboutmodal');
  const closeAbout = $('closeabout');

  if (aboutBtn && aboutModal && closeAbout) {
    aboutBtn.onclick = () => {
      if (dropdownMenu) dropdownMenu.classList.add('hidden');
      if (typeof playClickSound === 'function') playClickSound();
      aboutModal.classList.remove('hidden');
    };
    closeAbout.onclick = () => {
      if (typeof playClickSound === 'function') playClickSound();
      aboutModal.classList.add('hidden');
    };
    aboutModal.onclick = (e) => {
      if (e.target === aboutModal) {
        if (typeof playClickSound === 'function') playClickSound();
        aboutModal.classList.add('hidden');
      }
    };
  }

  // --- Teclado para Navegación ---
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    }
  });

  // Render inicial
  render();
})();

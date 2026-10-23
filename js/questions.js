/**
 * Banco Oficial de Preguntas - Trivia de Derecho Constitucional Boliviano
 * Extraído íntegramente de 'Trivia_25_Preguntas_Derecho_Constitucional_Boliviano.docx'
 * Feria Universitaria de Derecho • Universidad Privada Domingo Savio (UPDS)
 * Compatible 100% con protocolo file:// (sin CORS, sin fetch)
 */

const questionsBank = [
  {
    "num": 1,
    "q": "¿Cómo define el Artículo 1 de la Constitución Política del Estado el modelo del Estado boliviano?",
    "a": [
      "Estado federal, laico, presidencialista y representativo.",
      "Estado Unitario Social de Derecho Plurinacional Comunitario, libre, independiente, soberano, democrático, intercultural, descentralizado y con autonomías.",
      "República unitaria parlamentaria con división estricta de tres poderes clásicos.",
      "Confederación de naciones autónomas y departamentos soberanos independientes."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 1 de la CPE: Consagra el modelo del Estado Plurinacional Comunitario y su organización descentralizada con autonomías.",
    "pista": "Incluye los conceptos de 'Plurinacional', 'Comunitario' y 'Autonomías'.",
    "why": "Art. 1 de la CPE: Consagra el modelo del Estado Plurinacional Comunitario y su organización descentralizada con autonomías. | Pista: Incluye los conceptos de 'Plurinacional', 'Comunitario' y 'Autonomías'.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 2,
    "q": "¿Cuáles son las tres formas de ejercicio de la democracia que reconoce la Constitución boliviana (Art. 11)?",
    "a": [
      "Democracia liberal, autoritaria y monárquica.",
      "Democracia directa y participativa, representativa y comunitaria.",
      "Democracia parlamentaria, judicial y militar.",
      "Democracia consultiva, censitaria y corporativa."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 11.II de la CPE: Establece la democracia directa y participativa, la representativa y la comunitaria.",
    "pista": "Una de ellas se practica según normas y procedimientos propios de las naciones indígenas.",
    "why": "Art. 11.II de la CPE: Establece la democracia directa y participativa, la representativa y la comunitaria. | Pista: Una de ellas se practica según normas y procedimientos propios de las naciones indígenas.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 3,
    "q": "¿Qué órgano constitucional tiene como misión específica velar por la supremacía de la Constitución y ejercer el control concentrado de constitucionalidad en Bolivia?",
    "a": [
      "Tribunal Supremo de Justicia (TSJ).",
      "Tribunal Constitucional Plurinacional (TCP).",
      "Ministerio de Justicia y Transparencia Institucional.",
      "Procuraduría General del Estado."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Arts. 196 a 204 de la CPE: El TCP es el órgano encargado del control de constitucionalidad en el país.",
    "pista": "Tiene su sede en la ciudad de Sucre y sus fallos son de cumplimiento vinculante y obligatorio.",
    "why": "Arts. 196 a 204 de la CPE: El TCP es el órgano encargado del control de constitucionalidad en el país. | Pista: Tiene su sede en la ciudad de Sucre y sus fallos son de cumplimiento vinculante y obligatorio.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 4,
    "q": "¿Qué acción de defensa tutela de manera directa el derecho a la vida y a la libertad personal frente a aprehensiones o persecuciones indebidas?",
    "a": [
      "Acción de Amparo Constitucional.",
      "Acción de Protección de Privacidad.",
      "Acción de Libertad.",
      "Acción Popular."
    ],
    "correct_letter": "C",
    "ok": 2,
    "baseLegal": "Arts. 125 y 126 de la CPE: La Acción de Libertad (antiguo Hábeas Corpus) protege de forma sumarísima la vida y la libertad.",
    "pista": "Históricamente era conocida en el derecho comparado como Hábeas Corpus.",
    "why": "Arts. 125 y 126 de la CPE: La Acción de Libertad (antiguo Hábeas Corpus) protege de forma sumarísima la vida y la libertad. | Pista: Históricamente era conocida en el derecho comparado como Hábeas Corpus.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 5,
    "q": "¿En qué año y bajo qué gobierno se promulgó la Constitución que dio inicio formal al «Constitucionalismo Social» en Bolivia?",
    "a": [
      "1826, bajo la presidencia del Mcal. Antonio José de Sucre.",
      "1938, durante el gobierno del Tcnl. Germán Busch.",
      "1967, durante el gobierno del Gral. René Barrientos Ortuño.",
      "2009, durante el gobierno de Evo Morales Ayma."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Constitución de 1938: Tras la Convención Nacional de 1938 se reconoció la función social de la propiedad y los derechos laborales.",
    "pista": "Ocurrió poco después de la Guerra del Chaco, en la etapa del nacionalismo militar.",
    "why": "Constitución de 1938: Tras la Convención Nacional de 1938 se reconoció la función social de la propiedad y los derechos laborales. | Pista: Ocurrió poco después de la Guerra del Chaco, en la etapa del nacionalismo militar.",
    "cat": "📜 DERECHOS E HISTORIA"
  },
  {
    "num": 6,
    "q": "¿Cuál es la acción tutelar adecuada para proteger derechos fundamentales cuando no existe otro medio o recurso legal expedito (principio de subsidiariedad)?",
    "a": [
      "Acción de Cumplimiento.",
      "Acción de Libertad.",
      "Acción de Amparo Constitucional.",
      "Acción Popular."
    ],
    "correct_letter": "C",
    "ok": 2,
    "baseLegal": "Arts. 128 y 129 de la CPE: El Amparo procede contra actos u omisiones ilegales de servidores o particulares, siempre que no haya otro remedio judicial ordinario.",
    "pista": "Es la garantía constitucional más amplia y de carácter supletorio o residual.",
    "why": "Arts. 128 y 129 de la CPE: El Amparo procede contra actos u omisiones ilegales de servidores o particulares, siempre que no haya otro remedio judicial ordinario. | Pista: Es la garantía constitucional más amplia y de carácter supletorio o residual.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 7,
    "q": "¿Qué integra el «Bloque de Constitucionalidad» según el Artículo 410 de la CPE boliviana?",
    "a": [
      "Únicamente las leyes nacionales aprobadas por la Asamblea Legislativa Plurinacional.",
      "El texto de la Constitución, los Tratados Internacionales en materia de Derechos Humanos y las normas de Derecho Comunitario ratificados.",
      "Los decretos supremos presidenciales y las resoluciones ministeriales.",
      "Las sentencias emitidas por juzgados de primera instancia."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 410.II de la CPE: La Constitución y los tratados internacionales de DDHH ratificados por el Estado integran el bloque de constitucionalidad.",
    "pista": "Sitúa a los tratados de Derechos Humanos más favorables en la máxima jerarquía normativa.",
    "why": "Art. 410.II de la CPE: La Constitución y los tratados internacionales de DDHH ratificados por el Estado integran el bloque de constitucionalidad. | Pista: Sitúa a los tratados de Derechos Humanos más favorables en la máxima jerarquía normativa.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 8,
    "q": "¿Qué acción constitucional procede frente al incumplimiento de una disposición constitucional o de una ley por parte de servidores públicos?",
    "a": [
      "Acción de Cumplimiento.",
      "Acción de Libertad.",
      "Acción de Protección de Privacidad.",
      "Recurso directo de nulidad."
    ],
    "correct_letter": "A",
    "ok": 0,
    "baseLegal": "Art. 134 de la CPE: La Acción de Cumplimiento exige que las autoridades acaten mandatos claros y expresos de la ley o la Constitución.",
    "pista": "Su propio nombre indica que persigue obligar a la autoridad a acatar un deber expreso omitido.",
    "why": "Art. 134 de la CPE: La Acción de Cumplimiento exige que las autoridades acaten mandatos claros y expresos de la ley o la Constitución. | Pista: Su propio nombre indica que persigue obligar a la autoridad a acatar un deber expreso omitido.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 9,
    "q": "¿Cuál de los siguientes derechos corresponde a los denominados derechos de Segunda Generación (Económicos, Sociales y Culturales)?",
    "a": [
      "Derecho al voto y a la participación política.",
      "Derecho a un medio ambiente sano y ecológicamente equilibrado.",
      "Derecho al trabajo digno, a la salud y a la educación universal y gratuita.",
      "Derecho a la libertad de imprenta y pensamiento."
    ],
    "correct_letter": "C",
    "ok": 2,
    "baseLegal": "Doctrina Constitucional y Arts. 35, 46 y 77 de la CPE: Requieren políticas activas de prestación del Estado para asegurar la igualdad material.",
    "pista": "Son derechos asistenciales y de bienestar nacidos a inicios del siglo XX.",
    "why": "Doctrina Constitucional y Arts. 35, 46 y 77 de la CPE: Requieren políticas activas de prestación del Estado para asegurar la igualdad material. | Pista: Son derechos asistenciales y de bienestar nacidos a inicios del siglo XX.",
    "cat": "📜 DERECHOS E HISTORIA"
  },
  {
    "num": 10,
    "q": "¿Qué protege de manera primordial la «Acción Popular» en el ordenamiento boliviano (Art. 135 CPE)?",
    "a": [
      "Derechos e intereses colectivos o difusos (como el medio ambiente y el patrimonio cultural).",
      "El patrimonio financiero exclusivo de empresas bancarias privadas.",
      "La libertad física individual frente a una detención policial injusta.",
      "El secreto del voto en las elecciones gremiales."
    ],
    "correct_letter": "A",
    "ok": 0,
    "baseLegal": "Arts. 135 y 136 de la CPE: Procede contra actos u omisiones que amenacen o violen derechos colectivos como el medio ambiente y la salubridad pública.",
    "pista": "No busca proteger a un solo individuo, sino a una colectividad o a la comunidad.",
    "why": "Arts. 135 y 136 de la CPE: Procede contra actos u omisiones que amenacen o violen derechos colectivos como el medio ambiente y la salubridad pública. | Pista: No busca proteger a un solo individuo, sino a una colectividad o a la comunidad.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 11,
    "q": "¿Qué principio constitucional establece que la Constitución se encuentra en la cima del ordenamiento y toda norma inferior debe subordinarse a ella?",
    "a": [
      "Principio de Favorabilidad.",
      "Principio de Supremacía Constitucional y Jerarquía Normativa.",
      "Principio de Subsidiariedad procesal.",
      "Principio de Iura Novit Curia."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 410.II de la CPE: La Constitución es la norma suprema del ordenamiento jurídico boliviano y goza de primacía frente a cualquier otra disposición.",
    "pista": "Se grafica tradicionalmente en la 'Pirámide de Kelsen'.",
    "why": "Art. 410.II de la CPE: La Constitución es la norma suprema del ordenamiento jurídico boliviano y goza de primacía frente a cualquier otra disposición. | Pista: Se grafica tradicionalmente en la 'Pirámide de Kelsen'.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 12,
    "q": "¿Cómo se denominan los cuatro órganos del poder público en el Estado Plurinacional de Bolivia según la Constitución de 2009?",
    "a": [
      "Poder Ejecutivo, Poder Legislativo, Poder Judicial y Poder Militar.",
      "Órgano Legislativo, Órgano Ejecutivo, Órgano Judicial y Tribunal Constitucional, y Órgano Electoral Plurinacional.",
      "Órgano Ejecutivo, Órgano Legislativo, Órgano Judicial y Tribunal Constitucional, y Fiscalía General.",
      "Poder Central, Poder Departamental, Poder Municipal y Poder Indígena."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 12 de la CPE: El Estado organiza y estructura su poder público a través de los órganos Legislativo, Ejecutivo, Judicial y Electoral Plurinacional.",
    "pista": "Son cuatro órganos (no 'poderes' en la nomenclatura de 2009) y el cuarto administra las elecciones.",
    "why": "Art. 12 de la CPE: El Estado organiza y estructura su poder público a través de los órganos Legislativo, Ejecutivo, Judicial y Electoral Plurinacional. | Pista: Son cuatro órganos (no 'poderes' en la nomenclatura de 2009) y el cuarto administra las elecciones.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 13,
    "q": "¿Qué persona o entidad tiene legitimación activa para interponer una Acción de Libertad en favor de alguien privado injustamente de su libertad?",
    "a": [
      "Únicamente un abogado con registro oficial y poder notariado.",
      "Cualquier persona por sí o a nombre de otra, sin necesidad de poder notariado ni patrocinio de abogado.",
      "Exclusivamente el Fiscal Departamental de turno.",
      "Sólo los familiares directos de primer grado de consanguinidad."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 125 de la CPE: La Acción de Libertad carece de formalismos rituales para tutelar la vida o la libertad de inmediato.",
    "pista": "Se caracteriza por su máxima informalidad y celeridad procesal.",
    "why": "Art. 125 de la CPE: La Acción de Libertad carece de formalismos rituales para tutelar la vida o la libertad de inmediato. | Pista: Se caracteriza por su máxima informalidad y celeridad procesal.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 14,
    "q": "¿Qué acción constitucional garantiza que toda persona conozca, actualice o rectifique datos personales registrados en archivos públicos o privados?",
    "a": [
      "Acción Popular.",
      "Acción de Libertad de Información.",
      "Acción de Protección de Privacidad.",
      "Acción de Cumplimiento de Archivos."
    ],
    "correct_letter": "C",
    "ok": 2,
    "baseLegal": "Arts. 130 y 131 de la CPE: Es el mecanismo constitucional boliviano conocido técnicamente como Habeas Data.",
    "pista": "Equivale al Habeas Data y protege el honor, la intimidad y el manejo de datos personales.",
    "why": "Arts. 130 y 131 de la CPE: Es el mecanismo constitucional boliviano conocido técnicamente como Habeas Data. | Pista: Equivale al Habeas Data y protege el honor, la intimidad y el manejo de datos personales.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 15,
    "q": "¿Cuál es la diferencia entre el «Poder Constituyente Originario» y el «Poder Constituido»?",
    "a": [
      "El Originario es ejercido por los jueces y el Constituido por la policía.",
      "El Originario funda el Estado y crea la Constitución; el Constituido son los órganos de gobierno creados y limitados por la Constitución.",
      "El Originario pertenece al presidente y el Constituido pertenece al parlamento.",
      "No existe diferencia dogmática entre ambos conceptos."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Teoría Constitucional y Art. 411 de la CPE: El poder constituyente reside en el pueblo y no se subordina a poderes previamente constituidos.",
    "pista": "Uno 'crea' las reglas del juego democrático; los otros 'gobiernan bajo' esas reglas.",
    "why": "Teoría Constitucional y Art. 411 de la CPE: El poder constituyente reside en el pueblo y no se subordina a poderes previamente constituidos. | Pista: Uno 'crea' las reglas del juego democrático; los otros 'gobiernan bajo' esas reglas.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 16,
    "q": "¿Qué niveles de autonomía reconoce la Constitución boliviana en su organización territorial (Art. 269 y siguientes)?",
    "a": [
      "Departamental, regional, municipal e indígena originaria campesina.",
      "Provincial, cantonal, parroquial y comunitaria.",
      "Federal, estadual, distrital y comunal.",
      "Centralista, delegada y desconcentrada."
    ],
    "correct_letter": "A",
    "ok": 0,
    "baseLegal": "Art. 269 y 271 de la CPE y Ley Marco de Autonomías N.° 031: Consagra 4 clases de entidades territoriales autónomas (ETAs).",
    "pista": "Son cuatro niveles autonómicos, incluyendo el municipal y el indígena originario.",
    "why": "Art. 269 y 271 de la CPE y Ley Marco de Autonomías N.° 031: Consagra 4 clases de entidades territoriales autónomas (ETAs). | Pista: Son cuatro niveles autonómicos, incluyendo el municipal y el indígena originario.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 17,
    "q": "¿Qué significa el principio de «Pluralismo Jurídico» consagrado en la Constitución boliviana?",
    "a": [
      "Que cada departamento puede redactar su propio Código Penal autónomo.",
      "La coexistencia y coordinación de la jurisdicción ordinaria con la jurisdicción indígena originaria campesina en igual jerarquía constitucional.",
      "Que los jueces pueden aplicar libremente leyes extranjeras en litigios civiles.",
      "La eliminación de los tribunales estatales a favor de jueces vecinales."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Arts. 179 y 190 a 192 de la CPE: Coexisten con igual jerarquía la jurisdicción ordinaria y la indígena originaria campesina, respetando la CPE.",
    "pista": "Reconoce la validez jurídica de la justicia indígena originaria con sus propias normas y procedimientos.",
    "why": "Arts. 179 y 190 a 192 de la CPE: Coexisten con igual jerarquía la jurisdicción ordinaria y la indígena originaria campesina, respetando la CPE. | Pista: Reconoce la validez jurídica de la justicia indígena originaria con sus propias normas y procedimientos.",
    "cat": "📜 DERECHOS E HISTORIA"
  },
  {
    "num": 18,
    "q": "¿Cuál es el plazo perentorio general para interponer la Acción de Amparo Constitucional desde que se cometió o conoció el acto vulneratorio?",
    "a": [
      "Treinta (30) días calendario.",
      "Seis (6) meses computables a partir de la comisión de la vulneración o de notificada la última resolución.",
      "Un (1) año calendario improrrogable.",
      "Dos (2) años de prescripción civil ordinaria."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 129.II de la CPE y Código Procesal Constitucional: Consagra el principio de inmediatez procesal con un plazo perentorio de 6 meses.",
    "pista": "Equivale a medio año calendario.",
    "why": "Art. 129.II de la CPE y Código Procesal Constitucional: Consagra el principio de inmediatez procesal con un plazo perentorio de 6 meses. | Pista: Equivale a medio año calendario.",
    "cat": "⚖️ ACCIONES DE DEFENSA"
  },
  {
    "num": 19,
    "q": "¿Qué tipo de reforma constitucional requiere una Asamblea Constituyente Originaria plenipotenciaria y referéndum aprobatorio (Art. 411.I CPE)?",
    "a": [
      "Cualquier cambio menor en los impuestos o tasas aduaneras.",
      "La reforma total de la Constitución o aquella que afecte a sus bases fundamentales, a los derechos fundamentales o a la primacía de la Carta Magna.",
      "La modificación del número de ministerios del Poder Ejecutivo.",
      "La aprobación del presupuesto fiscal general de la nación."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 411.I de la CPE: La reforma total o que afecte sus bases estructurales exige convocatoria a Asamblea Constituyente y referéndum popular.",
    "pista": "La reforma parcial se hace por ley y referéndum; la reforma estructural exige Asamblea Constituyente.",
    "why": "Art. 411.I de la CPE: La reforma total o que afecte sus bases estructurales exige convocatoria a Asamblea Constituyente y referéndum popular. | Pista: La reforma parcial se hace por ley y referéndum; la reforma estructural exige Asamblea Constituyente.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  },
  {
    "num": 20,
    "q": "¿A qué generación de derechos humanos pertenece el «Derecho a vivir en un medio ambiente sano, protegido y equilibrado»?",
    "a": [
      "Primera Generación (Derechos Civiles).",
      "Tercera Generación (Derechos de los Pueblos, Solidaridad y Colectivos).",
      "Cuarta Generación exclusiva de las inteligencias artificiales.",
      "No es un derecho fundamental sino una mera recomendación administrativa."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 33 de la CPE y Doctrina Constitucional: Forma parte de los derechos de solidaridad y colectivos desarrollados en la última mitad del siglo XX.",
    "pista": "Pertenecen a los derechos colectivos o difusos surgidos por la preocupación ecológica y de paz.",
    "why": "Art. 33 de la CPE y Doctrina Constitucional: Forma parte de los derechos de solidaridad y colectivos desarrollados en la última mitad del siglo XX. | Pista: Pertenecen a los derechos colectivos o difusos surgidos por la preocupación ecológica y de paz.",
    "cat": "📜 DERECHOS E HISTORIA"
  },
  {
    "num": 21,
    "q": "¿Cómo se eligen por voto popular a las máximas autoridades judiciales del Tribunal Supremo de Justicia y Tribunal Constitucional Plurinacional en Bolivia?",
    "a": [
      "Designación directa y vitalicia por decreto del Presidente del Estado.",
      "Preselección por dos tercios de la Asamblea Legislativa Plurinacional y posterior elección por sufragio universal ciudadano.",
      "Sorteo notariado entre los colegios departamentales de abogados.",
      "Elección interna exclusiva realizada por las facultades de derecho públicas."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Arts. 182 y 198 de la CPE: El sistema boliviano combina una preselección legislativa calificada con la votación ciudadana universal.",
    "pista": "Combina una etapa parlamentaria con una elección popular mediante papeleta electoral.",
    "why": "Arts. 182 y 198 de la CPE: El sistema boliviano combina una preselección legislativa calificada con la votación ciudadana universal. | Pista: Combina una etapa parlamentaria con una elección popular mediante papeleta electoral.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 22,
    "q": "¿Cuál es la función constitucional prioritaria de la «Defensoría del Pueblo» en Bolivia (Art. 218 CPE)?",
    "a": [
      "Emitir sentencias penales condenatorias de privación de libertad.",
      "Velar por la vigencia, promoción, difusión y cumplimiento de los derechos humanos individuales y colectivos.",
      "Asumir la defensa legal del Estado en tribunales y arbitrajes internacionales.",
      "Administrar los centros penitenciarios y cárceles del país."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Arts. 218 y 222 de la CPE: Institución constitucional autónoma que supervisa la actividad del Estado y defiende a la ciudadanía ante arbitrariedades.",
    "pista": "Es una magistratura moral de defensa de los Derechos Humanos ante los abusos del poder público.",
    "why": "Arts. 218 y 222 de la CPE: Institución constitucional autónoma que supervisa la actividad del Estado y defiende a la ciudadanía ante arbitrariedades. | Pista: Es una magistratura moral de defensa de los Derechos Humanos ante los abusos del poder público.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 23,
    "q": "¿Qué institución tiene la facultad privativa de ejercer la acción penal pública y defender la legalidad de los intereses de la sociedad en Bolivia?",
    "a": [
      "Ministerio Público (Fiscalía General del Estado).",
      "Contraloría General del Estado.",
      "Procuraduría General del Estado.",
      "Policía Boliviana en sus juntas vecinales."
    ],
    "correct_letter": "A",
    "ok": 0,
    "baseLegal": "Art. 225 de la CPE: El Ministerio Público defiende la legalidad y los intereses generales de la sociedad, y ejerce la acción penal pública.",
    "pista": "Está encabezado por el Fiscal General del Estado.",
    "why": "Art. 225 de la CPE: El Ministerio Público defiende la legalidad y los intereses generales de la sociedad, y ejerce la acción penal pública. | Pista: Está encabezado por el Fiscal General del Estado.",
    "cat": "🏛️ ÓRGANOS Y ESTRUCTURA"
  },
  {
    "num": 24,
    "q": "¿Qué documento constitucional histórico de 1215 en Inglaterra es considerado universalmente uno de los antecedentes remotos de la limitación del poder monárquico?",
    "a": [
      "El Código Napoleónico de 1804.",
      "La Carta Magna impuesta al Rey Juan Sin Tierra.",
      "La Declaración de Filadelfia de 1776.",
      "El Edicto de Nantes de 1598."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Historia del Constitucionalismo Universal: La Carta Magna de 1215 sentó las bases del debido proceso y frenó la arbitrariedad del monarca.",
    "pista": "Fue firmada por el Rey 'Juan Sin Tierra' tras la rebelión de los barones ingleses.",
    "why": "Historia del Constitucionalismo Universal: La Carta Magna de 1215 sentó las bases del debido proceso y frenó la arbitrariedad del monarca. | Pista: Fue firmada por el Rey 'Juan Sin Tierra' tras la rebelión de los barones ingleses.",
    "cat": "📜 DERECHOS E HISTORIA"
  },
  {
    "num": 25,
    "q": "¿Qué principio del Artículo 8 de la CPE establece como principio ético-moral de la sociedad plural la máxima andina: «Ama qhilla, ama llulla, ama suwa»?",
    "a": [
      "Vivir bien, tierra sin mal y camino noble.",
      "No seas flojo, no seas mentiroso ni seas ladrón.",
      "Libertad, igualdad y fraternidad universal.",
      "Orden, paz social y progreso material."
    ],
    "correct_letter": "B",
    "ok": 1,
    "baseLegal": "Art. 8.I de la CPE: Asume y promueve como principios ético-morales de la sociedad plural: ama qhilla, ama llulla, ama suwa (no seas flojo, no seas mentiroso ni seas ladrón).",
    "pista": "Es la tríada moral que prohíbe la pereza, la mentira y el robo.",
    "why": "Art. 8.I de la CPE: Asume y promueve como principios ético-morales de la sociedad plural: ama qhilla, ama llulla, ama suwa (no seas flojo, no seas mentiroso ni seas ladrón). | Pista: Es la tríada moral que prohíbe la pereza, la mentira y el robo.",
    "cat": "🏛️ BASES Y PRINCIPIOS"
  }
];

// Categorías del banco
const questionCategories = [
  '🏛️ BASES Y PRINCIPIOS',
  '⚖️ ACCIONES DE DEFENSA',
  '📜 DERECHOS E HISTORIA',
  '🏛️ ÓRGANOS Y ESTRUCTURA'
];

if (typeof window !== 'undefined') {
  window.questionsBank = questionsBank;
  window.questionCategories = questionCategories;
}

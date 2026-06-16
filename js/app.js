/* ============================================
   Éclat — Premium Clinic  ·  Main Application JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── DATA ─────────────────────────────────────
  const TREATMENTS = [
    // FACIALES
    { id: 1, category: 'facial', title: 'Ácido Hialurónico', badge: 'Popular', desc: 'Rellenos dérmicos para labios, pómulos, ojeras, surcos nasogenianos y marcación mandibular. Resultados inmediatos y naturales.', details: 'El ácido hialurónico es una sustancia biocompatible que se inyecta para restaurar volumen, hidratar la piel en profundidad y suavizar arrugas. Resultados visibles desde la primera sesión con una duración de 8 a 18 meses según la zona tratada.<br><br><strong>Zonas:</strong> Labios, Pómulos, Ojeras, Surcos, Mandíbula, Mentón<br><strong>Duración:</strong> 30-45 min<br><strong>Recuperación:</strong> Inmediata', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop' },
    { id: 2, category: 'facial', title: 'Neuromoduladores (Bótox)', badge: '', desc: 'Tratamiento de frente, entrecejo y patas de gallo para suavizar líneas de expresión sin perder naturalidad.', details: 'Los neuromoduladores relajan temporalmente los músculos que causan arrugas dinámicas. Técnica precisa con resultados naturales que duran 4-6 meses.<br><br><strong>Zonas:</strong> Frente, Entrecejo, Patas de gallo, Bunny lines<br><strong>Duración:</strong> 15-20 min<br><strong>Recuperación:</strong> Inmediata', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop' },
    { id: 3, category: 'facial', title: 'Hilos Tensores', badge: 'Premium', desc: 'Lifting sin cirugía con hilos de PDO y PLLA para redefinir el óvalo facial y tensar la piel con efecto inmediato.', details: 'Técnica mínimamente invasiva que utiliza hilos reabsorbibles para elevar y redefinir los tejidos faciales. Estimula la producción de colágeno propio.<br><br><strong>Tipos:</strong> PDO, PLLA, PCL<br><strong>Duración:</strong> 45-60 min<br><strong>Resultados:</strong> 12-18 meses', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop' },
    { id: 4, category: 'facial', title: 'Mesoterapia Facial', badge: '', desc: 'Cóctel vitamínico inyectable con vitaminas, minerales y ácido hialurónico para una piel luminosa y revitalizada.', details: 'Microinyecciones de sustancias nutritivas directamente en la piel para mejorar su textura, luminosidad e hidratación profunda.<br><br><strong>Beneficios:</strong> Luminosidad, Hidratación, Anti-oxidante<br><strong>Sesiones:</strong> 4-6 sessiones recomendadas<br><strong>Duración:</strong> 20-30 min', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
    { id: 5, category: 'facial', title: 'Peeling Químico', badge: '', desc: 'Exfoliación profunda controlada para renovar la piel, eliminar manchas, cicatrices de acné y mejorar la textura cutánea.', details: 'Aplicación de ácidos médicos para promover la renovación celular. Diferentes profundidades según la necesidad del paciente.<br><br><strong>Tipos:</strong> Superficial, Medio, Profundo<br><strong>Indicaciones:</strong> Manchas, Acné, Textura, Arrugas finas<br><strong>Recuperación:</strong> 2-7 días', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop' },
    { id: 6, category: 'facial', title: 'Rejuvenecimiento IPL / Láser', badge: 'Tecnología', desc: 'Fotorejuvenecimiento mediante luz pulsada intensa o láser para tratar manchas solares, rojeces y poros dilatados.', details: 'La luz pulsada intensa y los láseres fraccionados estimulan la producción de colágeno y elastina, mejorando el tono y la textura de la piel.<br><br><strong>Indicaciones:</strong> Manchas, Rosácea, Poros, Textura<br><strong>Sesiones:</strong> 3-5 sesiones<br><strong>Duración:</strong> 30-45 min', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
    { id: 7, category: 'facial', title: 'Indiba Facial', badge: '', desc: 'Radiofrecuencia monopolar profunda para activar la producción de colágeno, mejorar la firmeza y reducir la flacidez.', details: 'Tecnología patentada de radiofrecuencia a 448 kHz que genera un efecto biológico profundo en los tejidos.<br><br><strong>Beneficios:</strong> Firmeza, Contorno, Luminosidad<br><strong>Sesiones:</strong> 6-10 sesiones<br><strong>Duración:</strong> 45-60 min', img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop' },
    { id: 8, category: 'facial', title: 'Limpieza Facial Profunda', badge: '', desc: 'Higiene médica avanzada con extracción, oxigenación, hidratación y máscara LED para una piel impecable.', details: 'Protocolo completo que incluye limpieza enzimática, vaporización, extracción profesional, alta frecuencia, sérum personalizado y máscara LED.<br><br><strong>Indicaciones:</strong> Todos los tipos de piel<br><strong>Duración:</strong> 60-90 min<br><strong>Frecuencia:</strong> Mensual', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop' },
    { id: 9, category: 'facial', title: 'Rinomodelación', badge: 'Sin Cirugía', desc: 'Remodelación nasal sin bisturí mediante inyecciones de ácido hialurónico para corregir imperfecciones.', details: 'Corrección de dorso, punta y asimetrías nasales sin necesidad de intervención quirúrgica, con resultados inmediatos y reversibles.<br><br><strong>Duración:</strong> 15-30 min<br><strong>Resultados:</strong> 12-18 meses<br><strong>Recuperación:</strong> Inmediata', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop' },
    { id: 10, category: 'facial', title: 'Plasma Rico en Plaquetas (Facial)', badge: 'Bio', desc: 'Tu propio plasma concentrado para regenerar la piel, mejorar la textura, la luminosidad y estimular el colágeno.', details: 'Tratamiento biológico regenerativo que utiliza las plaquetas de tu propia sangre para activar los mecanismos de reparación celular.<br><br><strong>Beneficios:</strong> Regeneración, Luminosidad, Anti-aging<br><strong>Sesiones:</strong> 3-4 sesiones anuales<br><strong>Seguridad:</strong> Biocompatible al 100%', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },

    // CORPORALES
    { id: 11, category: 'corporal', title: 'Criolipólisis', badge: 'Popular', desc: 'Eliminación selectiva de grasa localizada mediante frío controlado sin cirugía ni tiempo de inactividad.', details: 'Tecnología de enfriamiento controlado que destruye selectivamente las células grasas, que son eliminadas de forma natural por el organismo.<br><br><strong>Zonas:</strong> Abdomen, Flancos, Muslos, Papada<br><strong>Sesiones:</strong> 1-3 por zona<br><strong>Resultados:</strong> 2-3 meses', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop' },
    { id: 12, category: 'corporal', title: 'Cavitación Médica', badge: '', desc: 'Ultrasonidos de baja frecuencia para fragmentar los adipocitos y reducir grasa localizada y celulitis.', details: 'Los ultrasonidos crean microburbujas que rompen las membranas de las células grasas, liberando su contenido para su eliminación natural.<br><br><strong>Indicaciones:</strong> Grasa localizada, Celulitis<br><strong>Sesiones:</strong> 8-12 sesiones<br><strong>Duración:</strong> 40-60 min', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop' },
    { id: 13, category: 'corporal', title: 'Mesoterapia Corporal', badge: '', desc: 'Microinyecciones de sustancias lipolíticas y reafirmantes para reducir la celulitis y mejorar la textura de la piel.', details: 'Cócteles personalizados inyectados de forma subcutánea en las zonas problemáticas para tratar la celulitis, la retención de líquidos y la flacidez.<br><br><strong>Zonas:</strong> Piernas, Glúteos, Abdomen, Brazos<br><strong>Sesiones:</strong> 6-10 sesiones<br><strong>Duración:</strong> 30 min', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop' },
    { id: 14, category: 'corporal', title: 'Eliminación de Varices', badge: '', desc: 'Escleroterapia y láser vascular para eliminar arañas vasculares y varices finas de forma definitiva.', details: 'Técnicas combinadas de escleroterapia (inyección de solución esclerosante) y láser vascular para eliminar los vasos sanguíneos antiestéticos.<br><br><strong>Zonas:</strong> Piernas, Tobillos, Cara<br><strong>Sesiones:</strong> 2-4 sesiones<br><strong>Recuperación:</strong> Inmediata', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
    { id: 15, category: 'corporal', title: 'Tratamiento Anticelulítico', badge: '', desc: 'Protocolo combinado con presoterapia, radiofrecuencia y drenaje linfático para combatir la celulitis eficazmente.', details: 'Enfoque multiterapéutico que combina diferentes tecnologías para atacar la celulitis en todas sus fases y mejorar la circulación.<br><br><strong>Tecnologías:</strong> Presoterapia, RF, Endermología<br><strong>Sesiones:</strong> 10-15 sesiones<br><strong>Frecuencia:</strong> 2 veces/semana', img: 'img/anticelulitico.png' },
    { id: 16, category: 'corporal', title: 'Tratamiento Reafirmante', badge: '', desc: 'Radiofrecuencia corporal e HIFU body para tensar la piel y combatir la flacidez de abdomen, brazos y muslos.', details: 'Combinación de radiofrecuencia multipolar y ultrasonidos focalizados de alta intensidad para estimular la producción de colágeno y elastina.<br><br><strong>Zonas:</strong> Abdomen, Brazos, Muslos, Glúteos<br><strong>Sesiones:</strong> 6-8 sesiones<br><strong>Resultados:</strong> Progresivos, máximos a los 3 meses', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop' },

    // CAPILARES
    { id: 17, category: 'capilar', title: 'Mesoterapia Capilar', badge: 'Popular', desc: 'Microinyecciones de vitaminas, minerales y factores de crecimiento en el cuero cabelludo para frenar la caída.', details: 'Tratamiento que nutre directamente los folículos pilosos con un cóctel personalizado de vitaminas, péptidos y factores de crecimiento.<br><br><strong>Indicaciones:</strong> Alopecia, Debilitamiento, Caída estacional<br><strong>Sesiones:</strong> 6-10 sesiones<br><strong>Frecuencia:</strong> Semanal/Quincenal', img: 'https://images.unsplash.com/photo-1585747860019-024f3d8c6408?w=600&h=400&fit=crop' },
    { id: 18, category: 'capilar', title: 'PRP Capilar', badge: 'Bio', desc: 'Plasma Rico en Plaquetas aplicado al cuero cabelludo para estimular la regeneración folicular y densificar el cabello.', details: 'Tu propio plasma enriquecido con plaquetas se inyecta en el cuero cabelludo para activar las células madre de los folículos pilosos.<br><br><strong>Proceso:</strong> Extracción sanguínea → Centrifugado → Aplicación<br><strong>Sesiones:</strong> 3-4 sesiones anuales<br><strong>Resultados:</strong> 3-6 meses', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop' },
    { id: 19, category: 'capilar', title: 'Láser Capilar de Baja Frecuencia', badge: 'Tecnología', desc: 'Estimulación del cuero cabelludo con luz láser de baja intensidad para favorecer el crecimiento y la vascularización.', details: 'La luz láser estimula la actividad celular en los folículos pilosos, mejorando la irrigación sanguínea y la absorción de nutrientes.<br><br><strong>Tecnología:</strong> LLLT (Low Level Laser Therapy)<br><strong>Sesiones:</strong> 12-20 sesiones<br><strong>Complemento:</strong> Ideal con Mesoterapia y PRP', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },

    // DEPILACIÓN
    { id: 20, category: 'depilacion', title: 'Depilación Láser Médica', badge: 'Premium', desc: 'Depilación definitiva con láser de diodo y alejandrita de última generación, supervisada por médicos especializados.', details: 'Sistema de depilación láser médica que combina la longitud de onda más eficaz para cada tipo de piel y vello, con tecnología de enfriamiento integrada.<br><br><strong>Tecnologías:</strong> Láser Diodo 808nm, Alejandrita 755nm<br><strong>Zonas:</strong> Facial y Corporal completo<br><strong>Sesiones:</strong> 6-10 sesiones', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
    { id: 21, category: 'depilacion', title: 'Láser Facial (Labio, Patillas, Mentón)', badge: '', desc: 'Depilación definitiva de vello facial con la máxima precisión y seguridad en pieles delicadas.', details: 'Tratamiento específico para el rostro con láser calibrado para las zonas más sensibles, garantizando resultados sin irritación.<br><br><strong>Zonas:</strong> Labio superior, Patillas, Mentón, Mejillas<br><strong>Sesiones:</strong> 8-12 sesiones<br><strong>Duración:</strong> 10-15 min', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop' },

    // BIENESTAR
    { id: 22, category: 'bienestar', title: 'Protocolo Antiaging Integral', badge: 'Exclusivo', desc: 'Programa personalizado combinando mesoterapia, PRP, neuromoduladores y skincare para un rejuvenecimiento global.', details: 'Un plan de tratamiento completo diseñado a medida que combina las técnicas más avanzadas de medicina estética para un rejuvenecimiento integral.<br><br><strong>Incluye:</strong> Diagnóstico IA, Plan personalizado, Seguimiento<br><strong>Duración programa:</strong> 3-6 meses<br><strong>Resultados:</strong> Rejuvenecimiento progresivo y natural', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop' },
    { id: 23, category: 'bienestar', title: 'Protocolo Pre-Boda', badge: '', desc: 'Plan de tratamientos especial para novias: luminosidad facial, corporal, depilación y cuidados express.', details: 'Programa diseñado especialmente para que brilles en tu día más especial, comenzando idealmente 6 meses antes de la boda.<br><br><strong>Incluye:</strong> Facial intensivo, Tratamiento corporal, Depilación, Skincare<br><strong>Inicio ideal:</strong> 6 meses antes<br><strong>Personalización:</strong> 100% a medida', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
    { id: 24, category: 'bienestar', title: 'Protocolo Postparto', badge: '', desc: 'Recuperación estética tras el embarazo: flacidez abdominal, estrías, retención de líquidos y revitalización.', details: 'Programa integral para recuperar tu cuerpo después del embarazo, combinando tecnologías no invasivas para resultados seguros durante la lactancia.<br><br><strong>Incluye:</strong> Reafirmante corporal, Tratamiento de estrías, Drenaje<br><strong>Seguridad:</strong> Compatible con lactancia<br><strong>Duración:</strong> 3-4 meses', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop' },
    { id: 25, category: 'bienestar', title: 'Protocolo Longevidad', badge: 'Exclusivo', desc: 'Medicina antiaging de precisión: análisis biológico, suplementación personalizada y tratamientos avanzados.', details: 'Enfoque científico multidisciplinar para ralentizar el envejecimiento biológico y optimizar la salud a largo plazo.<br><br><strong>Incluye:</strong> Analítica completa, Telómeros, Nutrigenómica, Plan personalizado<br><strong>Seguimiento:</strong> Trimestral<br><strong>Enfoque:</strong> Preventivo y regenerativo', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  ];

  // Sample before/after cases (demo data stored in localStorage)
  const DEFAULT_CASES = [
    {
      id: 'c1', filter: 'facial', treatment: 'Aumento de Labios (Ácido Hialurónico)', title: 'Resultados Naturales',
      desc: 'Aumento sutil con ácido hialurónico. Volumen natural sin perder la forma original.',
      before: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop'
    },
    {
      id: 'c2', filter: 'facial', treatment: 'Rejuvenecimiento Facial', title: 'Armonización Facial',
      desc: 'Combinación de neuromoduladores, ácido hialurónico y mesoterapia para un rejuvenecimiento global sin cirugía.',
      before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop'
    },
    {
      id: 'c3', filter: 'corporal', treatment: 'Criolipólisis Abdominal', title: 'Reducción de Contorno',
      desc: 'Protocolo de 3 sesiones de criolipólisis combinada con radiofrecuencia para reducción y reafirmación.',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop'
    },
    {
      id: 'c4', filter: 'corporal', treatment: 'Tratamiento Anticelulítico', title: 'Alisado Cutáneo',
      desc: 'Combinación de presoterapia y radiofrecuencia para tratar la celulitis y mejorar la textura cutánea.',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop'
    },
    {
      id: 'c5', filter: 'capilar', treatment: 'Mesoterapia Capilar', title: 'Recuperación de Densidad',
      desc: 'Aumento visible del grosor capilar tras un programa de microinyecciones vitamínicas y minerales.',
      before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop'
    },
    {
      id: 'c6', filter: 'capilar', treatment: 'PRP Capilar', title: 'Regeneración Folicular',
      desc: 'Estimulación progresiva del folículo mediante plasma rico en plaquetas para frenar la caída.',
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1585747860019-024f3d8c6408?w=600&h=400&fit=crop'
    },
    {
      id: 'c7', filter: 'depilacion', treatment: 'Depilación Láser Médica', title: 'Piel Suave Definitiva',
      desc: 'Eliminación del vello corporal con láser de diodo de última generación. Resultados tras 5 sesiones.',
      before: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop'
    },
    {
      id: 'c8', filter: 'depilacion', treatment: 'Láser Facial', title: 'Rostro Impecable',
      desc: 'Depilación definitiva de zonas sensibles (labio superior y mentón) sin irritación.',
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop'
    },
    {
      id: 'c9', filter: 'bienestar', treatment: 'Protocolo Antiaging Integral', title: 'Rejuvenecimiento Global',
      desc: 'Mejora radical del tono y textura gracias a un programa combinado de mesoterapia y cuidados de la piel.',
      before: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop'
    },
    {
      id: 'c10', filter: 'bienestar', treatment: 'Protocolo Pre-Boda', title: 'Luminosidad Inmediata',
      desc: 'Preparación facial y corporal intensiva para deslumbrar en tu gran día.',
      before: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop'
    }
  ];

  // ─── STORAGE HELPERS ──────────────────────────
  function getCases() {
    const stored = localStorage.getItem('eclat_cases_v5');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('eclat_cases_v5', JSON.stringify(DEFAULT_CASES));
    return DEFAULT_CASES;
  }

  function saveCases(cases) {
    localStorage.setItem('eclat_cases_v5', JSON.stringify(cases));
  }

  // ─── HEADER SCROLL ───────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  });

  // ─── MOBILE MENU ─────────────────────────────
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');

  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ─── SMOOTH SCROLL ───────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── ADMIN PANEL ─────────────────────────────
  if (window.location.search.includes('admin')) {
    document.getElementById('adminUpload').style.display = '';
  }

  // ─── RENDER TREATMENTS ───────────────────────
  const grid = document.getElementById('treatmentsGrid');
  const tabs = document.querySelectorAll('#treatmentTabs .treatments__tab');

  function renderTreatments(category = 'random') {
    let filtered;
    if (category === 'random') {
      const shuffled = [...TREATMENTS].sort(() => 0.5 - Math.random());
      filtered = shuffled.slice(0, 4);
    } else {
      filtered = TREATMENTS.filter(t => t.category === category);
    }
    grid.innerHTML = filtered.map(t => `
      <div class="treatment-card reveal visible" data-id="${t.id}">
        <div class="treatment-card__img-wrapper">
          <img src="${t.img}" alt="${t.title}" class="treatment-card__img" loading="lazy">
          ${t.badge ? `<span class="treatment-card__badge">${t.badge}</span>` : ''}
        </div>
        <div class="treatment-card__body">
          <span class="treatment-card__category">${t.category}</span>
          <h3 class="treatment-card__title">${t.title}</h3>
          <p class="treatment-card__desc">${t.desc}</p>
          <span class="treatment-card__link">Saber Más →</span>
        </div>
      </div>
    `).join('');

    // Card click → modal
    grid.querySelectorAll('.treatment-card').forEach(card => {
      card.addEventListener('click', () => {
        const t = TREATMENTS.find(x => x.id === parseInt(card.dataset.id));
        if (!t) return;
        openModal(t);
      });
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTreatments(tab.dataset.category);
    });
  });

  renderTreatments('random');

  // ─── TREATMENT MODAL ─────────────────────────
  const modalOverlay = document.getElementById('treatmentModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openModal(t) {
    modalContent.innerHTML = `
      <img src="${t.img}" alt="${t.title}" style="width:100%;height:250px;object-fit:cover;border-radius:var(--radius-lg);margin-bottom:var(--space-lg);">
      ${t.badge ? `<span class="treatment-card__badge" style="position:static;display:inline-block;margin-bottom:var(--space-md);">${t.badge}</span>` : ''}
      <span class="treatment-card__category">${t.category}</span>
      <h2 style="font-size:1.8rem;margin:var(--space-sm) 0 var(--space-md);">${t.title}</h2>
      <div style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.8;">${t.details}</div>
      <div style="margin-top:var(--space-xl);text-align:center;">
        <button class="btn btn--primary" onclick="closeModal(); abrirCitaya();">Solicitar Consulta</button>
      </div>
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  window.closeModal = closeModal;

  // ─── RENDER CASES (BEFORE / AFTER) ───────────
  const casesGrid = document.getElementById('casesGrid');
  const caseFilters = document.querySelectorAll('#caseFilters .treatments__tab');

  function renderCases(filter = 'random') {
    const cases = getCases();
    let filtered;
    if (filter === 'random') {
      const shuffled = [...cases].sort(() => 0.5 - Math.random());
      filtered = shuffled.slice(0, 3);
    } else {
      filtered = cases.filter(c => c.filter === filter);
    }

    casesGrid.innerHTML = filtered.map(c => `
      <div class="case-card reveal visible" data-filter="${c.filter}">
        <div class="case-slider" data-id="${c.id}">
          <div class="case-slider__after">
            <img src="${c.after}" alt="Después">
          </div>
          <div class="case-slider__before">
            <img src="${c.before}" alt="Antes">
          </div>
          <div class="case-slider__handle"></div>
          <span class="case-slider__label case-slider__label--before">Antes</span>
          <span class="case-slider__label case-slider__label--after">Después</span>
        </div>
        <div class="case-card__body">
          <span class="case-card__treatment">${c.treatment}</span>
          <h3 class="case-card__title">${c.title}</h3>
          <p class="case-card__desc">${c.desc}</p>
        </div>
      </div>
    `).join('');

    // Initialize sliders
    initSliders();
  }

  caseFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      caseFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCases(btn.dataset.filter);
    });
  });

  renderCases('random');

  // ─── BEFORE/AFTER SLIDER LOGIC ───────────────
  function initSliders() {
    document.querySelectorAll('.case-slider').forEach(slider => {
      let isDragging = false;

      function updateSlider(x) {
        const rect = slider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        const beforeEl = slider.querySelector('.case-slider__before');
        const handle = slider.querySelector('.case-slider__handle');
        beforeEl.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        handle.style.left = pos + '%';
      }

      slider.style.cursor = 'grab';

      slider.addEventListener('mousedown', e => { 
        isDragging = true; 
        slider.style.cursor = 'grabbing';
        updateSlider(e.clientX); 
      });
      slider.addEventListener('touchstart', e => { 
        isDragging = true; 
        updateSlider(e.touches[0].clientX); 
      }, { passive: true });

      window.addEventListener('mousemove', e => { 
        if (isDragging) updateSlider(e.clientX); 
      });
      window.addEventListener('touchmove', e => { 
        if (isDragging) updateSlider(e.touches[0].clientX); 
      }, { passive: true });

      window.addEventListener('mouseup', () => { 
        isDragging = false; 
        slider.style.cursor = 'grab';
      });
      window.addEventListener('touchend', () => { 
        isDragging = false; 
        slider.style.cursor = 'grab';
      });
    });
  }

  // ─── UPLOAD FORM (Admin) ─────────────────────
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    // Setup drop zones
    ['dropBefore', 'dropAfter'].forEach(zoneId => {
      const zone = document.getElementById(zoneId);
      const input = zone.querySelector('input[type="file"]');
      const previewId = zoneId === 'dropBefore' ? 'previewBefore' : 'previewAfter';

      zone.addEventListener('click', () => input.click());

      zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
      zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('dragover');
        input.files = e.dataTransfer.files;
        showPreview(input.files[0], previewId);
      });

      input.addEventListener('change', () => {
        if (input.files[0]) showPreview(input.files[0], previewId);
      });
    });

    function showPreview(file, containerId) {
      const container = document.getElementById(containerId);
      const url = URL.createObjectURL(file);
      if (file.type.startsWith('video/')) {
        container.innerHTML = `<video src="${url}" style="width:100%;border-radius:var(--radius-md);max-height:200px;" controls></video>`;
      } else {
        container.innerHTML = `<img src="${url}" style="width:100%;border-radius:var(--radius-md);max-height:200px;object-fit:cover;">`;
      }
    }

    uploadForm.addEventListener('submit', e => {
      e.preventDefault();
      const beforeInput = document.getElementById('fileBefore');
      const afterInput = document.getElementById('fileAfter');
      const name = document.getElementById('caseName').value;
      const treatment = document.getElementById('caseTreatment');
      const desc = document.getElementById('caseDesc').value;

      if (!beforeInput.files[0] || !afterInput.files[0]) {
        alert('Por favor, sube tanto la foto del ANTES como la del DESPUÉS.');
        return;
      }

      // Create object URLs for the uploaded files
      const beforeUrl = URL.createObjectURL(beforeInput.files[0]);
      const afterUrl = URL.createObjectURL(afterInput.files[0]);

      const newCase = {
        id: 'c' + Date.now(),
        filter: treatment.value,
        treatment: treatment.options[treatment.selectedIndex].text,
        title: name || 'Nuevo Caso',
        desc: desc || 'Tratamiento de medicina estética.',
        before: beforeUrl,
        after: afterUrl
      };

      const cases = getCases();
      cases.unshift(newCase);
      saveCases(cases);

      // Re-render
      renderCases();

      // Reset form
      uploadForm.reset();
      document.getElementById('previewBefore').innerHTML = '';
      document.getElementById('previewAfter').innerHTML = '';

      alert('✅ ¡Caso publicado con éxito!');
    });
  }

  // ─── TESTIMONIALS CAROUSEL ───────────────────
  const carousel = document.getElementById('testimonialCarousel');
  const dotsContainer = document.getElementById('testimonialDots');
  const cards = carousel.querySelectorAll('.testimonial-card');
  let currentSlide = 0;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `testimonials__dot${i === 0 ? ' active' : ''}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    currentSlide = index;
    cards.forEach((card, i) => {
      card.style.transform = `translateX(-${index * 100}%)`;
    });
    dotsContainer.querySelectorAll('.testimonials__dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Auto-play
  setInterval(() => {
    goToSlide((currentSlide + 1) % cards.length);
  }, 6000);

  // ─── SCROLL REVEAL ANIMATION ─────────────────
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── NEWSLETTER ──────────────────────────────
  const newsletterBtn = document.getElementById('newsletterBtn');
  const newsletterEmail = document.getElementById('newsletterEmail');

  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
      const email = newsletterEmail.value.trim();
      if (!email || !email.includes('@')) {
        alert('Por favor, introduce un email válido.');
        return;
      }
      alert(`✅ ¡Gracias por suscribirte, ${email}! Recibirás nuestras novedades pronto.`);
      newsletterEmail.value = '';
    });
  }

  // ─── HERO PARTICLES (Large, visible) ─────────
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    const PARTICLE_COUNT = 30;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      const isGlow = Math.random() > 0.4;
      particle.className = `hero__particle ${isGlow ? 'hero__particle--glow' : 'hero__particle--soft'}`;
      const size = isGlow ? Math.random() * 14 + 6 : Math.random() * 8 + 4; // 6-20px glow, 4-12px soft
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 8; // 8-18s
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      particlesContainer.appendChild(particle);
    }
  }

  // ─── HERO SPOTLIGHT (Mouse-tracking) ────────
  const heroSection = document.querySelector('.hero');
  const spotlight = document.getElementById('heroSpotlight');
  if (heroSection && spotlight) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.left = x + 'px';
      spotlight.style.top = y + 'px';
    });
  }

  // ─── CONTACT FORM ───────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const interest = document.getElementById('contactInterest').value;
      const message = document.getElementById('contactMessage').value.trim();
      const privacy = document.getElementById('contactPrivacy').checked;

      const errorDiv = document.getElementById('formError');
      errorDiv.classList.remove('visible');
      
      if (!name || !phone || !email) {
        showFormError('Por favor, completa todos los campos obligatorios (*).');
        return;
      }
      
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFormError('El correo electrónico no es válido.');
        return;
      }

      if (!privacy) {
        showFormError('Para continuar, debes aceptar la política de privacidad marcando la casilla correspondiente.');
        return;
      }

      function showFormError(msg) {
        errorDiv.textContent = msg;
        errorDiv.classList.add('visible');
        // Add a small shake animation to draw attention
        contactForm.classList.remove('shake');
        void contactForm.offsetWidth; // trigger reflow
        contactForm.classList.add('shake');
      }

      // Start form submission
      const submitBtn = document.getElementById('submitConsultaBtn');
      const successDiv = document.getElementById('formSuccess');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';

      try {
        const response = await fetch('https://n8n-n8n.1ru8gh.easypanel.host/webhook/0cb34b94-46b8-41bd-a08b-8dfaf4a07a93', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            name: name, 
            phone: phone, 
            email: email, 
            interest: interest, 
            message: message 
          })
        });

        if (!response.ok) {
           const errorText = await response.text();
           throw new Error(`Error ${response.status}: ${response.statusText}. ${errorText}`);
        }

        // Hide the button and show the premium success banner
        submitBtn.style.display = 'none';
        if (successDiv) {
          successDiv.classList.add('visible');
        }

        // After 8 seconds: reset everything
        setTimeout(() => {
          if (successDiv) successDiv.classList.remove('visible');
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.display = '';
            contactForm.reset();
          }, 500);
        }, 8000);

      } catch (error) {
         console.error('Error submitting form:', error);
         showFormError('Detalles del error: ' + error.message);
         submitBtn.textContent = originalText;
         submitBtn.disabled = false;
         submitBtn.style.opacity = '1';
      }
    });
  }

  // ─── FOOTER LINK TREATMENT REDIRECTION ────────────
  const footerLinks = document.querySelectorAll('.footer__treatment-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href'); // e.g. "#tratamientos"
      const targetTab = link.getAttribute('data-tab'); // e.g. "facial"

      // Scroll to #tratamientos
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Activate the proper tab
      const tabButton = document.querySelector(`.treatments__tab[data-category="${targetTab}"]`);
      if (tabButton) {
        tabButton.click();
      }
    });
  });

  // ─── COOKIE BANNER ───────────────────────────
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  const rejectCookies = document.getElementById('rejectCookies');

  if (cookieBanner) {
    // Check if the user already made a choice
    const cookieChoice = localStorage.getItem('eclat_cookies_accepted');

    if (!cookieChoice) {
      // Show the banner after a short delay
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 1500);
    }

    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('eclat_cookies_accepted', 'true');
      cookieBanner.classList.remove('show');
    });

    rejectCookies.addEventListener('click', () => {
      localStorage.setItem('eclat_cookies_accepted', 'false');
      cookieBanner.classList.remove('show');
    });
  }

});

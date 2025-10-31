// script.js — v3 con animaciones IntersectionObserver, mapa interactivo y botón "Back to Top"

document.addEventListener('DOMContentLoaded', function(){
  
  // --- BLOQUE 1: CTA (Call to Action) del Hero (sin cambios) ---
  const bookBtn = document.getElementById('bookBtn');
  const contactSection = document.getElementById('contacto');
  
  if(bookBtn && contactSection){
    bookBtn.addEventListener('click', function(){
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // --- BLOQUE 2: Validación de Formulario (sin cambios) ---
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if(form && formMessage){
    form.addEventListener('submit', function(e){
      formMessage.textContent = '';
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if(!nombre || !email || !mensaje){
        e.preventDefault(); 
        formMessage.textContent = 'Por favor completa todos los campos.';
        formMessage.style.color = 'crimson';
        return;
      }
      const re = /\S+@\S+\.\S+/;
      if(!re.test(email)){
        e.preventDefault(); 
        formMessage.textContent = 'Introduce un email válido.';
        formMessage.style.color = 'crimson';
        return;
      }
      formMessage.textContent = 'Enviando mensaje...';
      formMessage.style.color = 'var(--green-700)';
    });
  }

  // --- NUEVO BLOQUE 3: Animaciones de Scroll con IntersectionObserver ---
  // Esta es una API moderna para detectar cuándo un elemento entra en la pantalla
  const animatedElements = document.querySelectorAll('[data-animate="fade-in-up"]');
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Animamos solo una vez
        }
      });
    }, {
      threshold: 0.1 // El elemento se activa cuando el 10% es visible
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Si el navegador es muy antiguo y no soporta IntersectionObserver,
    // simplemente mostramos los elementos para que no se queden ocultos.
    animatedElements.forEach(el => {
      el.classList.add('is-visible');
    });
  }

  // --- NUEVO BLOQUE 4: Funcionalidad del Botón "Volver Arriba" ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  if (backToTopBtn) {
    // Mostrar u ocultar el botón basado en el scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) { // Muestra el botón después de bajar 300px
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // Acción de clic: volver arriba suavemente
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- NUEVO BLOQUE 5: Funcionalidad del Mapa de Dolor Interactivo ---
  const hotspots = document.querySelectorAll('.hotspot');
  const detailsPanel = document.getElementById('hotspot-details');

  // Base de datos de contenido para cada punto
  const hotspotData = {
    'hombro': {
      title: '<i class="ph ph-shoulder-blade"></i> Dolor de Hombro',
      text: 'El dolor de hombro puede deberse a tendinitis, bursitis o lesiones del manguito rotador. Ofrecemos <strong>terapia manual</strong> y <strong>fisioterapia deportiva</strong> para recuperar la movilidad y reducir el dolor.'
    },
    'espalda': {
      title: '<i class="ph ph-person"></i> Dolor de Espalda',
      text: 'Desde lumbalgia hasta contracturas cervicales, el dolor de espalda es muy común. Nuestros tratamientos incluyen <strong>masaje terapéutico</strong> y <strong>rehabilitación postural</strong> para corregir la causa raíz.'
    },
    'rodilla': {
      title: '<i class="ph ph-bone"></i> Dolor de Rodilla',
      text: 'Las lesiones de rodilla, como problemas de menisco o ligamentos, requieren una rehabilitación cuidadosa. Aplicamos técnicas de <strong>readaptación deportiva</strong> y ejercicios de fortalecimiento.'
    },
    'default': {
      title: '<i class="ph ph-info"></i> Haz clic en un punto',
      text: 'Selecciona una de las zonas marcadas para obtener más información sobre nuestros servicios especializados.'
    }
  };

  if (hotspots.length > 0 && detailsPanel) {
    hotspots.forEach(spot => {
      spot.addEventListener('click', () => {
        const spotKey = spot.dataset.spot; // Obtiene el valor de data-spot=""
        const data = hotspotData[spotKey] || hotspotData['default'];
        
        // Actualiza el panel de información dinámicamente
        detailsPanel.innerHTML = `
          <h4>${data.title}</h4>
          <p class="muted">${data.text}</p>
        `;
      });
    });
  }

});
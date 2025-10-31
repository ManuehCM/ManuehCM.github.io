// script.js — interacciones mejoradas para FisioActive

document.addEventListener('DOMContentLoaded', function(){
  
  // --- MEJORA CTA (Call to Action) ---
  // Ahora, el botón de "Pide tu cita" del hero hace scroll suave al formulario
  const bookBtn = document.getElementById('bookBtn');
  const contactSection = document.getElementById('contacto');
  
  if(bookBtn && contactSection){
    bookBtn.addEventListener('click', function(){
      // alert('Gracias por solicitar tu cita...'); // Esto no es profesional
      
      // Acción mucho más profesional: scroll suave a la sección de contacto
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // --- Manejo del Formulario (adaptado para Formspree) ---
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if(form && formMessage){
    
    // Si usas Formspree, él maneja el envío.
    // Este script ahora solo valida ANTES de enviar.
    // He quitado el e.preventDefault() para permitir el envío a Formspree.
    
    form.addEventListener('submit', function(e){
      
      // Validación de campos vacíos
      formMessage.textContent = '';
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if(!nombre || !email || !mensaje){
        e.preventDefault(); // Detenemos el envío si hay error
        formMessage.textContent = 'Por favor completa todos los campos.';
        formMessage.style.color = 'crimson';
        return;
      }

      // Validación sencilla de email
      const re = /\S+@\S+\.\S+/;
      if(!re.test(email)){
        e.preventDefault(); // Detenemos el envío si hay error
        formMessage.textContent = 'Introduce un email válido.';
        formMessage.style.color = 'crimson';
        return;
      }

      // Si todo está bien, el formulario se enviará a la URL de Formspree
      // Mostramos un mensaje de "enviando..."
      formMessage.textContent = 'Enviando mensaje...';
      formMessage.style.color = 'var(--green-700)';
      
      // Formspree se encargará de mostrar la página de "gracias"
      // o puedes configurar Formspree para que redirija a una página tuya.
    });
  }
});
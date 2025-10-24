// script.js — interacciones simples para FisioActive

// Alerta cuando el usuario pulsa 'Pide tu cita'
document.addEventListener('DOMContentLoaded', function(){
  const bookBtn = document.getElementById('bookBtn');
  if(bookBtn){
    bookBtn.addEventListener('click', function(){
      alert('Gracias por solicitar tu cita. Te contactaremos pronto para confirmar la disponibilidad.');
    });
  }

  // Manejo básico del formulario de contacto
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      formMessage.textContent = '';

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if(!nombre || !email || !mensaje){
        formMessage.textContent = 'Por favor completa todos los campos.';
        formMessage.style.color = 'crimson';
        return;
      }

      // Validación sencilla de email
      const re = /\S+@\S+\.\S+/;
      if(!re.test(email)){
        formMessage.textContent = 'Introduce un email válido.';
        formMessage.style.color = 'crimson';
        return;
      }

      // Simular envío (sin backend). Podrías integrar Formspree, Getform o un endpoint propio.
      formMessage.textContent = 'Mensaje enviado. Gracias — nos pondremos en contacto contigo.';
      formMessage.style.color = 'var(--green-700)';

      // limpiar campos después de enviar
      form.reset();
    });
  }
});
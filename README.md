# ManuehCM.github.io

Pequeña web para una clínica de fisioterapia. Contiene una página principal (`index.html`) con:

- Sección "Quiénes somos" (descripción de la empresa)
- Sección "Servicios" y datos de contacto
- Formulario de contacto que utiliza `mailto:` para abrir el cliente de correo del usuario

Cómo probar localmente

1. Abre el archivo `index.html` en un navegador (doble clic o "Abrir con").
2. El formulario utiliza `mailto:`; si no tienes cliente de correo configurado en el sistema, copia el email mostrado en la página y envía manualmente.

Enviar formularios desde la web (opciones avanzadas)

- Integrar un servicio como Formspree, Getform o similar y cambiar el `action` del formulario a la URL del servicio.
- Implementar un backend que reciba los mensajes y los reenvíe por email (requiere servidor).

Edición rápida

Edita `index.html` para cambiar textos, correo y teléfono. Puedes personalizar estilos en la etiqueta `<style>`.

Creado automáticamente por cambios locales.
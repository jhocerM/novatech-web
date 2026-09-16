/* =====================================================
   NOVATECH - SCRIPT PRINCIPAL
   1. Menú móvil (hamburguesa)
   2. Validación y confirmación del formulario de contacto
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. MENÚ MÓVIL ---------- */
  const botonMenu = document.getElementById('menuToggle');
  const navPrincipal = document.getElementById('navPrincipal');

  if (botonMenu && navPrincipal) {
    botonMenu.addEventListener('click', function () {
      const estaAbierto = navPrincipal.classList.toggle('abierto');
      botonMenu.setAttribute('aria-expanded', estaAbierto);
    });

    // Cierra el menú al hacer clic en un enlace (útil en móvil)
    navPrincipal.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        navPrincipal.classList.remove('abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. FORMULARIO DE CONTACTO ---------- */
  const formulario = document.getElementById('formularioContacto');
  const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();

      // Validación nativa del navegador (required, type="email", pattern, etc.)
      if (!formulario.checkValidity()) {
        formulario.reportValidity();
        mensajeConfirmacion.textContent = '';
        return;
      }

      const nombre = document.getElementById('nombre').value.trim();

      mensajeConfirmacion.textContent =
        '¡Gracias, ' + nombre + '! Tu mensaje fue enviado correctamente. Te contactaremos pronto.';

      formulario.reset();
    });
  }

});

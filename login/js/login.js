// -------- AUTENTICACIÓN --------
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const mensajeError = document.getElementById("mensajeError");

  // Validar que sea un correo Gmail
  if (!email.endsWith("@gmail.com")) {
    mensajeError.textContent = "Solo se permite iniciar sesión con un correo Gmail.";
    return;
  }

  // Si pasa la validación, guarda y redirige
  localStorage.setItem("usuarioAutenticado", "true");
  localStorage.setItem("correoUsuario", email);
  window.location.href = "../index.html";
});

// -- Carrusel de imágenes de fondo --
(function(){
  const imgs = Array.from(document.querySelectorAll('.bg-slideshow img'));
  if (!imgs.length) return;

  let i = 0;
  imgs[i].classList.add('activa');

  setInterval(() => {
    const actual = i;
    i = (i + 1) % imgs.length;
    imgs[actual].classList.remove('activa');
    imgs[i].classList.add('activa');
  }, 3000); // cada 3s
})();
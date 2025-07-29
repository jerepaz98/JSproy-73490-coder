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
  window.location.href = "index.html";
});


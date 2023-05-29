function validarFormulario() {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var telefono = document.getElementById("Telefono").value;
    var mail = document.getElementById("mail").value;
    var comentarios = document.getElementById("Comentarios").value;
    var errores = [];

    if (nombre === "") {
      errores.push("El campo Nombre es obligatorio.");
      document.getElementById("errorNombre").textContent = "El campo Nombre es obligatorio.";
    } else {
      document.getElementById("errorNombre").textContent = "";
    }

    if (apellido === "") {
      errores.push("El campo Apellido es obligatorio.");
      document.getElementById("errorApellido").textContent = "El campo Apellido es obligatorio.";
    } else {
      document.getElementById("errorApellido").textContent = "";
    }

    if (telefono === "") {
      errores.push("El campo Teléfono es obligatorio.");
      document.getElementById("errorTelefono").textContent = "El campo Teléfono es obligatorio.";
    } else {
      document.getElementById("errorTelefono").textContent = "";
    }

    if (mail === "") {
      errores.push("El campo Mail es obligatorio.");
      document.getElementById("errorMail").textContent = "El campo Mail es obligatorio.";
    } else {
      document.getElementById("errorMail").textContent = "";
    }

    if (comentarios === "") {
      errores.push("El campo Consulta es obligatorio.");
      document.getElementById("errorComentarios").textContent = "El campo Consulta es obligatorio.";
    } else {
      document.getElementById("errorComentarios").textContent = "";
    }

    if (errores.length > 0) {
      return false; // Evita el envío del formulario si hay errores
    }
  }
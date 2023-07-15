function guardarDatos() {
    var form = document.getElementById('myForm');
    var tipo = form.querySelector('input[name="tipoUsuario"]:checked').value;
    var nombre = form.querySelector('#nombre').value;
    var apellido = form.querySelector('#apellido').value;
    var cedula = form.querySelector('#cedula').value;
    var especialidad = form.querySelector('#especialidad').value;
    var consultorio = form.querySelector('#consultorio').value;
    var correo = form.querySelector('#correo').value;

    var tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow();
    fila.insertCell().textContent = tipo;
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = apellido;
    fila.insertCell().textContent = cedula;
    fila.insertCell().textContent = especialidad;
    fila.insertCell().textContent = consultorio;
    fila.insertCell().textContent = correo;

    limpiarFormulario();
  }

  function limpiarTabla() {
    var tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    while (tabla.firstChild) {
      tabla.removeChild(tabla.firstChild);
    }
  }

  function limpiarFormulario() {
    var form = document.getElementById('myForm');
    form.reset();
  }

  var consultorioInput = document.querySelector('input[name="consultorio"]');
  var tipoUsuarioRadios = document.getElementsByName("tipoUsuario");

  for (var i = 0; i < tipoUsuarioRadios.length; i++) {
    tipoUsuarioRadios[i].addEventListener("change", function() {
      if (this.value === "doctor") {
        consultorioInput.disabled = true;
      } else {
        consultorioInput.disabled = false;
      }
    });
    };
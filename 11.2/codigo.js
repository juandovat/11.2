document.addEventListener('DOMContentLoaded', function () {
    const enviarButton = document.getElementById('boton');
    
    enviarButton.addEventListener('click', function () {
      enviarForm();
    });
  

function enviarForm() {
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const fechas = document.getElementById("fecha").value;

const formData = {
    nombre: nombre,
    apellido: apellido,
    fecha: fechas
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
      });
    }
    });
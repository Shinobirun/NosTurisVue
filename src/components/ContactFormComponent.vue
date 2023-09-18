<template>
    <div class="contenedor">
    >
        <div class="formulario">
      <h2>Contacto</h2>
      <form @submit.prevent="enviarConsulta">
        <div>
          
          <input type="text" v-model="nombre" required placeholder="Tu nombre"/>
        </div>
        <div>
          
          <input type="email" v-model="email" required placeholder="Correo Electrónico"/>
        </div>
        <div>
          
          <textarea v-model="mensaje" required placeholder="Dejanos aca tu consulta, saludo, o comentario."></textarea>
        </div>
        <button type="submit">Enviar Consulta</button>
      </form>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        email: '',
        mensaje: ''
      };
    },
    methods: {
      enviarConsulta() {
        const consulta = {
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        };
  
        fetch('http://localhost:8000/enviar-consulta/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(consulta)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Puedes manejar la respuesta del backend aquí
        })
        .catch(error => console.error('Error:', error));
      }
    }
  };
  </script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formulario {
  background-color: var(--color-backForm1);
  color: var(--color-text1);
  width: 80%;
  padding: 30px;
}

label, input, textarea {
  color: var(--color-text2);
}

button {
  background-color: var(--color-primary);
  color: var(--color-text1);
  height: 40px;
  width: 100%;
  margin: 10px 0;
}

button:hover {
  background-color: var(--color-secondary);
}

input[type="text"]:hover,
input[type="email"]:hover,
textarea:hover {
  filter: brightness(1.1); /* Cambia la tonalidad al hacer hover */
}

input[type="text"],
input[type="email"],
textarea {
  width: calc(100% - 20px); /* Ajuste para evitar desbordamiento */
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  transition: filter 0.3s; /* Transición suave en el hover */
}

h2 {
  margin: 20px 0;
  text-align: center; /* Centra el título */
}
</style>
  
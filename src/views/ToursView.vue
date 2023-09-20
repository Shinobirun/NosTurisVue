<template>
    <div class="body">
        <HeaderComponent />
    <main>

  <div class="filtro">
      <label>
        <input type="radio" v-model="filtro" value="todos" name="modoFiltro"> Todos
      </label>
      <label>
        <input type="radio" v-model="filtro" value="relax" name="modoFiltro"> Relax
      </label>
      <label>
        <input type="radio" v-model="filtro" value="romantico" name="modoFiltro"> Romántico
      </label>
  </div>
    <RelaxComponent v-if="filtro === 'relax'"></RelaxComponent> 
    <RomanticComponent v-if="filtro === 'romantico'"></RomanticComponent>
    <RelaxComponent v-if="filtro === 'todos'"></RelaxComponent>
    <RomanticComponent v-if="filtro === 'todos'"></RomanticComponent>
    </main>
    
    <FooterComponent />
    </div>
  </template>
  
  <script>
  
  import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'; 
import RelaxComponent from '../components/RelaxComponent.vue';
import RomanticComponent from '../components/RomanticComponent.vue';

export default {
  name: 'ToursView',
  components: {
    HeaderComponent,
    FooterComponent,
    RelaxComponent,
    RomanticComponent,
  },
  data() {
    return {
      mensaje: 'Componente Turismo',
      filtro: 'todos'
    };
  },
  methods: {

    filtrarRelax() {
      this.filtro = 'relax';
    },
    filtrarRomantico() {
      this.filtro = 'romantico';
    },
    mostrarTodos() {
      this.filtro = 'todos';
    }
  }
}
  </script>
  
  <style scoped>
  .body {

font-family: 'Roboto', sans-serif;
margin: 0;
padding: 0;
background-image: url('../assets/images/playaMuelle.jpg');
background-size: cover; /* Ajusta la imagen al tamaño del viewport */
background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
}

.filtro {
  display: flex;
  margin-bottom: 20px;
}

.filtro label {
  margin-right: 10px;
}
 
  </style>
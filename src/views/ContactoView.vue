<template>
    <div>
      <h1>{{ mensaje }}</h1>
      <button @click="irAHome">Ir a Home</button>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      mensaje: 'Componente Contacto'
    };
  },
  methods: {
    irAHome() {
      this.$router.push({ path: '/' });
    }
  }
};
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
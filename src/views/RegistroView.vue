<template>
  <div>
    <Header />
    <RegistroForm />
    <Footer />
  </div>
</template>
  
<script>
  import Header from '@/components/HeaderComponent.vue';
  import RegistroForm from '@/components/FormRegistroComponent.vue'; 
  import Footer from '@/components/FooterComponent.vue'; 

  export default {
    components: {
      Header,
      RegistroForm,
      Footer
    }
  }
</script>

<style scoped>
/* Estilos específicos de la página de inicio */
 div {

  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-image: url('../assets/images/registro/amanecerLago.jpg');
  background-size: cover; /* Ajusta la imagen al tamaño del viewport */
  background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
 }
</style>
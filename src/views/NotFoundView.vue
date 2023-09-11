<template>
  <div>
    <img src="../assets/images/registro/404not2.jpg" alt="Pagina no encontrada" class="notFound">
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "Home" }); // Asegúrate de que "Home" sea el nombre correcto de tu ruta de inicio
    }, 3000); // Espera 5 segundos antes de redirigir
  },
};
</script>

<style scoped>

.notFound{
  height: 100vh;
}

 
</style>
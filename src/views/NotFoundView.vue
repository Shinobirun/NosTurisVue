<template>
  <div>
    <h1>Error 404 - Página no encontrada</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "Home" }); // Asegúrate de que "Home" sea el nombre correcto de tu ruta de inicio
    }, 5000); // Espera 5 segundos antes de redirigir
  },
};
</script>

<style scoped>
/* Estilos específicos si los necesitas */
</style>
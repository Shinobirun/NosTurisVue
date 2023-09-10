  <template>
    <section class="banner">
      <!-- Contenido del banner -->
      <img src="../assets/images/boeing-159589_1280.png" alt="Banner de promoción">
    </section>
  </template>

  <script>
  export default {
    name: 'BannerComponent'
  }
  </script>

  <style scoped>
  /* Estilos específicos del banner */
  .banner {
      text-align: center;
      padding: 100px 0;
  }

  .banner img {
      max-width: 100%;
      height: 300px;
  }
  </style>
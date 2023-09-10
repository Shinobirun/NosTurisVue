<template>
    
      <!-- Contenido de la oferta -->
      <section class="offerts">
            <h2>Ofertas de Paquetes Turísticos</h2>
            <div class="offert">
                <img src="../assets/images/turismoavent1.jpg" alt="Oferta 1">
                <h3>Paquete Aventura</h3>
                <p>Explora lugares increíbles con nuestra oferta de aventura.</p>
                <a href="pagina-oferta-1.html">Ver más</a>
            </div>
            <div class="offert">
                <img src="../assets/images/relaxplay2.jpg" alt="Oferta 2">
                <h3>Paquete Relax</h3>
                <p>Relájate y rejuvenece en destinos paradisíacos.</p>
                <a href="pagina-oferta-2.html">Ver más</a>
            </div>
            <div class="offert">
                <img src="../assets/images/avent2playa.jpg" alt="Oferta 3">
                <h3>Paquete Aventura Plus   </h3>
                <p>Descubre aventuras emocionantes en todo el mundo.</p>
                <a href="pagina-oferta-3.html">Ver más</a>
            </div>
            <div class="offert">
                <img src="../assets/images/romantplaya.jpg" alt="Oferta 4">
                <h3>Paquete Romántico</h3>
                <p>Vive momentos inolvidables en destinos románticos.</p>
                <a href="pagina-oferta-4.html">Ver más</a>
            </div>
            <div class="offert">
                <img src="../assets/images/playa.jpg" alt="Oferta 5">
                <h3>Paquete Playa</h3>
                <p>Relájate en las playas más hermosas del mundo.</p>
                <a href="pagina-oferta-5.html">Ver más</a>
            </div>
            <div class="offert">
                <img src="../assets/images/pesca.jpg" alt="Oferta 6">
                <h3>Paquete pesca</h3>
                <p>Sumérgete en la cultura y la historia de diferentes lugares.</p>
                <a href="pagina-oferta-6.html">Ver más</a>
            </div>
        </section>
    
  </template>
  
  <script>
  export default {
    name: 'OffertComponent'
  }
  </script>
  
  <style scoped>
    /* Estilos específicos de la oferta */
    .offerts {
        text-align: center;
        margin-top: 20px;
    }

    .offert {
        /*background-color: var(--color-primary);*/
        background: rgb(23,70,162);
        background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 35%, var(--color-background) 100%);
        color: #fff;
        padding: 20px;
        margin: 20px;
        border-radius: 10px;
        display: inline-block;
        width: calc(33.33% - 40px);
        opacity: .8;
        
}

    .offert h3 {
        font-size: 1.5rem;
        margin: 10px 0;
        animation: cambiaColor 3s linear infinite alternate;
        -webkit-animation: cambiaColor 3s linear infinite alternate;
}

    .offert p {
        font-size: 1rem;
        margin: 10px 0;
    }

    .offert a {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: bold;
    }

    .logo img {
        max-width: 100px; /* Tamaño máximo del logo en píxeles */
        height: auto;
        
    }

    /* Estilos para la sección de ofertas */
 
   

    .offert img {
        max-width: 100%; /* Ajusta el ancho máximo al 100% para que todas las imágenes se redimensionen automáticamente */
        height: auto; /* Ajusta la altura automáticamente para mantener la proporción */
        width: 100%; /* Añade esto para asegurarte de que el ancho sea del 100% del contenedor */
        max-height: 200px; /* Establece la altura máxima deseada en píxeles */
    }

    @keyframes cambiaColor {
        0% {
          color:#0404ff;
        }

        50% {
            color:#fdfdf8
        }
       
        100% {
          color:#0f0102;
        }
      }

    /* Aplicar animación de vibración al hacer hover sobre las ofertas */
    .offert:hover {
        animation: vibrar 0.3s ;   
        opacity: 1;
    }
   
  
  </style>
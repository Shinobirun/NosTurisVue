<template>
    <section class="offerts">
      <h2>Ofertas de Paquetes Turísticos</h2>
      <div v-for="(oferta, index) in ofertas" :key="index" class="offert">
        <img :src="oferta.imagen" :alt="'Oferta ' + (index + 1)">
        <h3>{{ oferta.titulo }}</h3>
        <p>{{ oferta.descripcion }}</p>
        <button @click="verDetalles(oferta)">Ver más</button>
      </div>
    </section>
  </template>
  
<script>
   export default {
  name: 'OffertComponent',
  data() {
    return {
      ofertas: [
        {
          titulo: 'Paquetes Aventuras',
          descripcion: 'Explora lugares increíbles con nuestra oferta de aventura.',
          imagen: require('@/assets/images/turismoavent1.jpg')
        },
        {
          titulo: 'Paquetes Relax',
          descripcion: 'Relájate y rejuvenece en destinos paradisíacos.',
          imagen: require('@/assets/images/relaxplay2.jpg')
        },
        {
          titulo: 'Paquetes Aventuras Plus',
          descripcion: 'Descubre aventuras emocionantes en todo el mundo.',
          imagen: require('@/assets/images/avent2playa.jpg')
        },
        {
          titulo: 'Paquetes Románticos',
          descripcion: 'Vive momentos inolvidables en destinos románticos.',
          imagen: require('@/assets/images/romantplaya.jpg')
        },
        {
          titulo: 'Paquetes Playas',
          descripcion: 'Relájate en las playas más hermosas del mundo.',
          imagen: require('@/assets/images/playa.jpg')
        },
        {
          titulo: 'Paquetes Pesca',
          descripcion: 'Descubre la emoción de pescar en algunos de los destinos más espectaculares del mundo.',
          imagen: require('@/assets/images/pesca.jpg')
        }
        
        // Agrega más ofertas según sea necesario
      ]
    };
  },
  methods: {
    verDetalles(oferta) {
      console.log('Ruta de la imagen:', oferta.imagen);
      this.$emit('ver-detalles', oferta);
    }
  }
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
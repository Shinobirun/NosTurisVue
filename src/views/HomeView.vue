<template>
  <div class="body">
    <HeaderComponent />
    <main>
      <BannerComponent />
      <component :is="componenteActual" @ver-detalles="mostrarDetails" />
      <DetailsComponent v-if="mostrarDetalles" :ofertaSeleccionada="ofertaSeleccionada" @volver="ocultarDetalles" />
      <WhatsappComponent></WhatsappComponent>
      <div v-for="componente in componentesDisponibles" :key="componente">
      <button @click="mostrarComponente(componente)">{{ componente }}</button>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>


<script>  
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import OffertComponent from '@/components/OffertsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import DetailsComponent from '@/components/DetailsComponent.vue'
import WhatsappComponent from '@/components/WhatsappComponent.vue'
import RelaxComponent from '@/components/RelaxComponent.vue'
import RomanticComponent from '@/components/RomanticComponent.vue'

export default {
name: 'HomeView',
components: {
  HeaderComponent,
  BannerComponent,
  OffertComponent,
  WhatsappComponent,
  FooterComponent,
  DetailsComponent,
  RomanticComponent,
  RelaxComponent
},

data() {
    return {
     

      mensaje: 'Componente Turismo',
      mostrarDetalles: false,
      ofertaSeleccionada: null,
      componentesDisponibles: ['OffertComponent', 'RelaxComponent', 'RomanticComponet',/* Agrega más nombres de componentes aquí según sea necesario */],
      componenteActual: 'OffertComponent' 
      };
  },
  methods: {
    mostrarDetails(oferta, componente) {
      this.mostrarDetalles = true;  
      this.ofertaSeleccionada = oferta;
      this.componenteActual = componente;
    },
    mostrarComponente(componente) {
    this.componenteActual = componente;
    this.mostrarDetalles = false; // Esto es opcional, depende de tu lógica
    this.ofertaSeleccionada = null;
    },


    ocultarDetalles() {
      this.mostrarDetalles = false;
      this.ofertaSeleccionada = null;
    }
  }
}
</script>

<style scoped>
/* Estilos específicos de la página de inicio */
.body {

font-family: 'Roboto', sans-serif;
margin: 0;
padding: 0;
background-image: url('../assets/images/playaMuelle.jpg');
background-size: cover; /* Ajusta la imagen al tamaño del viewport */
background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
}
</style>
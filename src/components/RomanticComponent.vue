<template>
    <section class="offerts">
        <h2>Paquetes Románticos</h2>

        <div class="offert">
            <img src="../assets/images/torreParis.jpg" alt="Francia">
            <h3>Escapada romántica a París, Francia</h3>
            <p>Duración: 5 días, 4 noches</p>
            <p>Alojamiento: Hotel boutique con vista a la Torre Eiffel</p>
            <div class="details">
                <p>Actividades incluidas:</p>
                <ul>
                    <li>Cena romántica en un crucero por el río Sena</li>
                    <li>Visita a la Torre Eiffel</li>
                    <li>Paseo por Montmartre y el barrio de los artistas</li>
                    <li>Degustación de vinos y quesos en una bodega local</li>
                </ul>

            </div>
        </div>

        <div class="offert">
            <img src="../assets/images/santoriniGrecia.jpg" alt="Grecia">
            <h3>Aventura romántica en Santorini, Grecia</h3>
            <p>Duración: 7 días, 6 noches</p>
            <p>Alojamiento: Suite con vista al mar en un hotel de lujo en Oia</p>
            <div class="details">
                <p>Actividades incluidas:</p>
                <ul>
                    <li>Tour en velero alrededor de la caldera</li>
                    <li>Cata de vinos en viñedos locales</li>
                    <li>Cena en una taberna griega con música en vivo</li>
                    <li>Relajación en las playas de arena negra</li>
                </ul>

            </div>
        </div>

        <div class="offert">
            <img src="../assets/images/boraBora.jpg" alt="Polinesia Francesa">
            <h3>Experiencia tropical en Bora Bora, Polinesia Francesa</h3>
            <p>Duración: 8 días, 7 noches</p>
            <p>Alojamiento: Bungalow sobre el agua en un resort de lujo</p>
            <div class="details">
                <p>Actividades incluidas:</p>
                <ul>
                    <li>Snorkeling en aguas cristalinas<br></li>
                    <li>Cena privada en la playa<br></li>
                    <li>Masajes en pareja en un spa de renombre<br></li>
                    <li>Excursión en helicóptero sobre la isla<br></li>
                </ul>
                
            </div>
        </div>

        <div class="offert">
            <img src="../assets/images/praga.jpg" alt="Praga">
            <h3>Encanto histórico en Praga, República Checa</h3>
            <p>Duración: 6 días, 5 noches</p>
            <p>Alojamiento: Hotel boutique en el casco antiguo de Praga</p>
            <div class="details">
                <p>Actividades incluidas:</p>
                <ul>
                    <li>Visita al castillo de Praga<br></li>
                    <li>Recorrido en carruaje por las calles adoquinadas<br></li>
                    <li>Cena en un restaurante medieval<br></li>
                    <li>Paseo en barco por el río Moldava<br></li>
                </ul>

            </div>
        </div>
    </section>
</template>
  
<script>
export default {
  name: 'RomanticComponent',
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
  background: rgb(23, 70, 162);
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
  max-width: 100px;
  /* Tamaño máximo del logo en píxeles */
  height: auto;

}

/* Estilos para la sección de ofertas */



.offert img {
  max-width: 100%;
  /* Ajusta el ancho máximo al 100% para que todas las imágenes se redimensionen automáticamente */
  height: auto;
  /* Ajusta la altura automáticamente para mantener la proporción */
  width: 100%;
  /* Añade esto para asegurarte de que el ancho sea del 100% del contenedor */
  max-height: 200px;
  /* Establece la altura máxima deseada en píxeles */
}

@keyframes cambiaColor {
  0% {
    color: #0404ff;
  }

  50% {
    color: #fdfdf8
  }

  100% {
    color: #0f0102;
  }
}

/* Aplicar animación de vibración al hacer hover sobre las ofertas */
.offert:hover {
  animation: vibrar 0.3s;
  opacity: 1;
}</style>
  

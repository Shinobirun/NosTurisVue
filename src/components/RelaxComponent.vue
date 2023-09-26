
<template>
<section class="offerts">
        <h2>Paquetes Relax</h2>

        <div class="offert">
      <img src="../assets/images/maldivas.jpg" alt="Oferta Islas Maldivas">
      <h3>Islas Maldivas</h3>
      <p>Disfruta de unas vacaciones de ensueño en las hermosas Islas Maldivas, conocidas por sus playas de arena blanca,
        aguas cristalinas y bungalows sobre el agua. Un destino perfecto para relajarse y rejuvenecer.</p>
      <p>Duración: 7 días, 6 noches</p>
      <div class="details">
        <p>Actividades incluidas:</p>
        <ul>
          <li>Snorkeling en arrecifes de coral.</li>
          <li>Masajes relajantes en la playa.</li>
          <li>Cenas románticas con vistas al océano.</li>
          <li>Excursiones en barco al atardecer.</li>
        </ul>
      </div>
    </div>

    <div class="offert">
      <img src="../assets/images/bali.jpg" alt="Oferta Bali, Indonesia">
      <h3>Bali, Indonesia</h3>
      <p>Sumérgete en la cultura balinesa y la belleza natural de Bali. Este destino ofrece playas, templos antiguos y
        selvas exuberantes. Es ideal para aquellos que buscan paz y tranquilidad.</p>
      <p>Duración: 8 días, 7 noches</p>
      <div class="details">
        <p>Actividades incluidas:</p>
        <ul>
          <li>Clases de yoga al amanecer.</li>
          <li>Visitas a templos históricos.</li>
          <li>Masajes balineses tradicionales.</li>
          <li>Exploración de arrozales en terrazas.</li>
        </ul>

      </div>
    </div>

    <div class="offert">
      <img src="../assets/images/costaAlmafitana.jpg" alt="Oferta Costa Amalfitana, Italia">
      <h3>Costa Amalfitana, Italia</h3>
      <p>Experimenta el encanto y la elegancia de la Costa Amalfitana en Italia. Con sus pintorescos pueblos costeros,
        deliciosa comida y hermosos paisajes, es un destino perfecto para relajarse.</p>
      <p>Duración: 6 días, 5 noches</p>
      <div class="details">
        <p>Actividades incluidas:</p>
        <ul>
          <li>Degustación de vinos locales.</li>
          <li>Excursiones en barco a las grutas de la costa.</li>
          <li>Disfrute de la cocina italiana auténtica.</li>
          <li>Tiempo libre en las playas locales.</li>
        </ul>

      </div>
    </div>
    <div class="offert">
      <img src="../assets/images/lago.jpg" alt="Oferta Lago Louise">
      <h3>Lago Louise</h3>
      <p>Sumérgete en la belleza serena de Lago Louise, ubicado en las Montañas Rocosas de Canadá. Este destino es famoso
        por sus aguas cristalinas y rodeado de majestuosas montañas. Un lugar perfecto.</p>
      <p>Duración: 5 días, 4 noches</p>
      <div class="details">
        <p>Actividades incluidas:</p>
        <ul>
          <li>Paseos en canoa por el lago al atardecer.</li>
          <li>Senderismo en los senderos de montaña.</li>
          <li>Sesiones de yoga matutinas junto al lago.</li>
          <li>Cenas románticas en restaurantes con vistas panorámicas.</li>
        </ul>

      </div>
    </div>

  </section>
</template>
  
<script>
export default {
  name: 'RelaxComponent',
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
  
<template>
 <footer :style="{ backgroundColor: colorPrimary, color: 'white', padding: '20px' }">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h3>¡Síguenos en las redes sociales!</h3>
        <p>Descubre las mejores ofertas y destinos.</p>
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: white;">Facebook</a></li>
          <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: white;">Twitter</a></li>
          <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: white;">Instagram</a></li>
        </ul>
      </div>
      <div>
        <h3>Contacto</h3>
        <p>Teléfono: 123-456-789</p>
        <p>Correo electrónico: info@tudominio.com</p>
      </div>
    </div>
    <div style="text-align: center; margin-top: 20px;">
      <p>&copy; 2023 Nosotros Turismo. Todos los derechos reservados.</p>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponet',
    data() {
    return {
      colorPrimary: '#1746a2',
    };
  },
  }
  </script>
  
  <style scoped>
    /* Estilos específicos del pie de página */
    footer {
  background-color: var(--color-primary);
  opacity: .6;
  color: white;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: white;
  opacity: 1;
}


  </style>
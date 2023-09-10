<template>
    <footer class="modern-footer">
      <!-- Contenido del pie de página -->
    <div class="footer-content">
        <div class="contact-info">
            <h3>Contacto</h3>
            <p><i class="fas fa-phone"></i> +1234567890</p>
            <p><i class="fas fa-envelope"></i> info@example.com</p>
         </div>
        <div class="social-links">
            <h3>Síguenos</h3>
            <a href="https://wa.me/1234567890" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            <a href="mailto:info@example.com" target="_blank"><i class="far fa-envelope"></i> Correo Electrónico</a>
        </div>
    </div>
    
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponet'
  }
  </script>
  
  <style scoped>
    /* Estilos específicos del pie de página */
    .footer-content {
        display: flex;
        justify-content: space-around;
    }

    .contact-info, .social-links {
        flex: 1;
        margin: 10px;
    }

    .contact-info h3, .social-links h3 {
        font-size: 1.2rem;
    }

    .contact-info p, .social-links a {
        font-size: 1rem;
        margin: 5px 0;
    }

    .contact-info i, .social-links i {
        margin-right: 5px;
    }

    .social-links a {
        color: #fff;
        text-decoration: none;
    }

    .social-links a:hover {
        text-decoration: underline;
    }


  </style>
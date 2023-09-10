<template>
    <div>
      <Header />
      <RegistroForm />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/HeaderComponent.vue';
  import RegistroForm from '@/components/FormRegistroComponent.vue'; 
  import Footer from '@/components/FooterComponent.vue'; 

  export default {
    components: {
      Header,
      RegistroForm,
      Footer
    }
  }
  </script>
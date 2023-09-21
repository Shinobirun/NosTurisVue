<template>
  <div id="app">
    <router-view></router-view>
    <AnimationPlaneComponent></AnimationPlaneComponent>
  </div>
</template>

<script>
import AnimationPlaneComponent from './components/AnimationPlaneComponent.vue';
export default {
  name: 'App',
  components: {
    AnimationPlaneComponent,
  },
}
</script>

<style>
/* Estilos para tu aplicación si los necesitas */
</style>
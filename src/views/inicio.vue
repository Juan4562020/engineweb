<template>
  <div class="Inicio">
    <sesion msg="INICIAR SESION"/>
  </div>
</template>

<script>
// @ is an alias to /src
import sesion from '../components/sesion.vue'

export default {
  name: 'inicio',
  components: {
    sesion
  },
  data(){
    return {
      sesion:sesion
    }
  }
}
</script>
<style>
body{
  background-color:#3498db;;
}
</style>

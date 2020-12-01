<template>
  <div class="CrearCuenta">
    <registrar msg="CREAR SESION"/>
  </div>
</template>

<script>
import Registrar from '../components/registrar.vue'
// @ is an alias to /src

export default {
  name: 'crearCuenta',
  components: {
    Registrar
  },
  data(){
    return{
      
    }
  }
}
</script>
<style>
body{
  background-color:#3498db;;
}
</style>

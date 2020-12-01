<template>
  <div class="">
    <h1>ENGINE WEB</h1>
    <div class="d-flex align-items-center mt-5">
      <div class="contenedor-img ml-5">
        <img src="../assets/test-bmw.jpg" class="tamñoImg" alt="">
      </div>
      <div class="ml-5">
        <datos-vh msg="MARCA DE VEHÍCULO" @ocultar="pp=$event" v-if="pp==1 || pp==0"/>
        <datos-vh msg="REFERENCIA DE VEHÍCULO" @ocultar="pp=$event" v-if="pp==2 || pp==0"/>
        <datos-vh msg="MODELO VEHÍCULO" @ocultar="pp=$event" v-if="pp==3 || pp==0"/>
        <datos-vh msg="CONCENSIONARIO ASOCIADO" @ocultar="pp=$event" v-if="pp==4 || pp==0"/>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import DatosVh from '../components/DatosVh.vue'
// @ is an alias to /src
import sesion from '../components/sesion.vue'

export default {
  name: 'Home',
  components: {
    sesion,
    DatosVh
  },
  data(){
    return{
      pp:0
    }
  },
  methods:{
  }
  
}
</script>
<style>
body{
  background-color:#3498db;
}
.contenedor-img{
  width: 40%;
  padding: 2.5% 0px;
  background-color: white;
}
.tamñoImg{
  max-width: 90%;
  max-height: 90%;
}
</style>

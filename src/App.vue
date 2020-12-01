<template>
  <div id="app">
    <div id="nav">
      <div class="d-flex justify-content-between">
        <div class="ml-5">
          <router-link to="/inicio">Iniciar Sesion</router-link> | 
          <router-link to="/crearCuenta">Crear Cuenta</router-link>
        </div>
        <div class="usuario d-flex align-items-center">
          <button class="mr-3 btn btn-danger" @click="salir()">salir</button>
          <span class="">
            {{sesion}}
          </span>
          <div class="ml-3">
            <img src="./assets/test-bmw.jpg" alt="" width="100">
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'App',
  data(){
    return {
      sesion:localStorage.getItem('user')
    }
  },
  methods:{
    salir(){
      localStorage.removeItem('user')
      this.$router.push("/inicio");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color:#3498db;
}
#nav {
  padding: 30px;
  background-color: #0d243b;
  
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.usuario{
  display: inline;

  color:white;
}
</style>

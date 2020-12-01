<template>
  <div>
    <h2 class="cajaTextoInicio mt-2" >
      {{ msg }}
    </h2>
    <div>
      <form class="FormularioSesion mt-1">
        <div class="caja2">
          <label for="">USER</label>
        </div>
        <br />
        <div>
          <input type="text" placeholder="Usuario321" v-model="user"/>
        </div>
        <br />
        <div>
          <label for="clave">PASSWORD</label>
        </div>
        <br />
        <div>
          <input type="password" placeholder="************" required />
        </div>
        <br />
        <div>
          <button class="btn-primary" @click="getUser(user)">INICIAR SESION</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "sesion",
  props: {
    msg: String,
  },
  data(){
    return{
      user:"",
      usuarios:[]
    }
  },
  methods:{
    async getUser(campoBusqueda){
      
      if(campoBusqueda){
        this.$axios.get('http://localhost:8000/usuario',{params: {
          campo_busqueda: campoBusqueda
        }}).then((response)=>{
          this.usuarios = response.data
          localStorage.setItem('user', response.data[0].name_user)
          this.$router.push("/");
          console.log(response.data)
        }).catch(()=>{
          alert('No pude consultar los usuario')
        })
      }else{
        alert('Por favor ingrese un criterio')
      }
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.FormularioSesion {
  padding: 10px;
  margin-top: -20px;
  background-color: white;
  width: 25%;
  height: auto;
  color: rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 4px 1px rgba(30, 56, 139, 0.767);
}
.FormularioCrear {
  padding: 10px;
  margin-top: -20px;
  background-color: white;
  height: auto;
  color: rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 4px 1px rgba(30, 56, 139, 0.767);
}
.caja2 {
  box-sizing: content-box;
}
input {
  width: 100%;
  border-radius: 5px;
  height: 25px;
}
.cajaTextoInicio {
  padding: 5px;
  background-color: white;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  border: 2px black solid;
  border-radius: 10px;
  box-shadow: 5px 3px 1px rgba(30, 56, 139, 0.767);
}
.centrado{
  margin-left: 15%;
}
</style>

<template>
  <div>
    <h2 class="cajaTextoInicio mt-2">
      {{ msg }}
    </h2>
    <div class="FormularioCrear container-md mt-1">
      <form class="centrado">
        <div class="row mt-2">
          <div class="caja2 col-3 mt-2">
            <label for="">CORREO DE LA EMPRESA</label>
            <div>
              <input type="email" placeholder="empresacars@carros.com" v-model="EmailEntity"/>
            </div>
          </div>
          <div class="caja2 col-3 mt-2">
            <label for="">NOMBRE DE LA EMPRESA</label>
            <div>
              <input type="text" placeholder="CARSMOTOR" v-model="EntityName"/>
            </div>
          </div>
          <div class="caja2 col-3 mt-2">
            <label for="">DIRRECION EMPRESA</label>
            <div>
              <input type="text" placeholder="CRA 3B #24-21" v-model="direccion"/>
            </div>
          </div>
          <div class="caja2 col-3 mt-5">
            <label for="">NAME USER</label>
            <div>
              <input type="text" placeholder="CARSSMOTOR1999" v-model="nameUser"/>
            </div>
          </div>
          <br />

          <div class="caja2 col-3 mt-5">
            <label for="">PASSWORD</label>
            <div>
              <input type="password" placeholder="********" v-model="password"/>
            </div>
          </div>
          <br />
          <div class="caja2 col-3 mt-5">
            <label for="">URL DEL LOGO</label>
            <div>
              <input
                type="text"
                placeholder="https://www.bmw.com/exlm-og.jpg" v-model="UrlLogo"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row mt-4">
          <div class="caja2 col-3">
            <label for="">CIUDAD</label>
            <div>
              <select
                name="OS"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
              </select>
            </div>
          </div>
          <div class="caja2 col-3">
            <label for="">DEPARTAMENTO</label>
            <div>
              <select
                name="OS"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
              </select>
            </div>
          </div>
          <div class="caja2 col-3">
            <label for="">PAÍS</label>
            <div>
              <select
                name="OS"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-10 mt-4">
          <button class="btn-primary" @click="agregar()">REGISTRAR</button>
        </div>
      </form>
        
    </div>
    <!-- Esta tabla se debe de eliminar, solo se utiliza pára la comprobación del registro -->
    <table class="table table-dark mt-3">
      <thead>
        <tr >
          <th >
            Nombre empresa
          </th>
          <th >
            Email empresa
          </th>
          <th >
            Direccion empresa
          </th>
          <th >
            Nombre de usuario
          </th>
          <th >
            Logo usuario
          </th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(element, $index) in usuarios" :key="$index">
          <td >
            {{element.EntityName}}
          </td>
          <td >
            {{element.EmailEntity}}
          </td>
          <td>
            {{element.direccion}}
          </td>
          <td>
            {{element.nameUser}}
          </td>
          <td>
            <img :src="element.UrlLogo" alt="">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "registrar",
  props: {
    msg: String,
  },
  data() {
    return {
      usuarios:[],
      nameUser: "",
      password: "",
      EntityName: "",
      EmailEntity: "",
      direccion: "",
      UrlLogo: "",
    };
  },
  methods:{
    agregar(){
      this.usuarios.push({
        nameUser:this.nameUser,
        password:this.password,
        EntityName:this.EntityName,
        EmailEntity:this.EmailEntity,
        direccion:this.direccion,
        UrlLogo:this.UrlLogo
      })
      /* Lo siguiente que hay que hacer es enviar al usuiario a la pagina de iniciar sesion */
    }
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
.centrado {
  margin-left: 15%;
}
</style>

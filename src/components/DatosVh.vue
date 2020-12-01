<template>
  <div>
    <div class="p-2 mb-2 btn btn-dark text-white cursor" @click="OcultarElement()">
        {{msg}}
    </div>
    <div v-if="ver==1 || ver==2 || ver==4 || ver==3 " class="mb-3 mt-3">
        <select class="form-control" name="" id="">
            <option value="1">
                date 1
            </option>

        </select>
    </div>
    <div v-if="ver==1 || ver==2 || ver==4 || ver==3 ">
        <button type="submit" class="p-2 mb-2 btn btn-dark text-white cursor" @click="guardar()">
            GUARDAR
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatosVh",
  props: {
    msg: String,
  },
  data(){
    return{
        ver:0
    }
  },
  methods:{
    OcultarElement(){
        if(this.msg=="MARCA DE VEHÍCULO"){
            this.$emit("ocultar", this.ver=1)
        }else if(this.msg=="REFERENCIA DE VEHÍCULO"){
            this.$emit("ocultar", this.ver=2)
        }else if(this.msg=="MODELO VEHÍCULO"){
            this.$emit("ocultar", this.ver=3)
        }else if(this.msg== "CONCENSIONARIO ASOCIADO"){
            this.$emit("ocultar", this.ver=4)
        }
    },
    guardar(){
        this.$emit("ocultar", this.ver=0)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor{
    cursor:pointer;
}
</style>

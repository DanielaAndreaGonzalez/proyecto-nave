<template>
  <div class="container mt-3" >
    <h1>{{ msg }}</h1>
    
    <input type="text" class="form-control my-3" v-model="nombreNave" title="Escribe el telefono del arrendatario">
    <button class="btn btn-primary" @click.prevent="enviarDatos()">Agregar</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  
  name: "HelloWorld",
  nombreNave: "",
  methods: {
    enviarDatos() {
      const parametrosNave = {
                nombre: this.nombreNave,                   
                pais: "EE.UU",
                actividad: "2022-07-12T18:39:46.338+00:00",
                velocidad: 0,
                tipoCombustible: null,
                peso: 0,
                alto: 0,
                tipo: null,
                capacidadCarga: 0,
                potencia: 0,
                sistemaPropulsion: 0,
                tipoCarga: null             
      };
      console.log(parametrosNave)

      axios.post("http://localhost:8081/naves/guardarVehiculoLanzadera", parametrosNave)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {    
              console.log(error)            
                });
    }
  },
  props: {
    msg: String,
  },
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
</style>

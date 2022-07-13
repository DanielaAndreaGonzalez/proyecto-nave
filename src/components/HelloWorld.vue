<template>
  <div class="container mt-3" >
    <h1>{{ msg }}</h1>

    <button class="btn btn-primary" @click="cambiarEstadoLanzadera()">Vehiculo Lanzadera</button>    
    <button class="btn btn-dark" @click="cambiarEstadoNoTripulada()">Nave Espacial No tripulada</button>
    <button class="btn btn-danger" @click="cambiarEstadoTripulada()">Nave Espacial tripulada</button>
    <br>
    <br>
    <div v-if="vehiculoLanzadera">      
      <h4>Vehiculo Lanzadera</h4>             
        
        <input type="text" class="form-control my-3" name="nombrenave" id="nombrenave" placeholder="Ingrese nombre nave" v-model="nombreNave" title="Escribe el nombre de la nave">              
        <input type="text" class="form-control my-3" v-model="paisNave" placeholder="Ingrese país nave" title="Escribe el pais de la nave">
        <input type="date" class="form-control my-3" v-model="actividadNave" placeholder="Actividad nave" title="Escribe el inicio de la actividad">
        <input type="number" class="form-control my-3" v-model="velocidadNave" placeholder="Ingrese velocidad de la nave" title="Escribe la velocidad de la nave">
        <input type="text" class="form-control my-3" v-model="combustibleNave" placeholder="Ingrese combusible de la nave" title="Escribe el tipo de combustible">
        <input type="number" class="form-control my-3" v-model="pesoNave" placeholder="Ingrese peso de la nave" title="Escribe el peso">
        <input type="number" class="form-control my-3" v-model="altoNave" placeholder="Ingrese alto de la nave" title="Escribe el alto">
        <input type="text" class="form-control my-3" v-model="tipoNave" placeholder="Ingrese tipo de la nave" title="Escribe el tipo de nave">
        <input type="number" class="form-control my-3" v-model="capacidadNave" placeholder="Ingrese la capacidad de toneladas" title="Escribe la capacidad de carga">
        <input type="number" class="form-control my-3" v-model="potenciaNave" placeholder="Ingrese la potencia nave"  title="Escribe la potencia de la nave">
        <input type="text" class="form-control my-3" v-model="sistemaPropulsionNave" placeholder="Ingrese el sistema de propulsion"  title="Escribe el sistema de propulsión">
        <input type="text" class="form-control my-3" v-model="tipoCargaNave" title="Escribe el tipo de carga">    
        <button class="btn btn-primary" @click.prevent="enviarDatos()">Agregar</button>   
        <br>
      <br>
      <h3>Lista vehiculos lanzadera</h3>
      <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Actividad</th>
                    <th scope="col">Velocidad</th>
                    <th scope="col">Combustible</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Alto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Capacidad</th>
                    <th scope="col">Potencia</th>
                    <th scope="col">Sistema Propulsion</th>
                    <th scope="col">Tipo Carga</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="nave in naveLanzadera" :key="nave.id">
                    <td>{{nave.nombre}}</td>
                    <td>{{nave.pais}}</td>
                    <td>{{nave.actividad}}</td>
                    <td>{{nave.velocidad}}</td>
                    <td>{{nave.tipoCombustible}}</td>
                    <td>{{nave.peso}}</td>
                    <td>{{nave.alto}}</td>
                    <td>{{nave.tipo}}</td>
                    <td>{{nave.capacidadCarga}}</td>
                    <td>{{nave.potencia}}</td>
                    <td>{{nave.sistemaPropulsion}}</td>
                    <td>{{nave.tipoCarga}}</td>
                </tr>
            </tbody>
      </table>   
    </div>

    <div v-if="vehiculoNoTripulado">
      <h4>Nave Espacial No tripulada</h4>
      <input type="text" class="form-control my-3" placeholder="Ingrese nombre nave" v-model="nombreNave" title="Escribe el nombre de la nave">
      <input type="text" class="form-control my-3" placeholder="Ingrese país nave" v-model="paisNave" title="Escribe el pais de la nave">
      <input type="date" class="form-control my-3" placeholder="Actividad nave" v-model="actividadNave" title="Escribe el inicio de la actividad">
      <input type="number" class="form-control my-3" placeholder="Ingrese velocidad de la nave" v-model="velocidadNave" title="Escribe la velocidad de la nave">
      <input type="text" class="form-control my-3" v-model="combustibleNave" placeholder="Ingrese combusible de la nave" title="Escribe el tipo de combustible">
      <input type="number" class="form-control my-3" v-model="pesoNave" placeholder="Ingrese peso de la nave" title="Escribe el peso">
      <input type="number" class="form-control my-3" v-model="altoNave" placeholder="Ingrese alto de la nave" title="Escribe el alto">
      <input type="text" class="form-control my-3" v-model="tipoNave" placeholder="Ingrese tipo de la nave" title="Escribe el tipo de nave">
      <input type="number" class="form-control my-3" v-model="catidadMotores"  placeholder="Ingrese cantidad motores  de la nave" title="Escribe la cantidad de motores">
      <input type="text" class="form-control my-3" v-model="tipoEstudio" placeholder="Ingrese tipo de estudio" title="Escribe el tipo de estudio">
      
      <button class="btn btn-primary" @click.prevent="enviarDatosNoTripulada()">Agregar</button>

      <br>
      <br>
      <h3>Lista naves Espaciales No Tripuladas</h3>
      <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Actividad</th>
                    <th scope="col">Velocidad</th>
                    <th scope="col">Combustible</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Alto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Cantidad motores</th>
                    <th scope="col">Tipo Estudio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="nave in navesNotripuladas" :key="nave.id">
                    <td>{{nave.nombre}}</td>
                    <td>{{nave.pais}}</td>
                    <td>{{nave.actividad}}</td>
                    <td>{{nave.velocidad}}</td>
                    <td>{{nave.tipoCombustible}}</td>
                    <td>{{nave.peso}}</td>
                    <td>{{nave.alto}}</td>
                    <td>{{nave.tipo}}</td>
                    <td>{{nave.cantidadMotores}}</td>
                    <td>{{nave.tipoEstudio}}</td>

                </tr>
            </tbody>
      </table>
    </div>

    <div v-if="vehiculoTripulado">
      <h4>Nave Espacial tripulada</h4>
      <input type="text" class="form-control my-3" placeholder="Ingrese nombre nave" v-model="nombreNave" title="Escribe el nombre de la nave">
      <input type="text" class="form-control my-3" placeholder="Ingrese país nave" v-model="paisNave" title="Escribe el pais de la nave">
      <input type="date" class="form-control my-3" placeholder="Actividad nave" v-model="actividadNave" title="Escribe el inicio de la actividad">
      <input type="number" class="form-control my-3" placeholder="Ingrese velocidad de la nave" v-model="velocidadNave" title="Escribe la velocidad de la nave">
      <input type="text" class="form-control my-3" v-model="combustibleNave" placeholder="Ingrese combusible de la nave" title="Escribe el tipo de combustible">
      <input type="number" class="form-control my-3" v-model="pesoNave" placeholder="Ingrese peso de la nave" title="Escribe el peso">
      <input type="number" class="form-control my-3" v-model="altoNave" placeholder="Ingrese alto de la nave" title="Escribe el alto">
      <input type="text" class="form-control my-3" v-model="tipoNave" placeholder="Ingrese tipo de la nave" title="Escribe el tipo de nave">
      <input type="number" class="form-control my-3" v-model="cantidadPersonas" placeholder="Ingrese capacidad de personas" title="Escribe la cantidad de personas">
      <input type="text" class="form-control my-3" v-model="tipoObejetivo" placeholder="Ingrese el objetivo de estudio" title="Escribe el tipo objetivo">      
      <button class="btn btn-primary" @click.prevent="enviarDatosTripulada()">Agregar</button>      
      <br>
      <br>
      <h3>Lista naves Espaciales Tripuladas</h3>
      <table class="table">
            <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Pais</th>
                  <th scope="col">Actividad</th>
                  <th scope="col">Velocidad</th>
                  <th scope="col">Combustible</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Alto</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Cantidad motores</th>
                  <th scope="col">Tipo Estudio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="nave in navestripuladas" :key="nave.id">
                    <td>{{nave.nombre}}</td>
                    <td>{{nave.pais}}</td>
                    <td>{{nave.actividad}}</td>
                     <td>{{nave.nombre}}</td>
                    <td>{{nave.pais}}</td>
                    <td>{{nave.actividad}}</td>
                    <td>{{nave.velocidad}}</td>
                    <td>{{nave.tipoCombustible}}</td>
                    <td>{{nave.peso}}</td>
                    <td>{{nave.alto}}</td>
                    <td>{{nave.tipo}}</td>
                    <td>{{nave.cantidadPersonas}}</td>
                    <td>{{nave.tipoObjetivo}}</td>
                </tr>
            </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  mounted() {
    
  },
  data: function() {
     return {
        name: "HelloWorld",
        nombreNave: "",
        paisNave: "",
        actividadNave: "",
        velocidadNave : "",
        combustibleNave: "",
        pesoNave: 0,
        altoNave: 0,
        tipoNave: "",
        capacidadNave: 0,
        potenciaNave: 0,
        sistemaPropulsionNave: 0,
        tipoCargaNave: "",
        catidadMotores:"",
        tipoEstudio:"",
        cantidadPersonas: "",
        tipoObejetivo:"",

      vehiculoLanzadera :false,
      vehiculoTripulado:false,
      vehiculoNoTripulado:false,

      navestripuladas: [],
      naveLanzadera:[],
      navesNotripuladas:[]
     };
  },


  methods: {
    cambiarEstadoLanzadera(){
      this.listarDatos();
      this.vehiculoLanzadera = true;      
      this.vehiculoTripulado=false,
      this.vehiculoNoTripulado=false      
    },
    cambiarEstadoNoTripulada(){
      this.listarDatosNoTripulada();
      this.vehiculoLanzadera = false;      
      this.vehiculoTripulado=false,
      this.vehiculoNoTripulado=true      
    },
    cambiarEstadoTripulada(){
      this.listarDatosTripulada();
      this.vehiculoLanzadera = false;      
      this.vehiculoTripulado=true,
      this.vehiculoNoTripulado=false      
    },
    enviarDatos() {
      const parametrosNave = {
                nombre: this.nombreNave,                   
                pais: this.paisNave,
                actividad: this.actividadNave,
                velocidad: this.velocidadNave,
                tipoCombustible: this.combustibleNave,
                peso: this.pesoNave,
                alto: this.altoNave,
                tipo: this.tipoNave,
                capacidadCarga: this.capacidadNave,
                potencia: this.potenciaNave,
                sistemaPropulsion: this.sistemaPropulsionNave,
                tipoCarga: this.tipoCargaNave,
      };
      console.log(parametrosNave)
      /*axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)*/
      axios.post("http://localhost:8081/naves/guardarVehiculoLanzadera", parametrosNave)
            .then(response => {
                console.log(response.data);
                this.listarDatos();
                this.nombreNave = "",                   
                this.paisNave="",
                this.actividadNave="",
                this.velocidadNave="",
                this.combustibleNave="",
                this.pesoNave="",
                this.altoNave="",
                this.tipoNave="",
                this.capacidadNave="",
                this.potenciaNave="",
                this.sistemaPropulsionNave="",
                this.tipoCargaNave=""
            })
            .catch(error => {    
              console.log(error)            
                });
    },
    enviarDatosNoTripulada() {
      const parametrosNave = {
                nombre: this.nombreNave,                   
                pais: this.paisNave,
                actividad: this.actividadNave,
                velocidad: this.velocidadNave,
                tipoCombustible: this.combustibleNave,
                peso: this.pesoNave,
                alto: this.altoNave,
                tipo: this.tipoNave,
                catidadMotores:this.catidadMotores,
                tipoEstudio:this.tipoEstudio,
                
      };
      console.log(parametrosNave)
      /*axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)*/
      axios.post("http://localhost:8081/naves/guardarNaveNoTripulada", parametrosNave)
            .then(response => {
                console.log(response.data);
                this.listarDatosNoTripulada();
                this.nombreNave = "",                   
                this.paisNave="",
                this.actividadNave="",
                this.velocidadNave="",
                this.combustibleNave="",
                this.pesoNave="",
                this.altoNave="",
                this.tipoNave="",
                this.catidadMotores="",
                this.tipoEstudio=""
            })
            .catch(error => {    
              console.log(error)            
                });
    },
    enviarDatosTripulada() {
      const parametrosNave = {
                nombre: this.nombreNave,                   
                pais: this.paisNave,
                actividad: this.actividadNave,
                velocidad: this.velocidadNave,
                tipoCombustible: this.combustibleNave,
                peso: this.pesoNave,
                alto: this.altoNave,
                tipo: this.tipoNave,
                cantidadPersonas: this.cantidadPersonas,
                tipoObejetivo: this.tipoObejetivo
      };
      console.log(parametrosNave)

      //axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)
      axios.post("http://localhost:8081/naves/guardarNaveTripulada", parametrosNave)
            .then(response => {
                console.log(response.data);
                this.listarDatosTripulada();
                this.nombreNave = "",                   
                this.paisNave="",
                this.actividadNave="",
                this.velocidadNave="",
                this.combustibleNave="",
                this.pesoNave="",
                this.altoNave="",
                this.tipoNave="",
                this.cantidadPersonas="",
                this.tipoObejetivo=""
            })
            .catch(error => {    
              console.log(error)            
                });
    }, 
    listarDatosTripulada() {
      //axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)
      axios.get("http://localhost:8081/naves/listarNaveTripulada")
            .then(response => {
                console.log(response.data);   
                this.navestripuladas =  response.data ;
            })
            .catch(error => {    
              console.log(error)            
                });
    },    
    listarDatosNoTripulada() {
      //axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)
      axios.get("http://localhost:8081/naves/listarNaveNoTripulada")
            .then(response => {
                console.log(response.data);   
                this.navesNotripuladas =  response.data ;
            })
            .catch(error => {    
              console.log(error)            
                });
    }, 
    listarDatos() {
      //axios.post("https://estacionespacialsofka.herokuapp.com/naves/guardarVehiculoLanzadera", parametrosNave)
      axios.get("http://localhost:8081/naves/listarVehiculoLanzadera")
            .then(response => {
                console.log(response.data);   
                this.naveLanzadera =  response.data ;
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

module.exports = {    
    devServer: {
      port:8080,
      proxy: {
        '/naves':{
          target: 'https://estacionespacialsofka.herokuapp.com/',
          ws: true, 
          changeOrigin:true
        }
      }
    }
  }
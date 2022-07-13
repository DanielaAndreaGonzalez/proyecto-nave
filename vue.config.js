module.exports = {    
    devServer: {
      port:8080,
      proxy: {
        '/naves':{
          target: 'http://localhost:8081',
          ws: true, 
          changeOrigin:true
        }
      }
    }
  }
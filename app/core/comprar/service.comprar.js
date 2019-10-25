'use strict';
  core.factory('compraMovil',
    function() {

      return {
        producto: [],
        getProducto: function() {
            return this.producto;
        },
        setProducto: function(p) {

          let encontrado = this.producto.filter(function (tel){
                              return tel.id == p.id;
                              })

          //if (this.producto.filter(telefono => this.producto.telefono.id == p.id)){
          if (encontrado.telefono.id){
            alert("Encontrado");
          }else{
            this.producto.push({"telefono":p,"cantidad":1});
          };  
          
            


        }

      }; //end return
    } // end function

  );
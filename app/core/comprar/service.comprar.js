'use strict';
  core.factory('compraMovil',
    function() {

      return {
        producto: [],
        getProducto: function() {
            return this.producto;
        },
        setProducto: function(p) {
            this.producto.push(p);
        }

      }; //end return
    } // end function

  );
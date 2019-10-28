'use strict';
  core.factory('compraMovil',
    function() {

      return {

        compras: new Map(),

        getCompras: function() {
            console.trace('getCompras');
            return Array.from( this.compras.values() );
        },
        guardarCompra: function(compra) {
            console.trace('guardarCompra %o', compra);

            let c = this.compras.get( compra.id );    // buscamos si existe

            if ( c ){           // existe

              c.cantidad++;
              // this.compras.set( c.id, c );

            }else{                             // no existe, guardar en Map

              this.compras.set( compra.id, //key
                                compra )   //value
            }



        }

      }; //end return
    } // end function

  );
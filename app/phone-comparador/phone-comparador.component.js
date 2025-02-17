'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = {};

        Phone.getAll().then( 
          function successCallback(response) {
            console.trace("Success");
            self.phones = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );

        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

       

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar


        
        $scope.$on("eventoCompra", function(event, data){

          let compra = {
            "id": data.telefono.id,
            "nombre": data.telefono.name,
            "imagen": data.telefono.imageUrl,
            "cantidad": 1
          };
          compraMovil.guardarCompra(compra);

           alert('eventoCompra en padre ' + data.telefono.id);

        });

      }
    ]
  });

  /**
   * Detalle del Comparador
   */
  angular.
  module('phoneComparador').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: ['compraMovil','$scope',
      function PhoneComparadorDetalleController(compraMovil,$scope) {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;
        self.añadir = {};

        self.comprar = function(){
          
          console.trace('click boton compra %o', self.mostrar  );
          //compraMovil.setProducto(self.mostrar);
          $scope.$emit("eventoCompra", { telefono: self.mostrar });

        }

        /*
        this.$onChanges = function (changes) {
          console.debug('cambia valor %o', changes);
          self.p1 = changes.phone1.currentValue;
        };
        */



      }
    ]
  });
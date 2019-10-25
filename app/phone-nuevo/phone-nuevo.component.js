'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone', '$scope',
      function PhoneListController(Phone, $scope) {
        //this.phones = Phone.query();
        //this.orderProp = 'age';

        $scope.crearTelefono = function (edad, idTelefono, imageUrl, nombre, snippet, flash, ram ){
          let telefono = {};
          telefono={
                      "age":edad,
                      "id":idTelefono,
                      "imageUrl":imageUrl,
                      "name":nombre,
                      "snippet":snippet,
                      "storage": {
                        "flash": flash,
                        "ram": ram
                      }
                    };

          let promesa = Phone.crearTelefono(telefono);
          //$scope.actualizar(promesa);
          promesa.then( 
            function successCallback(response) {
              console.trace("Success");
              alert("Telefono " + telefono.name + " creado");
            },
            function errorCallback(response) {
              console.warn("Error");
            }
          );
        };

      }
    ]
  });

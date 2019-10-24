'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['$routeParams', 'Phone', 'compraMovil', 
      function PhoneCarritoController($routeParams, Phone, compraMovil) {
        var self = this;
        self.productos=compraMovil.getProducto();
        /*
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
        */
      }
    ]
  });
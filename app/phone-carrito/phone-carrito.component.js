'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['$routeParams', 'Phone', 'compraMovil', 
      function PhoneCarritoController($routeParams, Phone, compraMovil) {
        console.trace('PhoneCarritoController');
        
        self = this;
        self.phones = compraMovil.getCompras();
      }
    ]
  });
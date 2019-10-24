'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        //this.phones = Phone.query();
        //this.orderProp = 'age';
      }
    ]
  });

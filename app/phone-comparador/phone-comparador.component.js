'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {
        var self = this;
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        

        self.orderProp = 'age';

        self.seleccionar = function(phone){
          console.warn('Seleccionar');
          if(!self.phone1 && !self.phone2){
            self.phone1 = phone;
          }else if (self.phone1 && !self.phone2){
            self.phone2 = phone;
          }else{
            self.phone1 = self.phone2;
            self.phone2 = phone;
          }

        }

        
        

      }
    ]
  });

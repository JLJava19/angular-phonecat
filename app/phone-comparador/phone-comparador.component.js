'use strict';

// Register `phoneList` component, along with its associated controller and template
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
        self.mostrarDiferencia = false;

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

        self.comparacion = function(phone1, phone2){
          console.warn('comparacion');
          
          if(self.phone1.storage.flash!=undefined && self.phone2.storage.flash!=undefined){
            let flashTelefono1 = parseInt(self.phone1.storage.flash.split('MB')[0]);
            let flashTelefono2 = parseInt(self.phone2.storage.flash.split('MB')[0]);
            if (flashTelefono1>flashTelefono2){
              self.mostrarDiferencia = true;
              return '+' + (flashTelefono1 - flashTelefono2);
            }else{
              self.mostrarDiferencia = true;
              return '-' + (flashTelefono2 - flashTelefono1);
            }

          }else{

            self.mostrarDiferencia = false;
          }

        }

      }
    ]
  });

'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparadorTelefono').
  component('phoneComparadorTelefono', {
    templateUrl: 'phone-comparador-telefono/phone-comparador-telefono.template.html',
    bindings: {
        telefono1: '=', telefono2: '='   // Los parametros que recibe el componente
    },
    controller: function PhoneComparadorTelefonoController() {
        var self = this;
        self.mostrarDiferencia = false;
        
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

        self.onchange

      }
    
  });

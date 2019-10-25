angular.module('phoneFilter',[
    'app.controller.app',    
    'app.filter.range'
]);

angular.
  module('phoneFilter').
  component('phoneFilter', {
    templateUrl: 'phone-filter/phone-filter.template.html',
    controller: ['Phone',
      function PhoneFilterController(Phone) {
        /*
        this.phones = Phone.query();
        this.orderProp = 'age';
        */
       
        var self = this;

        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

       

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
      }
    ]
  });

angular.module('app.filter.range',[])
  .filter('rangeFilter', function () {
  return function (items, attr, min, max) {
      var range = [],
          min=parseFloat(min),
          max=parseFloat(max);
      for (var i=0, l=items.length; i<l; ++i){
          var item = items[i];
          if(item[attr]<=max && item[attr]>=min){
              range.push(item);
          }
      }
      return range;
  };
});


angular.module('app.filter.range',[])
  .filter('rangeFilterByFlash', function () {
  return function (items, attr, min, max) {
      var range = [],
          min=parseFloat(min),
          max=parseFloat(max);
      for (var i=0, l=items.length; i<l; ++i){
          var item = items[i];
          if(item[attr].flash<=max && item[attr].flash>=min){
              range.push(item);
          }
      }

      // Retornar los telefonos al padre por rango
      // Y el scope ??????? TODO
      //$scope.$emit("eventoRango", { telefono: range });
      //$scope.$emit("eventoRango", range);
      return range;
  };
});



angular.module('app.controller.app',[])
  .controller('AppCtrl',[
  '$scope', 'Phone',
  function($scope, Phone){
      $scope.model = {}
     

      Phone.getAll().then( 
        function successCallback(response) {
          console.trace("Success");
          $scope.model.products = response.data;
        },
        function errorCallback(response) {
          console.warn("Error");
        }
      );

      $scope.ui = {
          min: 0,
          max: 32000,
          sort: 'name'
      };      

          // Replaced by directive below 
          // $scope.$watch('ui.min',function(nVal,oVal){
          //    $scope.ui.min = parseInt(nVal);
          // })

          // $scope.$watch('ui.max',function(nVal,oVal){
          //    $scope.ui.max = parseInt(nVal);
          // })
      }
  ])


  //  directive to parse input as float (not string)
  .directive('input', function() {
      return {
          restrict: 'E',
          require: '?ngModel',
          link: function(scope, element, attrs, ngModel) {
              if('numeric' in attrs) { ngModel.$parsers.push(parseFloat); }
          }
      };
  });

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




angular.module('app.controller.app',[])
  .controller('AppCtrl',[
  '$scope',
  function($scope){
      $scope.model = {}
      $scope.model.products = [
          { name: 'A', price: 100  },
          { name: 'B', price: 500  },
          { name: 'C', price: 120  },
          { name: 'D', price: 100  },
          { name: 'E', price: 1.99 },
          { name: 'F', price: 710  },
          { name: 'G', price: 123  },
          { name: 'H', price: 630  },
          { name: 'I', price: 458  },
          { name: 'J', price: 820  }            
      ];

      $scope.ui = {
          min: 0,
          max: 250,
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

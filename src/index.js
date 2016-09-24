var districtMapDirective = function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {},
    template: '<div><leaflet height="500px" width="800px"></leaflet></div>',
    link: function($scope) {

    }
  };
};

angular.module('sgDistrictMap', ['leaflet-directive']).
  directive('sgDistrictMap', districtMapDirective);

districtMapDirective.$inject = ['$window', '$timeout', '$document'];
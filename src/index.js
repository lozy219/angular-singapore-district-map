var districtMapDirective = function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: false,
    template: '<div><leaflet id="district" style="height: 500px" on-map-initialized="initMap(map)"></leaflet></div>',
    controller: ['$scope', function($scope) {
      $scope.initMap = function(map) {
        var accessToken = '';
        console.log(L);
        L.tileLayer('https://api.mapbox.com/styles/v1/golearn/citi92bxj002b2jtk2imqya82/tiles/256/{z}/{x}/{y}?access_token=' + accessToken, {
          attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
      }
    }],
    link: function($scope) {
    }
  };
};

angular.module('sgDistrictMap', ['angular-leaflet']).
  directive('sgDistrictMap', districtMapDirective);

districtMapDirective.$inject = ['$timeout'];